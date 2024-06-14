const petForm = document.getElementById("pet_form");
const pixName = document.getElementById("pet_name");
const pixSpec = document.getElementById("pet_species");
const pixGen = document.getElementById("pet_gender");
const pixPers = document.querySelectorAll('input[type="checkbox"]');
const pixHab = document.getElementById("pet_habitat");
const btnclk = document.getElementById("submit_btn");
const dynamicCardContainer = document.getElementById("dynamicCardContainer");

petForm.addEventListener("submit", handleFormSubmission);

function handleFormSubmission(event) {
  event.preventDefault();

  const nameValue = pixName.value;
  const specValue = pixSpec.value;
  const genValue = pixGen.value;
  const persValue = getSelectedPersonality();
  const habValue = pixHab.value;

  createCard(nameValue, specValue, genValue, persValue, habValue);

  // Clear input fields
  resetFormFields();
}

function getSelectedPersonality() {
  const selectedPersonality = [];
  pixPers.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedPersonality.push(checkbox.value);
    }
  });
  return selectedPersonality.join(", ");
}
//creates and appends new card to the carousel
function createCard(name, species, gender, personality, habitat) {
  const newCard = document.createElement("div");
  newCard.classList.add("carousel-item", "custom_carousel_item");

  newCard.innerHTML = `
    <div class="card" style="width: 22rem">
      <img class="pix_gif" src="${getImageUrl(species)}" alt="${species}" />
      <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 class="card-title">${name}</h5>
        <section class="d-flex justify-content-between">
          <ul>
            <li>Gender: <p>${gender}</p></li>
            <li>Personality: <p>${personality}</p></li>
            <li>Habitat: <p>${habitat}</p></li>
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
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
      </div>
    </div>
  `;

  dynamicCardContainer.appendChild(newCard);

  const deleteButton = newCard.querySelector(".btn-danger");
  deleteButton.addEventListener("click", function () {
    newCard.remove(); // Remove the card when delete button is clicked
  });

  //removes the active class
  const carouselItems = dynamicCardContainer.querySelectorAll(".carousel-item");
  carouselItems.forEach((item) => {
    item.classList.remove("active");
  });

  //adds the class to the newly created card
  newCard.classList.add("active");
}
//clears form values after submit
function resetFormFields() {
  pixName.value = "";
  pixSpec.value = "";
  pixGen.value = "";
  pixPers.forEach((checkbox) => {
    checkbox.checked = false;
  });
  pixHab.value = "";
}

//associates image URL based on the species using an object
function getImageUrl(species) {
  const imageUrls = {
    cat: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXdzdDZiYWVjODY2YjZteTlzZWtyeDk0amw1dmFrMTIzbDFqaGM2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AtIwrZo30yTKJDmlan/giphy.gif",
    dog: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzl4cnJmNTJ6czdqYnpkM3I0OWhuZTk3b3k1aGJ0ejY2NWdid2lyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/uDsZuL3sCnjNfTD26R/giphy.gif",
    gorilla:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzRscTl5end6czBpNXl4eXZlZHJsZ3dndmJkNnNmaWdleXM2M2R5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/7IeZdbyc3MCnhLMd66/giphy.gif",
    turtle:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanR6bXFuYWp4bmN4anBkbGZxbDQzaXB2cXM2dzhwaTFtcXVybGhqaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yf8OcKOB9uu63XBeJw/giphy.gif",
  };
  return imageUrls[species] || "";
}
