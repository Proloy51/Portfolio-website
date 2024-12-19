/*function toggleExpand(element) {
    const serviceCard = element.closest('.projects-format'); // Get the parent card
    const isExpanded = serviceCard.classList.contains('expanded');

    if (isExpanded) {
        // Collapse the card
        serviceCard.classList.remove('expanded');
        element.querySelector('span').innerText = 'Read More';
    } else {
        // Expand the card
        serviceCard.classList.add('expanded');
        element.querySelector('span').innerText = 'Show Less';
    }
}*/



function toggleExpand(button) {
    const fullDesc = button.parentElement.querySelector('.projects-full-desc');
    const shortDesc = button.parentElement.querySelector('.projects-desc');
    const span = button.querySelector('span');
    
    if (fullDesc.style.display === 'none') {
        fullDesc.style.display = 'block';
        shortDesc.style.display = 'none';
        span.textContent = 'Show Less';
    } else {
        fullDesc.style.display = 'none';
        shortDesc.style.display = 'block';
        span.textContent = 'Read More';
    }
}


function toggleExpandresearch(button) {
    const formatDiv = button.closest('.research-format');
    const fullDesc = formatDiv.querySelector('.research-full-desc');
    const shortDesc = formatDiv.querySelector('.research-desc');

    if (fullDesc.style.display === 'none' || !fullDesc.style.display) {
        fullDesc.style.display = 'block'; // Show full description
        shortDesc.style.display = 'none'; // Hide short description
        button.querySelector('span').innerText = 'Show Less'; // Update button text
    } else {
        fullDesc.style.display = 'none'; // Hide full description
        shortDesc.style.display = 'block'; // Show short description
        button.querySelector('span').innerText = 'Read More'; // Update button text
    }
}