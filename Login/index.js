document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const loginContainer = document.getElementById('login-container');
            const registerContainer = document.getElementById('register-container');
            const securedPage = document.getElementById('secured-page');
            const showRegisterBtn = document.getElementById('show-register');
            const showLoginBtn = document.getElementById('show-login');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            const logoutBtn = document.getElementById('logout-btn');
            const userAvatar = document.getElementById('user-avatar');
            const userName = document.getElementById('user-name');
            const userEmail = document.getElementById('user-email');

            // Show register form
            showRegisterBtn.addEventListener('click', function(e) {
                e.preventDefault();
                loginContainer.style.display = 'none';
                registerContainer.style.display = 'flex';
            });

            // Show login form
            showLoginBtn.addEventListener('click', function(e) {
                e.preventDefault();
                registerContainer.style.display = 'none';
                loginContainer.style.display = 'flex';
            });

            // Register form validation
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('register-name').value;
                const email = document.getElementById('register-email').value;
                const password = document.getElementById('register-password').value;
                const confirm = document.getElementById('register-confirm').value;
                
                let isValid = true;
                
                // Name validation
                if (name.trim() === '') {
                    document.getElementById('register-name-error').style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById('register-name-error').style.display = 'none';
                }
                
                // Email validation
                if (!validateEmail(email)) {
                    document.getElementById('register-email-error').style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById('register-email-error').style.display = 'none';
                }
                
                // Password validation
                if (password.length < 8 || !/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
                    document.getElementById('register-password-error').style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById('register-password-error').style.display = 'none';
                }
                
                // Confirm password validation
                if (password !== confirm) {
                    document.getElementById('register-confirm-error').style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById('register-confirm-error').style.display = 'none';
                }
                
                if (isValid) {
                    const userData = {
                        name: name,
                        email: email,
                        password: password 
                    };
                    
                    localStorage.setItem('userData', JSON.stringify(userData));
                    
                    alert('Registration successful! Please login with your credentials.');
                    registerContainer.style.display = 'none';
                    loginContainer.style.display = 'flex';
                    registerForm.reset();
                }
            });

            // Login form validation
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                
                let isValid = true;
                
                // Email validation
                if (!validateEmail(email)) {
                    document.getElementById('login-email-error').style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById('login-email-error').style.display = 'none';
                }
                
                // Password validation
                if (password.length < 8) {
                    document.getElementById('login-password-error').style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById('login-password-error').style.display = 'none';
                }
                
                if (isValid) {
                    const storedUserData = localStorage.getItem('userData');
                    
                    if (storedUserData) {
                        const userData = JSON.parse(storedUserData);
                        
                        if (userData.email === email && userData.password === password) {
                            userAvatar.textContent = getInitials(userData.name);
                            userName.textContent = userData.name;
                            userEmail.textContent = userData.email;
                            
                            loginContainer.style.display = 'none';
                            securedPage.style.display = 'block';
                            localStorage.setItem('isLoggedIn', 'true');
                            localStorage.setItem('currentUser', JSON.stringify(userData));
                        } else {
                            alert('Invalid email or password. Please try again.');
                        }
                    } else {
                        alert('No user found with these credentials. Please register first.');
                    }
                    
                    loginForm.reset();
                }
            });

            logoutBtn.addEventListener('click', function() {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('currentUser');
                
                securedPage.style.display = 'none';
                loginContainer.style.display = 'flex';
            });

            function checkLoginStatus() {
                const isLoggedIn = localStorage.getItem('isLoggedIn');
                const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
                
                if (isLoggedIn === 'true' && currentUser.email) {
                    userAvatar.textContent = getInitials(currentUser.name);
                    userName.textContent = currentUser.name;
                    userEmail.textContent = currentUser.email;
                    
                    loginContainer.style.display = 'none';
                    securedPage.style.display = 'block';
                }
            }

            // Helper functions
            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
            
            function getInitials(name) {
                return name.split(' ').map(word => word[0]).join('').toUpperCase();
            }

            // Check login status on page load
            checkLoginStatus();
        });