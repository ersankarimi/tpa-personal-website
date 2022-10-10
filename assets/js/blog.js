const blogItemsContainer = document.querySelector("#blog-items-list");
const blogState = [
  {
    id: 1,
    title: "Tutorial HTML5",
    description:
      "Here we will both learn the basics of HTML5. We will discuss what is HTML, what are tags and attributes in HTML, how to create forms in HTML, what are HTML semantic tags, and many others.",
    pulishedDate: "21 October 2021",
    imgSource: "/assets/images/thumbnail-html.png",
    blogUrl:
      "https://youtube.com/playlist?list=PLJ0buff7jNKOpAWlC_wnBV-N5Elkayk4b",
  },
  {
    id: 2,
    title: "Tutorial Python",
    description:
      "Here we will both learn the basics of the Python programming language. We will cover variables, loops, lists, dictionaries, and many others.",
    pulishedDate: "4 October 2021",
    imgSource: "/assets/images/thumbnail-python.png",
    blogUrl:
      "https://youtube.com/playlist?list=PLJ0buff7jNKO5MJ2nDrOV_jUmGXbJzBGv",
  },
  {
    id: 3,
    title: "Extensions for Writing HTML Code",
    description:
      "Here we will talk about what VSCode extensions will help us while writing HTML code.",
    pulishedDate: "21 June 2021",
    imgSource:
      "https://i.ytimg.com/vi/k4rthX766wQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBtj5uVcJI9IondFFSisgXsOlM-BQ",
    blogUrl:
      "https://www.youtube.com/watch?v=k4rthX766wQ&list=PLJ0buff7jNKNf42GeLW-ucUrcOSZja5cy&index=1&t=456s",
  },
];

const createBlogCard = ({
  id,
  title,
  description,
  pulishedDate,
  imgSource,
  blogUrl,
}) => {
  return `
          <article class="blog-container" id="${id}">
          <a
            class="blog-wrapper-anchor"
            href="${blogUrl}"
          >
            <img
              class="blog-image img-cover"
              src="${imgSource}"
              alt="${title} Image"
            />
          </a>
          <div class="blog-body">
            <h2 class="blog-title">${title}</h2>
            <p class="blog-description">${description}</p>
            <time class="blog-published"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                width="1rem"
                height="2rem"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              ${pulishedDate}
              </time
            >
          </div>
        </article>
  `;
};

blogState.forEach((blog) => {
  blogItemsContainer.innerHTML += createBlogCard(blog);
});
