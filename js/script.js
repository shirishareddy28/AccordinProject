document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    const expandAllButton = document.getElementById('expandAll');
    const searchBar = document.getElementById('searchBar');

    // Toggle accordion content
    accordions.forEach(accordion => {
        accordion.querySelector('.accordion-header').addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.fa');
            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.classList.add('fa-plus');
                icon.classList.remove('fa-minus');
            } else {
                content.style.display = 'block';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });

    // Expand all accordions
    expandAllButton.addEventListener('click', () => {
        accordions.forEach(accordion => {
            const content = accordion.querySelector('.accordion-content');
            const icon = accordion.querySelector('.fa');
            if (content.style.display !== 'block') {
                content.style.display = 'block';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });

    // Form Validation
    const form = document.getElementById('accordionForm');
    form.addEventListener('submit', (e) => {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            e.preventDefault();  // Stop form submission
        } else {
            emailError.textContent = '';  // Clear error message
        }
    });

    // Search Bar Functionality
    searchBar.addEventListener('keyup', () => {
        const query = searchBar.value.toLowerCase();
        accordions.forEach(accordion => {
            const title = accordion.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                accordion.style.display = '';
            } else {
                accordion.style.display = 'none';
            }
        });
    });
});

