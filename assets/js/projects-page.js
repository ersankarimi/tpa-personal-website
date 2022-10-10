const projectsState = [
  {
    id: 1,
    url: "https://testsatu.netlify.app/",
    title: "Explora web tools",
    body: "Explora web tools is tools for web development. You’ll find a preview and code generators to help you with your front-end web projects.",
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "React Router v6",
      "Framer Motion",
      "Vite js",
    ],
  },
  {
    id: 2,
    url: "https://birthdayreminderinformatika2020.netlify.app/",
    title: "Birthday Reminder Informatika 2020",
    body: "This project displays a list of names, dates of birth, and ages of each student of Informatics Institut Teknologi Kalimantan Kalimantan batch 2020.",
    technologies: ["ReactJS", "Tailwind CSS", "React Router v6"],
  },
  {
    id: 3,
    url: "https://youtube-like-clone.netlify.app/",
    title: "Youtube Clone",
    body: "I tried to clone YouTube by displaying a list of youtube videos from the data retrieval through the API, being able to play the youtube videos, being able to like and dislike the videos.",
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "React Router v6",
      "Axios",
      "Vite js",
    ],
  },
];

const createProjectCard = ({ id, url, title, body, technologies }) => {
  return `
  <div class="project-card" id="${id}">
          <a
            href="${url}"
            target="_blank"
            class="project-card__anchor"
          >
            <div class="project-card__header">
              <h2>${title}</h2>
              <p> 
               ${body}
              </p>
            </div>
            <div class="project-card__badges">
              ${technologies
                .map((technology) => {
                  return `<span class="badge">${technology}</span>`;
                })
                .join("")}
            </div>
          </a>
        </div>
  `;
};

projectsState.forEach((project) => {
  const projectsListWrapper = document.querySelector("#projects-list");
  projectsListWrapper.innerHTML += createProjectCard({ ...project });
});
