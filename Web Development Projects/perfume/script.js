// JavaScript to show an alert when a "Learn More" button is clicked
// JavaScript for handling the 'Learn More' button click and smooth redirection
const learnMoreButtons = document.querySelectorAll('.learn-more');

learnMoreButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action
        const product = e.target.getAttribute('data-product'); // Get the product data

        // Confirm before redirecting
        const confirmRedirect = confirm("Do you want to continue to the product details page?");
        if (confirmRedirect) {
            window.location.href = `product.html`; // Redirect to product page
        }
    });
});
