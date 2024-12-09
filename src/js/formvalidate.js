document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Clear previous error messages
    document.querySelectorAll('.msgError').forEach(el => el.textContent = '');
  
    let isValid = true;
  
    // Validate name
    const fname = document.getElementById('fname').value.trim();
    if (fname.length < 2) {
      document.getElementById('msgError').textContent = 'First Name must be at least 2 characters long.';
      isValid = false;
    }
    const lname = document.getElementById('lname').value.trim();
    if (lname.length < 2) {
      document.getElementById('msgError').textContent = 'Last Name must be at least 2 characters long.';
      isValid = false;
    }

    const contactno = document.getElementById('contactno').value.trim();
    if (!(contactno.length == 10)) {
      document.getElementById('msgError').textContent = 'Contact Number Must be 10 numbers long.';
      isValid = false;
    }
  
    // Validate email
    const email = document.getElementById('uemail').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('msgError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }
  
    // Validate message
    const message = document.getElementById('feedback').value.trim();
    if ((message.length < 10)&&(message.length > 1)) {
      document.getElementById('msgError').textContent = 'Message must be at least 10 characters long.';
      isValid = false;
    }
  
    // If valid, submit form or send data via AJAX
    if (isValid) {
      alert('Form submitted successfully!');
      // Optionally, send the data using fetch or XMLHttpRequest
    }
  });