document.addEventListener("scroll", function() {
    const heroImage = document.querySelector(".hero-banner");
    const content = document.querySelector(".content");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Adjust the fade-out effect of the hero image
    const fadeOutStart = 100;  // Start fading out the hero image
    const fadeOutEnd = windowHeight; // Complete the fade-out at the end of the viewport

    if (scrollPosition > fadeOutEnd) {
        heroImage.style.opacity = 0;
    } else if (scrollPosition > fadeOutStart) {
        heroImage.style.opacity = 1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    } else {
        heroImage.style.opacity = 1;
    }

    // Adjust the fade-in effect of the content
    const fadeInStart = fadeOutEnd / 16; // Start fading in the content earlier
    const fadeInEnd = fadeOutEnd + 100; // Ensure content is fully visible by the time the hero image is fully faded out

    if (scrollPosition > fadeInEnd) {
        content.style.opacity = 1;
    } else if (scrollPosition > fadeInStart) {
        content.style.opacity = (scrollPosition - fadeInStart) / (fadeInEnd - fadeInStart);
    } else {
        content.style.opacity = 0;
    }
});    
