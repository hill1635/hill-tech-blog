const loginFormHandler = async (event) => {
    event.preventDefault();

    //Need to create id username-login for email login input in handlebars
    const username = document.querySelector('#username-login').value.trim();
    //Need to create id password-login for password login input in handlebars
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);