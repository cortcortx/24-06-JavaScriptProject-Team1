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
            <li>Hunger: <br><img class="bar-img" health-lvl="0" src="./images/zerohealth.jpeg"></li>
            <li>Mood:  <br><img class="emoji-imgs" emoji-lvl="0" src="./images/angry.jpeg"></li>
            <li>Exercise:  <br><img class="heart-img" heart-lvl="0" src="./images/fivehearts.jpeg"></li>
          </ul>
        </section>
        <div class="activityBtns">
          <button type="submit">
            <img class="feedBtn" src="https://images.emojiterra.com/openmoji/v13.1/512px/1f37d.png" />
          </button>
          <button type="submit">
            <img class="playBtn" src="https://images.emojiterra.com/google/noto-emoji/unicode-15/bw/1024px/1f3ae.png" />
          </button>
          <button type="submit">
            <img class="exerciseBtn" src="https://cdn-icons-png.flaticon.com/256/308/308962.png" />
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

let feedArr = [
  "./images/zerohealth.jpeg",
  "./images/onehealth.jpeg",
  "./images/twohealth.jpeg",
  "./images/threehealth.jpeg",
  "./images/fourhealth.jpeg",
  "./images/fullhealth.jpeg",
];

// Add event listener to the feedBtn
document
  .getElementById("dynamicCardContainer")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("feedBtn")) {
      let imgHealthBar =
        e.target.parentElement.parentElement.previousElementSibling.querySelector(
          ".bar-img"
        );

      let healthLevel = imgHealthBar.getAttribute("health-lvl");

      if (healthLevel < feedArr.length) {
        imgHealthBar.setAttribute("health-lvl", ++healthLevel);

        imgHealthBar.setAttribute("src", feedArr[healthLevel]);
      }
    }
  });

let exerciseArr = [
  "./images/zerohearts.jpeg",
  "./images/oneheart.jpeg",
  "./images/twohearts.jpeg",
  "./images/threehearts.jpeg",
  "./images/fourhearts.jpeg",
  "./images/fivehealth.jpeg",
];

// Add event listener to the exerciseBtn
document
  .getElementById("dynamicCardContainer")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("exerciseBtn")) {
      let imgHeartBar =
        e.target.parentElement.parentElement.previousElementSibling.querySelector(
          ".heart-img"
        );

      let heartLevel = imgHeartBar.getAttribute("heart-lvl");

      if (heartLevel < exerciseArr.length) {
        imgHeartBar.setAttribute("heart-lvl", ++heartLevel);

        imgHeartBar.setAttribute("src", exerciseArr[heartLevel]);
      }
    }
  });

let playArr = [
  "./images/angry.jpeg",
  "./images/sad.jpeg",
  "./images/content.jpeg",
  "./images/happy.jpeg",
  "./images/joyful.jpeg",
];

// Add event listener to the playBtn
document
  .getElementById("dynamicCardContainer")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("playBtn")) {
      let imgEmojiBar =
        e.target.parentElement.parentElement.previousElementSibling.querySelector(
          ".emoji-imgs"
        );

      let emojiLevel = imgEmojiBar.getAttribute("emoji-lvl");

      if (emojiLevel < playArr.length) {
        imgEmojiBar.setAttribute("emoji-lvl", ++emojiLevel);

        imgEmojiBar.setAttribute("src", playArr[emojiLevel]);
      }
    }
  });

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
