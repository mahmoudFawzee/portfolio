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
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});

const projects = [
    {
        id: 1,
        name: "Panadol",
    description: "This is a detailed description of Project 1. It showcases my skills in Flutter and Dart.",
        thumbnail: "assets/images/courses app/panadol.jpg",
        images: [            
            "assets/images/courses app/img1.jpg",
            "assets/images/courses app/img2.jpg",
            "assets/images/courses app/img3.jpg",
            "assets/images/courses app/img4.jpg",
            "assets/images/courses app/img5.jpg",
            "assets/images/courses app/img6.jpg",
            "assets/images/courses app/img7.jpg",
            "assets/images/courses app/img8.jpg",
            "assets/images/courses app/img9.jpg",
            "assets/images/courses app/img10.jpg",
            "assets/images/courses app/img11.jpg",
            "assets/images/courses app/img12.jpg",
            "assets/images/courses app/img13.jpg",
            
        ]
    },
    {
        id: 2,
      name: "News App",
      thumbnail: "assets/images/cte news/cte.jpg",
        description: "An application that publishes news through the admin. The news may contain a video or pictures with the ability to comment on it, and the admin can approve or reject the comment, with a notification when new news is published. There is a section for downloading files published by the admin himself, as well as links to sites published by the admin that open as a webview inside. The application or in an external application with the availability of social media and a statistics section that shows the number of people who liked and disliked the news and the number of users who accessed the news.",
        images: [
            "assets/images/cte news/img1.PNG",
            "assets/images/cte news/img2.PNG",
            "assets/images/cte news/img3.PNG",
            "assets/images/cte news/img4.PNG",
            "assets/images/cte news/img5.PNG",
            "assets/images/cte news/img6.PNG",
            "assets/images/cte news/img7.PNG",
            "assets/images/cte news/img8.PNG",
            "assets/images/cte news/img9.PNG",
            "assets/images/cte news/img10.PNG",
            "assets/images/cte news/img11.PNG",
            "assets/images/cte news/img12.PNG",
            "assets/images/cte news/img13.PNG",
            "assets/images/cte news/img14.PNG",
            "assets/images/cte news/img15.PNG",
            "assets/images/cte news/img16.PNG",
            "assets/images/cte news/img17.PNG",
            
        ]
    },
    {
        id: 3,
      name: "Employees App",
      thumbnail: "assets/images/employees app/img1.jpg",
        description: "This is a detailed description of Project 2. It highlights my expertise in UI/UX design.",
        images: [
            "assets/images/employees app/img1.jpg",
            "assets/images/employees app/img2.jpg",
            "assets/images/employees app/img3.jpg",
            "assets/images/employees app/img4.jpg",
            "assets/images/employees app/img5.jpg",
            "assets/images/employees app/img6.jpg",
            "assets/images/employees app/img7.jpg",
            "assets/images/employees app/img8.jpg",
            "assets/images/employees app/img9.jpg",
            "assets/images/employees app/img10.jpg",
            "assets/images/employees app/img11.jpg",
            
        ]
    },
    {
        id: 4,
      name: "Lost and Found",
      thumbnail: "assets/images/lost and found/lost and found.jpg",
        description: "This is a detailed description of Project 2. It highlights my expertise in UI/UX design.",
        images: [
            "assets/images/lost and found/img1.jpg",
            "assets/images/lost and found/img2.jpg",
            "assets/images/lost and found/img3.jpg",
            "assets/images/lost and found/img4.jpg",
            "assets/images/lost and found/img5.jpg",
            "assets/images/lost and found/img6.jpg",
            "assets/images/lost and found/img7.jpg",
            "assets/images/lost and found/img8.jpg",
            "assets/images/lost and found/img9.jpg",
            "assets/images/lost and found/img10.jpg",
            "assets/images/lost and found/img11.jpg",
            
        ]
    },
    {
        id: 5,
      name: "Studying App",
      thumbnail: "assets/images/studying_app/splash_image.png",
        description: "This is a detailed description of Project 2. It highlights my expertise in UI/UX design.",
        images: [
            "assets/images/studying_app/img1.jpg",
            "assets/images/studying_app/img2.jpg",
            "assets/images/studying_app/img3.jpg",
            "assets/images/studying_app/img4.jpg",
            "assets/images/studying_app/img5.jpg",
            "assets/images/studying_app/img6.jpg",
            "assets/images/studying_app/img7.jpg",
            "assets/images/studying_app/img8.jpg",
            "assets/images/studying_app/img9.jpg",
            "assets/images/studying_app/img10.jpg",
            "assets/images/studying_app/img11.jpg",
            "assets/images/studying_app/img12.jpg",
            "assets/images/studying_app/img13.jpg",
            "assets/images/studying_app/img14.jpg",
            "assets/images/studying_app/img15.jpg",
            
        ]
    },
    {
        id: 6,
      name: "Technical Solutions",
      thumbnail: "assets/images/technical solutions/technical_solutions.jpg",
        description: "This is a detailed description of Project 2. It highlights my expertise in UI/UX design.",
        images: [
            "assets/images/technical solutions/img1.jpg",
            "assets/images/technical solutions/img2.jpg",
            "assets/images/technical solutions/img3.jpg",
            "assets/images/technical solutions/img4.jpg",
            "assets/images/technical solutions/img5.jpg",
            "assets/images/technical solutions/img6.jpg",
            "assets/images/technical solutions/img7.jpg",
            "assets/images/technical solutions/img8.jpg",
            "assets/images/technical solutions/img9.jpg",
            "assets/images/technical solutions/img10.jpg",
            
        ]
    },
    {
        id: 7,
        name: "Utopia",
        thumbnail: "assets/images/Utopia/utopia.jpg",
        description: "It is a charitable application: It consists of three sections Trade-in section: It is a special section for exchanging and exchanging tools, equipment, or anything that the user no longer needs and exchanges it for something else with another user, with the possibility of making the offered product sold directly by activating the direct selling option. Donation Section: The section for donating supplies that the user no longer needs and wants to help others, such as clothes, electrical appliances, and others. Utopia Community: The section on the needs facing the user or any problem he needs to solve in life in general or anything he needs and is unable to provide, in other words general help with anything or any problem with the possibility of hiding the identity of the requester. With a special section for messages between the author of the publication and the author of the request",
        images: [
            "assets/images/Utopia/img1.jpg",
            "assets/images/Utopia/img2.jpg",
            "assets/images/Utopia/img3.jpg",
            "assets/images/Utopia/img4.jpg",
            "assets/images/Utopia/img5.jpg",
            
        ]
    },
    {
        id: 8,
      name: "Youtube playlist Player",
      thumbnail: "assets/images/Youtube playlist Player/img1.jpg",
        description: "This is a detailed description of Project 2. It highlights my expertise in UI/UX design.",
        images: [
            "assets/images/Youtube playlist Player/img1.jpg",
            "assets/images/Youtube playlist Player/img2.jpg",
            "assets/images/Youtube playlist Player/img3.jpg",
            "assets/images/Youtube playlist Player/img4.jpg",
            "assets/images/Youtube playlist Player/img5.jpg",
            "assets/images/Youtube playlist Player/img6.jpg",
            "assets/images/Youtube playlist Player/img7.jpg",
            
        ]
    },
    // Add more projects here
];
// Function to generate project cards
function generateProjectCards() {
    const projectsContainer = document.querySelector('.projects-container');
  
    projects.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');
  
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.dataset.projectId = project.id; // Store project ID for reference
  
      const projectImage = document.createElement('img');
      projectImage.src = project.thumbnail; // Use the first image as the thumbnail
      projectImage.alt = project.name;
  
      const projectName = document.createElement('h3');
      projectName.classList.add('project-name');
      projectName.textContent = project.name;
  
      projectCard.appendChild(projectImage);
      projectItem.appendChild(projectCard);
      projectItem.appendChild(projectName);
      projectsContainer.appendChild(projectItem);
  
      // Add click event to show project details
      projectCard.addEventListener('click', () => showProjectDetails(project.id));
    });
  }
  // script.js
