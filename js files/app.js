// Store users in localStorage (if no users exist yet)
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}

// Sign-Up Logic
document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validate password match
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Check if the user already exists
  const users = JSON.parse(localStorage.getItem('users'));
  if (users.some(user => user.email === email)) {
    alert('User already exists. Please log in!');
    return;
  }

  // Create new user object
  const newUser = { username, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  // Redirect to login page after successful sign-up
  alert('Sign-up successful! Please log in.');
  window.location.href = 'login.html';
});

// Login Logic
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Check if the user exists
  const users = JSON.parse(localStorage.getItem('users'));
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Successful login
    alert('Login successful! Welcome back!');
    window.location.href = 'index.html'; // Redirect to the homepage or dashboard
  } else {
    // Invalid credentials
    alert('Invalid email or password. Please try again.');
  }
});

// Toggle Password Visibility
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}
