document.addEventListener("DOMContentLoaded", function() {
    console.log('HERE ')
    const overlay = document.getElementById('overlay')! as HTMLDivElement;
    const element = new Image()
    
    element.src = './images/zoom_background.jpg'
    
    overlay.appendChild(element)

    overlay.insertAdjacentElement('afterbegin', element)

    // Function to update overlay position
    function updateOverlayPosition(x: number, y: number) {
        overlay.style.left = x + 'px';
        overlay.style.top = y + 'px';
    }

    // Event listener to handle dragging overlay
    let isDragging = false;
    let offsetX: number, offsetY: number;

    overlay.addEventListener('mousedown', function(e) {
        console.log("here")
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            console.log("here")
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            updateOverlayPosition(x, y);
        }
    });

    document.addEventListener('mouseup', function() {
        console.log("here false")
        isDragging = false;
    });

    // Example: Add more functionality for overlay controls here
});