// script.js

let currentIndex = 0; // Track the current image index
let currentProjectId = null; // Track the current project ID

// Function to show project details
function showProjectDetails(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  // Update the project details section
  document.getElementById('project-name').textContent = project.name;
  document.getElementById('project-description').textContent = project.description;

  const projectImagesContainer = document.getElementById('project-images');
  projectImagesContainer.innerHTML = ''; // Clear previous images

  project.images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = project.name;
    projectImagesContainer.appendChild(img);
  });

  // Reset slider index
  currentIndex = 0;
  currentProjectId = projectId; // Set the current project ID
  updateSlider();

  // Show the project details section and hide the projects section
  document.getElementById('projects').style.display = 'none';
  document.getElementById('project-details').style.display = 'block';
}

// Function to update the slider position
function updateSlider() {
  const projectImagesContainer = document.getElementById('project-images');
  const offset = -currentIndex * 100; // Move by 100% of the container width
  projectImagesContainer.style.transform = `translateX(${offset}%)`;
}

// Slider navigation
document.querySelector('.slider-button.next').addEventListener('click', () => {
  const project = projects.find(p => p.id === currentProjectId);
  if (currentIndex < project.images.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

document.querySelector('.slider-button.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Function to go back to the projects section
document.querySelector('.back-button').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  document.getElementById('projects').style.display = 'block';
  document.getElementById('project-details').style.display = 'none';
});

// Generate project cards when the page loads
window.onload = generateProjectCards;