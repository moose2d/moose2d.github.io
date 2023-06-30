$(function(){
  $("#navbar-placeholder").load("navbar.html");
  $("#footer-placeholder").load("footer.html");
  $("#image-placeholder").load("image_item.html")
});

$(document).ready(function() {
    // Event handler for new user registration form
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();  // Prevent the form from being submitted normally
        var email = $('#registerEmail').val();
        var password = $('#registerPassword').val();

        // You'd then need to send this data to your server and handle the response
        console.log('Form submitted', email, password);
    });

    // Event handler for login form
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();  // Prevent the form from being submitted normally
        var email = $('#loginEmail').val();
        var password = $('#loginPassword').val();

        // You'd then need to send this data to your server and handle the response
        console.log('Form submitted', email, password);
    });
    // Other event handlers and JavaScript code as required...
});

$(document).ready(function() {
    // ... other code ...

    if (window.location.pathname.endsWith('purchase.html')) {
        var params = new URLSearchParams(window.location.search);
        var imageId = params.get('id');

        // Dummy data for demo purposes - you might get this from a server or API in a real application
        var images = [
            { id: '1', src: 'images/heart_foraxx.jpg', description: 'Image 1 description', price: '$100' },
            { id: '2', src: 'images/heartNebula_1.jpg', description: 'Image 2 description', price: '$100' },
            { id: '3', src: 'images/heartNebula_2.jpg', description: 'Image 3 description', price: '$100' },
            // ... other images
        ];

        var image = images.find(function(img) { return img.id === imageId; });

        $('#purchase-content').html(`
            <h1>Purchase Print</h1>
            <img src="${image.src}" alt="Image ${image.id}" class="img-fluid">
            <p>${image.description}</p>
            <p>Price: ${image.price}</p>
            <!-- Include purchase options here -->
        `);
    }
});
