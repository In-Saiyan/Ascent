
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
}

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    const arrowIcon = document.getElementById("arrowIcon");

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        arrowIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width:10px">
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
            </svg>
        `;
    } else {
        dropdownContent.style.display = "block";
        arrowIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width:10px">
                <path d="M246.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 205.3l137.4 137.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
            </svg>
        `;
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdownContent = document.getElementById("dropdownContent");
        const arrowIcon = document.getElementById("arrowIcon");
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            arrowIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width:10px">
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                </svg>
            `;
        }
    }
};
