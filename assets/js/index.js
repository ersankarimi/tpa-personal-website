document.body.addEventListener("mousemove", (event) => {
  const sectionRight = document.querySelector("section#right");
  const accessories1 = document.querySelector(".accessories-1");
  const accessories2 = document.querySelector(".accessories-2");
  const accessories3 = document.querySelector(".accessories-3");

  // make tilt effect
  accessories1.style.transform = `translate(${event.clientX / 100}px, ${
    event.clientY / 25
  }px)`;
  accessories2.style.transform = `translate(${event.clientX / 100}px, ${
    event.clientY / 45
  }px)`;
  accessories3.style.transform = `translate(${event.clientX / 100}px, ${
    event.clientY / 45
  }px)`;

  // make parallax effect
  sectionRight.style.transform = `translate(${event.clientX / 75}px, ${
    event.clientY / 88
  }px)`;
});
