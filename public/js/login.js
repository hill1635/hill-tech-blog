const loginFormHandler = async (event) => {
    event.preventDefault();

    //Need to create id email-login for email login input in handlebars
    const email = document.querySelector('#email-login').value.trim();
    //Need to create id password-login for password login input in handlebars
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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