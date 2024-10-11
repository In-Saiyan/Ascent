// // Script to gradually change background color on scroll
// window.addEventListener('scroll', function () {
//     const heroSection = document.querySelector('.hero-section');
//     const mainContent = document.querySelector('.main-content');
    
//     const scrollY = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const startChange = windowHeight / 2; // Start color change when halfway through the hero section
//     const endChange = windowHeight; // End color change when scrolling past the hero section

//     if (scrollY > startChange) {
//         // Calculate the scroll progress from startChange to endChange
//         const scrollProgress = (scrollY - startChange) / (endChange - startChange);
        
//         // Ensure the scrollProgress is between 0 and 1
//         const progress = Math.min(Math.max(scrollProgress, 0), 1);
        
//         // Create a color transition from dark (#1b1b1b) to light (#f8f8f8)
//         const darkColor = [27, 27, 27]; // RGB of #1b1b1b
//         const lightColor = [248, 248, 248]; // RGB of #f8f8f8

//         // Calculate the new background color based on the scroll progress
//         const newColor = darkColor.map((start, index) => 
//             Math.round(start + (lightColor[index] - start) * progress)
//         );

//         // Apply the new color to the main content
//         mainContent.style.backgroundColor = `rgb(${newColor.join(',')})`;
//     } else {
//         // Reset to the default dark background if the scroll is less than startChange
//         mainContent.style.backgroundColor = '#f8f8f8';
//     }
// });
