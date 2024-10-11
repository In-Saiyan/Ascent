window.onscroll = function() {
    // color shift
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const triggerPoint = pageHeight / 8; 

    if (scrollPosition > triggerPoint * 7) {
        document.body.style.backgroundColor = "#F3D1B0"; 
    } else if (scrollPosition > triggerPoint * 6) {
        document.body.style.backgroundColor = "#E1B599"; 
    } else if (scrollPosition > triggerPoint * 5) {
        document.body.style.backgroundColor = "#D19B82";
    } else if (scrollPosition > triggerPoint * 4) {
        document.body.style.backgroundColor = "#BE806B"; 
    } else if (scrollPosition > triggerPoint * 3) {
        document.body.style.backgroundColor = "#A46B5A";
    } else if (scrollPosition > triggerPoint * 2) {
        document.body.style.backgroundColor = "#8C5A4A";
    } else if (scrollPosition > triggerPoint) {
        document.body.style.backgroundColor = "#6B3E3A";
    } else {
        document.body.style.backgroundColor = "#4B2E2A"; 
    }
    // top bar 
    const topbar = document.getElementById("topbar");
    const scrollPosition2 = window.scrollY;
    const halfway = document.documentElement.scrollHeight / 5;

    if (scrollPosition2 > halfway) {
        topbar.style.display = "block";
    } else {
        topbar.style.display = "none";
    }
};
