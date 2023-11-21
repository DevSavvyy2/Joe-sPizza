window.onload = function() {
    // Check for LocalStorage support
    if (localStorage) {
        // Populate the form fields
        populateForm(form);
    }
}
window.onload = function() {
    // Check for the LocalStorage support.
    if (localStorage) {
        // Get the form
        var form = document.getElementById('bookingsForm');
        // Event listener for when he bookings form is submitted.
        form.addEventListener('submit', function(e) {
          saveData(form);
        });
    }
}

// Save the form data in LocalStorage.
function saveData() {
    // Fetch the input elements.
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');

    // Store the values.
    localStorage.setItem('name', name.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('email', email.value);
}

// Attempt to populate the form using data stored in LocalStorage.
function populateForm() {
   // Fetch the input elements.
   var name = document.getElementById('name');
   var phone = document.getElementById('phone');
   var email = document.getElementById('email');  

// Retrieve the saved data and upgrade the values of the form fields.
if (localStorage.getItem('name') !=null) {
    name.value = localStorage.getItem('name');
}
if (localStorage.getItem('phone') !=null) {
    phone.value = localStorage.getItem('phone');
}
if (localStorage.getItem('email') !=null) {
    email.value = localStorage.getItem('email');
}
}
