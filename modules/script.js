import { projects } from "./projects.js";
export * from "./skills.js";

console.log("script.js is loaded on project_details.html");

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Handle contact form submission

//cv download
function downloadPDF() {
  const link = document.createElement("a");
  link.href = "assets/files/Mahmoud-Fawzee-flutter-developer-CV.pdf"; // PDF file path
  link.download = "Mahmoud-Fawzee-flutter-developer-CV.pdf"; // Default download name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


// Function to generate project cards in index.html
function generateProjectCards() {
  const projectsContainer = document.querySelector('.projects-container');
  if (!projectsContainer) return;

  projects.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');

      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.dataset.projectId = project.id;

      const projectImage = document.createElement('img');
      projectImage.src = project.thumbnail;
      projectImage.alt = project.name;

      const projectName = document.createElement('h3');
      projectName.textContent = project.name;

      projectCard.appendChild(projectImage);
      projectItem.appendChild(projectCard);
      projectItem.appendChild(projectName);
      projectsContainer.appendChild(projectItem);

      // Redirect to project_details.html with projectId in the URL
      projectCard.addEventListener('click', () => {
          window.location.href = `project_details.html?projectId=${project.id}`;
      });
  });
}

// Function to get project ID from the URL
function getProjectIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('projectId');
}

function displayProjectDetails() {
    const projectId = getProjectIdFromURL();
    const project = projects.find(p => p.id == projectId);

    if (!project) {
        document.querySelector('.project-details').innerHTML = "<h2>Project Not Found</h2>";
        return;
    }

    // Update project name and description
    document.getElementById('project-name').textContent = project.name;
    document.getElementById('project-description').textContent = project.description;

    // Display technologies used
    const techList = document.querySelector('#project-technologies ul');
    techList.innerHTML = '';

    project.technologies.forEach(tech => {
        const li = document.createElement('li');
        li.textContent = tech;
        techList.appendChild(li);
    });

    // Display images
    const projectImagesContainer = document.getElementById('project-images');
    projectImagesContainer.innerHTML = '';

    if (project.images.length === 0) {
        projectImagesContainer.innerHTML = "<p>No images available</p>";
    } else {
        project.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = project.name;
            projectImagesContainer.appendChild(img);
        });
    }

setProjectLink("github-link", project.githubLink);
setProjectLink("youtube-link", project.youtubeLink);
setProjectLink("google-play-link", project.googlePlayLink);
setProjectLink("app-store-link", project.appStoreLink);

    // Reset slider index
    currentIndex = 0;
    currentProjectId = projectId;
    updateSlider();
}
// Function to set a project link dynamically
function setProjectLink(elementId, url) {
    const button = document.getElementById(elementId);
    console.log('url is : '+url);
    if (url && url !== "#") {
        button.href = url;  
        button.target = "_blank"; // Open link in a new tab
        button.style.display = "inline-block"; // Show button if a link exists
    } else {
        button.style.display = "none"; // Hide button if no link is provided
    }
}


let currentIndex = 0;
let currentProjectId = null;

// Function to update the slider position
function updateSlider() {
  const projectImagesContainer = document.getElementById('project-images');
  if (!projectImagesContainer) return;

  const imageWidth = document.querySelector('.slider-container').offsetWidth; // Get exact width
  const offset = -currentIndex * imageWidth; // Move based on container width
  projectImagesContainer.style.transform = `translateX(${offset}px)`;
}


// Function to handle next button
const nextButton = document.querySelector('.slider-button.next');
if (nextButton) {
    nextButton.addEventListener('click', () => {
        const project = projects.find(p => p.id == currentProjectId);
        if (currentIndex < project.images.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });
}

// Function to handle previous button
const prevButton = document.querySelector('.slider-button.prev');
if (prevButton) {
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
}

// Enable Swiping for Mobile
let touchStartX = 0;
let touchEndX = 0;



function handleSwipe() {
    const project = projects.find(p => p.id == currentProjectId);
    if (!project) return;

    if (touchStartX - touchEndX > 50 && currentIndex < project.images.length - 1) {
        // Swipe left (Next)
        currentIndex++;
    } else if (touchEndX - touchStartX > 50 && currentIndex > 0) {
        // Swipe right (Previous)
        currentIndex--;
    }
    updateSlider();
}


// Detect which page is loaded and run the appropriate function
window.onload = function () {
  if (document.querySelector('.projects-container')) {
      generateProjectCards(); // Run only on index.html
  } 
  if (document.querySelector('.project-details')) {
      displayProjectDetails(); // Run only on project_details.html
  }
};
