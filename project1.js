 
window.onload = initializePageFeatures;
 function initializePageFeatures() {
    const welcomeHeading = document.querySelector('h1');
     const helpLink = document.querySelector('.nav a[href*="help.html"]');

    if (helpLink) {
        helpLink.addEventListener('click', function(event) {
                 event.preventDefault(); 
            alert('We will add the rest of the dishes soon....');
                    window.location.href = helpLink.href;
        });
    }
     const burger = document.querySelector('.burger-menu');
      const menu = document.querySelector('.nav ul');

    if (burger) {
    burger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
}
    
    function highlightPie(imageElement) {
      
        const parentElement = imageElement.parentNode; 

    
        parentElement.classList.toggle('highlighted');
    }
    
    const pieImages = document.querySelectorAll('.image-item-4 img');
    pieImages.forEach(img => {
        img.addEventListener('click', function() {
            highlightPie(this);
        });
        img.style.cursor = 'pointer'; 
    });

}
