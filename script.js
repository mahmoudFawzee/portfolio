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
        images: [
            "assets/images/courses app/panadol.jpg",
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
        description: "This is a detailed description of Project 2. It highlights my expertise in UI/UX design.",
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
        description: "This is a detailed description of Project 2. It highlights my expertise in UI/UX design.",
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
      projectImage.src = project.images[0]; // Use the first image as the thumbnail
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
  
    // Show the project details section and hide the projects section
    document.getElementById('projects').style.display = 'none';
    document.getElementById('project-details').style.display = 'block';
  }
  
  // Function to go back to the projects section
  document.querySelector('.back-button').addEventListener('click', () => {
    document.getElementById('projects').style.display = 'block';
    document.getElementById('project-details').style.display = 'none';
  });
  
  // Generate project cards when the page loads
window.onload = generateProjectCards;