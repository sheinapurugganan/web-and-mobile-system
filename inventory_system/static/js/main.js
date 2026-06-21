function confirmDelete(itemName) {
    return confirm(`Are you sure you want to delete "${itemName}" from the inventory?`);
}

// Add smooth fade-out for flash messages
document.addEventListener('DOMContentLoaded', () => {
    const flashMessages = document.querySelectorAll('.flash-msg');
    
    flashMessages.forEach(msg => {
        setTimeout(() => {
            msg.style.opacity = '0';
            msg.style.transition = 'opacity 1s ease';
            setTimeout(() => {
                msg.remove();
            }, 1000);
        }, 3000);
    });
});
