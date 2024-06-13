const pixName = document.getElementById("pet_name");
const pixSpec = document.getElementById("pet_species");
const pixGen = document.getElementById("pet_gender");
const pixPers = document.getElementById("pet_personality");
const pixHab = document.getElementById("pet_habitat");
const btnclk = document.getElementById("submit_btn");
const testNameDisplay = document.getElementById("display_name_test");
const testSpeciesDisplay = document.getElementById("display_species_test");
const testGenderDisplay = document.getElementById("display_gender_test");
const testPersonalityDisplay = document.getElementById(
  "display_personality_test"
);
const testHabitatDisplay = document.getElementById("display_habitat_test");

function getName(event) {
  event.preventDefault();
  testNameDisplay.innerHTML = pixName.value;

  if (pixSpec.value === "cat") {
    testSpeciesDisplay.src =
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXdzdDZiYWVjODY2YjZteTlzZWtyeDk0amw1dmFrMTIzbDFqaGM2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AtIwrZo30yTKJDmlan/giphy.gif";
  } else if (pixSpec.value === "dog") {
    testSpeciesDisplay.src =
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzl4cnJmNTJ6czdqYnpkM3I0OWhuZTk3b3k1aGJ0ejY2NWdid2lyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/uDsZuL3sCnjNfTD26R/giphy.gif";
  } else if (pixSpec.value === "gorilla") {
    testSpeciesDisplay.src =
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzRscTl5end6czBpNXl4eXZlZHJsZ3dndmJkNnNmaWdleXM2M2R5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/7IeZdbyc3MCnhLMd66/giphy.gif";
  } else if (pixSpec.value === "turtle") {
    testSpeciesDisplay.src =
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanR6bXFuYWp4bmN4anBkbGZxbDQzaXB2cXM2dzhwaTFtcXVybGhqaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yf8OcKOB9uu63XBeJw/giphy.gif";
  }

  testGenderDisplay.innerHTML = pixGen.value;
  testPersonalityDisplay.innerHTML = pixPers.value;
  testHabitatDisplay.innerHTML = pixHab.value;
}

btnclk.addEventListener("click", getName);

/*
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with class "card"
  const cards = document.querySelectorAll(".card");

  // Loop through each card element
  cards.forEach(function (card) {
    // Create an image element
    const img = document.createElement("img");
    // Add the "pix_gif" class to the image
    img.classList.add("pix_gif");
    // Set the src attribute of the image
    img.src =
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanR6bXFuYWp4bmN4anBkbGZxbDQzaXB2cXM2dzhwaTFtcXVybGhqaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yf8OcKOB9uu63XBeJw/giphy.gif"; // Replace "path_to_your_gif_image" with the actual path to your GIF image
    // Set alt attribute of the image
    img.alt = "Pixel GIF";

    // Append the image to the card
    card.appendChild(img);
  });
});
*/
