window.onscroll = function () {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const triggerPoint = pageHeight / 8;


  if (scrollPosition > triggerPoint * 7) {
    document.body.style.backgroundColor = "black";
} else if (scrollPosition > triggerPoint * 6) {
    document.body.style.backgroundColor = "#1C1C2B"; // Very dark bluish-gray
} else if (scrollPosition > triggerPoint * 5) {
    document.body.style.backgroundColor = "#232336"; // Slightly lighter bluish-gray
} else if (scrollPosition > triggerPoint * 4) {
    document.body.style.backgroundColor = "#2A2A3B"; // Base color
} else if (scrollPosition > triggerPoint * 3) {
    document.body.style.backgroundColor = "#36364A"; // Medium bluish-gray
} else if (scrollPosition > triggerPoint * 2) {
    document.body.style.backgroundColor = "#43435C"; // Lighter bluish-gray
} else if (scrollPosition > triggerPoint) {
    document.body.style.backgroundColor = "#535371"; // Even lighter bluish-gray
} else {
    document.body.style.backgroundColor = "#666687"; // Lightest bluish-gray
}
    const topbar = document.getElementById("topbar");
    const halfway = document.documentElement.scrollHeight / 9;

    if (scrollPosition > halfway) {
        setTimeout(function () {
            topbar.style.opacity = '1';
        }, 200);
        topbar.style.display = "flex";  
        document.body.style.color = "white"; 
    } else {
        topbar.style.display = "none";  
        document.body.style.color = "black"; 
    }
};


window.onload = function () {
    const topbar = document.getElementById("topbar");
    const scrollPosition = window.scrollY;
    const halfway = document.documentElement.scrollHeight / 5;
    if (scrollPosition > halfway) {
        topbar.style.display = "flex";  
    }
};

const header = document.getElementById('topbar');

function ToggleHeader(){
    header.classList.toggle("active");
}
