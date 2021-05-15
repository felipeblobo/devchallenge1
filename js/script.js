const imageTransitions = () => {
  const imagesButtons = document.querySelectorAll(".ballDecoration");
  const imagesSrc = [
    "assets/fone.png",
    "assets/headphone2.jpg",
    "assets/headphone3.jpg",
  ];
  const currentImage = document.getElementById("mainImage");

  function changeClass(event) {
    imagesButtons.forEach((button) => {
      button.classList.remove("active");
    });

    event.target.classList.add("active");

    console.log(currentImage.attributes.src.value);
    console.log(imagesSrc[0]);
    if (currentImage.attributes.src.value === imagesSrc[0]) {
      currentImage.setAttribute("src", imagesSrc[1]);
    } else if (currentImage.attributes.src.value == imagesSrc[1]) {
      currentImage.setAttribute("src", imagesSrc[2]);
    } else currentImage.setAttribute("src", imagesSrc[0]);
  }

  imagesButtons.forEach((button) => {
    button.addEventListener("click", changeClass);
  });
};

imageTransitions();


const btnMenu = document.getElementById('menuDropdown');

function toggleMenu () {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)