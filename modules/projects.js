
import { oop, algorithms, dataStructure, sqflite, flutter, firebase, dart, designPatterns, git, gitHup, bloc, apis, solid } from "./script.js";

const projects = [
  //panadol
  {
    id: 1,
    name: "Ahafaq",
    technologies: [flutter, firebase, apis, bloc, dart, oop, git, gitHup, designPatterns],
    githubLink: "",
    youtubeLink: "",
    googlePlayLink: "",
    appStoreLink: "https://apps.apple.com/us/app/ashafaq/id6748883105",
    description: `Al Shafaq Car Wash – Mobile Application \n

\nAbout the App:
\nAl Shafaq Car Wash is a Saudi brand, providing professional mobile car wash services with a focus on premium quality, convenience, and customer satisfaction. The app allows customers to book a car wash service directly to their home or workplace.

\nMy Contribution & Features I Worked On:

\n🚗 Service Booking System – Implemented a smooth booking flow where users can choose location, time, and type of car wash service.

\n📍 Location Integration – Enabled customers to request a wash at their exact location (home, office, or elsewhere).

\n💳 Secure Payments – Integrated in-app payment methods for safe and fast transactions.

\n🔔 Real-time Notifications – Added push notifications to keep users updated on booking status and promotions.

\n📅 Scheduling & History – Built features for scheduling future washes and viewing service history.

\n🎁 Loyalty & Promotions – Developed reward and offer modules to increase customer engagement.

\n👤 User Profile & Management – Created user profile management including personal info, vehicle details, and preferences.`,
    thumbnail: "assets/images/Ahafaq/app logo.jpeg",
    images: [
      "assets/images/Ahafaq/img1.jpg",
      "assets/images/Ahafaq/img2.jpg",
      "assets/images/Ahafaq/img3.jpg",
      "assets/images/Ahafaq/img4.jpg",
      "assets/images/Ahafaq/img5.jpg",
      "assets/images/Ahafaq/img6.jpg",
      "assets/images/Ahafaq/img7.jpg",
      "assets/images/Ahafaq/img8.jpg",
      "assets/images/Ahafaq/img9.jpg",
      "assets/images/Ahafaq/img10.jpg",
      "assets/images/Ahafaq/img11.jpg",
      "assets/images/Ahafaq/img12.jpg",
      "assets/images/Ahafaq/img13.jpg",
      "assets/images/Ahafaq/img14.jpg",

    ]
  },

  //panadol
  {
    id: 1,
    name: "Panadol",
    technologies: [flutter, firebase, apis, bloc, dart, oop, git, gitHup, designPatterns],
    githubLink: "https://github.com/mahmoudFawzee/panadol.git",
    youtubeLink: "",
    googlePlayLink: "",
    appStoreLink: "",
    description: "This app based on youtube playlists we get the playlist and generate videos in this playlist, anyone can create account on the app and start learning directly he also can take exams also his progress through the course saved.",
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
  //cte news 
  {
    id: 2,
    name: "News App",
    thumbnail: "assets/images/cte news/cte.jpg",
    technologies: [flutter, firebase, bloc, dart, oop, git, gitHup, designPatterns],
    githubLink: "",
    youtubeLink: "",
    googlePlayLink: "",
    appStoreLink: "",
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
      "assets/images/cte news/img10.jpg",
      "assets/images/cte news/img11.jpg",
      "assets/images/cte news/img12.jpg",
      "assets/images/cte news/img13.jpg",
      "assets/images/cte news/img14.jpg",
      "assets/images/cte news/img15.jpg",
      "assets/images/cte news/img16.PNG",
      "assets/images/cte news/img17.PNG",

    ]
  },
  //employee 
  {
    id: 3,
    name: "Employees App",
    thumbnail: "assets/images/employees app/img1.jpg",
    technologies: [flutter, bloc, dart, oop],
    githubLink: "",
    youtubeLink: "https://youtube.com/shorts/l363NcqnMy0?si=l9cwq2YamVmKQwo0",
    googlePlayLink: "",
    appStoreLink: "",
    description: "This app for who looking for work, i just work on the interfaces",
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
  //Lost and found
  {
    id: 4,
    name: "Lost and Found",
    thumbnail: "assets/images/lost and found/lost and found.jpg",
    technologies: [flutter, firebase, bloc, dart, oop, git, gitHup, designPatterns],
    githubLink: "",
    youtubeLink: "",
    googlePlayLink: "",
    appStoreLink: "https://apps.apple.com/eg/app/lost-and-found-tcti/id6470997080",
    description: "In this app, users can post a new post which contains the item they found and any one can view the post, and also there is an admin who has the control to accept the post published and it contains monthly statistics we can get as an excel file.",
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
  //studying app
  {
    id: 5,
    name: "Studying App",
    thumbnail: "assets/images/studying_app/splash_image.png",
    technologies: [flutter, firebase, bloc, dart, oop, git, gitHup, designPatterns],
    githubLink: "https://github.com/mahmoudFawzee/tunisia_studying_app.git",
    youtubeLink: "",
    googlePlayLink: "",
    appStoreLink: "",
    description: "An educational application for the education system in Tunisia, and you watch the video for each lesson and it displays the materials and presents the lessons, as well as quizzes for each lesson and a comprehensive quiz for the subject, like the quizzes for Udemy, and each lesson has its own video, and there is a chat section for each stage of study, and there is a part Save lessons and another part for news, with a group chat for each academic year, and notifications within the application in case the test date approaches.",
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

    ]
  },
  //technical solutions
  {
    id: 6,
    name: "Technical Solutions",
    thumbnail: "assets/images/technical solutions/technical_solutions.jpg",
    description: "This app helps who need a technical advices about some topic like computers, mobiles, cars and programs setup and more, also user can looking for maintenance centers for his devices, user also can rate the maintenance center.",
    technologies: [flutter, firebase, bloc, dart, oop, git, gitHup, designPatterns],
    githubLink: "",
    youtubeLink: "",
    googlePlayLink: "",
    appStoreLink: "",
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
  //utopia
  {
    id: 7,
    name: "Utopia",
    thumbnail: "assets/images/Utopia/utopia.jpg",
    description: "It is a charitable application: It consists of three sections Trade-in section: It is a special section for exchanging and exchanging tools, equipment, or anything that the user no longer needs and exchanges it for something else with another user, with the possibility of making the offered product sold directly by activating the direct selling option. Donation Section: The section for donating supplies that the user no longer needs and wants to help others, such as clothes, electrical appliances, and others. Utopia Community: The section on the needs facing the user or any problem he needs to solve in life in general or anything he needs and is unable to provide, in other words general help with anything or any problem with the possibility of hiding the identity of the requester. With a special section for messages between the author of the publication and the author of the request",
    technologies: [flutter, firebase, bloc, dart, oop, git, gitHup, designPatterns],
    githubLink: "",
    youtubeLink: "",
    googlePlayLink: "",
    appStoreLink: "",
    images: [
      "assets/images/Utopia/img1.jpg",
      "assets/images/Utopia/img2.jpg",
      "assets/images/Utopia/img3.jpg",
      "assets/images/Utopia/img4.jpg",
      "assets/images/Utopia/img5.jpg",

    ]
  },
  //ai assistant    
  {
    id: 8,
    name: "Ai Assistant",
    thumbnail: "assets/images/ai assistant/icon.png",
    description: 'the all-in-one personal assistant designed to help you stay productive and informed throughout your day. Whether you need to manage tasks, get real-time weather updates, or chat with an AI assistant, this app has you covered.  ',
    technologies: [flutter, bloc, dart, sqflite, oop, git, gitHup, designPatterns, solid],
    githubLink: "https://github.com/mahmoudFawzee/ai_assistant_app",
    youtubeLink: "https://youtu.be/EkHkgxQWjsQ?si=eWrCM4WQISM36apE",
    googlePlayLink: "",
    appStoreLink: "",
    images: [
      "assets/images/ai assistant/img1.jpg",
      "assets/images/ai assistant/img2.jpg",
      "assets/images/ai assistant/img3.jpg",
      "assets/images/ai assistant/img4.jpg",
      "assets/images/ai assistant/img5.jpg",
      "assets/images/ai assistant/img6.jpg",
    ]
  },
];

// Make sure we can access projects in other files
export { projects };