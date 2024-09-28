function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Custom validation
    if (!email || !password) {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

function validateSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Custom validation
    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

function toggleForm() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');

    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    }
}
// Filter function to show/hide gyms based on selected service
function filterGyms() {
    const selectedService = document.getElementById('service-filter').value;
    const gymItems = document.querySelectorAll('.gym-item');

    gymItems.forEach((item) => {
        const gymService = item.getAttribute('data-service');

        if (selectedService === 'all' || gymService.includes(selectedService)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
