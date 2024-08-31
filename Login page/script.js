// Get the form and input fields
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the input values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Perform basic authentication (this is a very simple example and should not be used in production)
  if (username === 'admin' && password === 'password') {
    alert('Login successful!');
    // You can redirect to a dashboard or another page here
  } else {
    alert('Invalid username or password');
  }
});