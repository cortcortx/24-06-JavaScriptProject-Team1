const petForm = document.getElementById("pet_form");
const pixName = document.getElementById("pet_name");
const pixSpec = document.getElementById("pet_species");
const pixGen = document.getElementById("pet_gender");
const pixPers = document.querySelectorAll('input[type="checkbox"]');
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
  testPersonalityDisplay.innerHTML = getSelectedPersonality();
  testHabitatDisplay.innerHTML = pixHab.value;
}

btnclk.addEventListener("click", getName);

//for personality value checkbox capture: creates an empty array, checks if check boxes are actively checked
//pushes the values into empty array and inserts a "," between each value on card
function getSelectedPersonality() {
  const selectedPersonality = [];
  pixPers.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedPersonality.push(checkbox.value);
    }
  });
  return selectedPersonality.join(", ");
}

petForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = pixName.value;
  const specValue = pixSpec.value;
  const genValue = pixGen.value;
  const persValue = getSelectedPersonality();
  const habValue = pixHab.value;

  // Clear input fields
  pixName.value = "";
  pixSpec.value = "";
  pixGen.value = "";
  pixPers.forEach((checkbox) => {
    checkbox.checked = false;
  });
  pixHab.value = "";
});

//creates a pet card based on user selections
function createCard(cardData) {
  const newCard = document.createElement("div");
  newCard.classList.add("carousel-item", "custom_carousel_item");

  newCard.innerHTML = `
    <div class="card" style="width: 22rem">
      <img class="pix_gif" src="${cardData.imageUrl}" alt="${cardData.itemName}" />
      <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 class="card-title">${cardData.itemName}</h5>
        <section class="d-flex justify-content-between">
          <ul>
            <li>Gender: <p>${cardData.gender}</p></li>
            <li>Personality: <p>${cardData.personality}</p></li>
            <li>Habitat: <p>${cardData.habitat}</p></li>
          </ul>
          <ul>
            <li>feed health bar</li>
            <li>happiness emoji bar</li>
            <li>exercise heart bar</li>
          </ul>
        </section>
        <div class="activityBtns">
          <button type="submit" id="feedBtn">
            <img src="https://images.emojiterra.com/openmoji/v13.1/512px/1f37d.png" />
          </button>
          <button type="submit" id="playBtn">
            <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/bw/1024px/1f3ae.png" />
          </button>
          <button type="submit" id="exerciseBtn">
            <img src="https://cdn-icons-png.flaticon.com/256/308/308962.png" />
          </button>
        </div>
        <button class="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  `;

  document.getElementById("dynamicCardContainer").appendChild(newCard);
}
