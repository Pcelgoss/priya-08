const customerForm = document.getElementById('customerForm');

customerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    
    const customerData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value, 
        phone: document.getElementById('phone').value,
        age:  document.getElementsById('Age').value,
        address: document.getElementById('address').value
    };
    
    localStorage.setItem('customerDetails', JSON.stringify(customerData));
    
    // Optionally display a confirmation message
    alert("Customer details saved successfully!");
});

// Load existing customer details on page load
let storedData = localStorage.getItem('customerDetails');
if (storedData) {
    const customerDetails = JSON.parse(storedData);
    document.getElementById('name').value = customerDetails.name;
    document.getElementById('email').value = customerDetails.email;
    document.getElementById('phone').value = customerDetails.phone;
    document.getElementById('Age').value = customerDetails.Age;
    document.getElementById('address').value = customerDetails.address;
    
}