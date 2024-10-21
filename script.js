let elementCount = 0;

// Task 2: Add New Elements to the DOM
const addBtn = document.querySelector('#add-btn');
const container = document.querySelector('#dynamic-content');

addBtn.addEventListener('click', () => {
    elementCount++; // Increment element count for numbering
    const newDiv = document.createElement('div');
    newDiv.classList.add('dynamic-box');

    // Create content for the new element
    newDiv.innerHTML = `
        <p>Box #${elementCount}</p>
        <button class="remove-btn">Remove</button>
        <input type="checkbox" class="toggle-color"> Toggle Color
    `;

    // Append the new element to the container
    container.appendChild(newDiv);

    // Add event listeners for the new Remove button and Toggle checkbox
    const removeBtn = newDiv.querySelector('.remove-btn');
    const toggleCheckbox = newDiv.querySelector('.toggle-color');

    // Remove functionality
    removeBtn.addEventListener('click', () => {
        newDiv.remove();
    });

    // Toggle color functionality
    toggleCheckbox.addEventListener('change', () => {
        newDiv.classList.toggle('active');
    });
});
