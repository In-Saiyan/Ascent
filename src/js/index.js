window.onscroll = function () {
  const scrollPosition = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const triggerPoint = pageHeight / 8;
  if (!(document.body.classList.contains("light"))){
    if (scrollPosition > triggerPoint * 7) {
      document.body.style.backgroundColor = "black";
    } else if (scrollPosition > triggerPoint * 6) {
      document.body.style.backgroundColor = "#1C1C2B"; 
    } else if (scrollPosition > triggerPoint * 5) {
      document.body.style.backgroundColor = "#232336"; 
    } else if (scrollPosition > triggerPoint * 4) {
      document.body.style.backgroundColor = "#2A2A3B"; 
    } else if (scrollPosition > triggerPoint * 3) {
      document.body.style.backgroundColor = "#36364A"; 
    } else if (scrollPosition > triggerPoint * 2) {
      document.body.style.backgroundColor = "#43435C"; 
    } else if (scrollPosition > triggerPoint) {
      document.body.style.backgroundColor = "#535371"; 
    } else {
      document.body.style.backgroundColor = "#666687"; 
    }
  } else {
    document.body.style.backgroundColor = "var(--bg-2-color)";
  }
  const topbar = document.getElementById("topbar");
  const halfway = document.documentElement.scrollHeight / 9;

  if (scrollPosition > halfway) {
    setTimeout(function () {
      topbar.style.opacity = "1";
    }, 200);
    topbar.style.display = "flex";
  } else {
    topbar.style.display = "none";
  }
};

// window.onload = function () {
//   const topbar = document.getElementById("topbar");
//   const scrollpos = window.scrollY;
//   const halfway = document.documentElement.scrollHeight / 5;
//   if (scrollpos > halfway) {
//     topbar.style.display = "flex";
//   }
// };

const header = document.getElementById("topbar");

function ToggleHeader() {
  header.classList.toggle("active");
}

function ToggleTheme(){
  document.body.classList.toggle("light");
}

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { 
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
});

document.querySelectorAll('.colzz').forEach(col => {
  col.addEventListener('click', function() {
    const serviceText = this.querySelector('p');  
    if (serviceText.innerText.includes(".")) {
      serviceText.style.fontSize = "32px"; 
      switch (this.id) {
        case 'logo':
          serviceText.innerText = "Logo Design";
          break;
        case 'video':
          serviceText.innerText = "Video Editing";
          break;
        case 'voice':
          serviceText.innerText = "Voice Over";
          break;
        case 'ai':
          serviceText.innerText = "AI Services";
          break;
        case 'software':
          serviceText.innerText = "Software Development";
          break;
        case 'writing':
          serviceText.innerText = "Writing and Translation";
          break;
        case 'design':
          serviceText.innerText = "Design and Creative";
          break;
        case 'ecommerce':
          serviceText.innerText = "E-Commerce Marketing";
          break;
        default:
          serviceText.innerText = "Service";
          break;
      }
     
    } else {
      
      serviceText.style.fontSize = "22px"; 
      switch (this.id) {
        case 'logo':
          serviceText.innerText = "Unique and professional logo designs that capture your brand identity and leave a lasting impression.";
          break;
        case 'video':
          serviceText.innerText = "Expert video editing services that enhance visual content, improve engagement, and elevate storytelling.";
          break;
        case 'voice':
          serviceText.innerText = "High-quality voice-over services for a professional touch in advertisements, presentations, and multimedia content.";
          break;
        case 'ai':
          serviceText.innerText = "Cutting-edge AI solutions to automate processes, analyze data, and improve decision-making for businesses.";
          break;
        case 'software':
          serviceText.innerText = "Custom software development designed to meet business-specific needs and improve operational efficiency.";
          break;
        case 'writing':
          serviceText.innerText = "Engaging and well-crafted content, along with accurate translation services to reach a global audience.";
          break;
        case 'design':
          serviceText.innerText = "Innovative design solutions, including web design, graphic design, and creative services to enhance brand aesthetics.";
          break;
        case 'ecomm':
          serviceText.innerText = "Strategic e-commerce marketing services focused on increasing online visibility, traffic, and sales.";
          break;
      }

    }
  });
});