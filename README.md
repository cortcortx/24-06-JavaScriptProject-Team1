# 24-06-JavaScriptProject-Team1

// Project: Pixel Pals

// Resources: Whimsical for wire-framing, Bootstrap for frame-working, Flex-box for Pet Card displays

// As a user you will be able to:
// Create pet
// Feed pet
// Play with pet
// Exercise pet
// Add a new  pet
// Delete pet


// Create a pet:
// Pet species => #pet_species (Drop down list/select a pet from array:) {wolf, dog, fox, frog, pig, monkey, cat, goose, porcupine, turtle}
// 	              Function => pets (objects) in array with img file path depending on pet selected
// Pet name => #pet_name (name constraints: no curse words)
// Pet gender => #pet_gender (male, female, unknown)
// Pet personality => #pet_personality (kind, bully, intelligent, lazy, stubborn, leader, goofy)
// Pet habitat => #pet_habitat (city, forest, ocean, sky, mountains, swamp, desert, farm)


// Once created:
// Pet card is fulfilled from user input data selections and created into a div container dynamically through js
// On form includes: Species, pet image, pet name, gender, personality, habitat (all should be required in HTML input form except pet image, which will be stored in an object that we join with species array)
// Pet name will be dynamically added at top of card
// Pet will have a hunger bar represented by a physical bar from 0/100, a health bar (represented by 5 hearts) associated with its exercise levels, and a happiness bar represented by emojis: very angry, sad, content, happy, joyful 
// Pet card will have feed button, play button, exercise button, delete pet button (BONUS: data chart representing intervals on hunger levels 


// FEATURES
// Feed:
// -When pet is created, hunger default begins at 100% (100/100%). Using Math.Random() to generate random time intervals between 1 and 60 seconds to decrease hunger by 5 at whatever second interval number that the randomizer generates and the hunger bar will display the hunger level
// -When user clicks Feed (feed your pet) button, it will increase the hunger health bar by 5 each time it is clicked

// Play:
// -When pet is created, happiness default is Joyful (100/100%)
// -The 5 stages of happiness emojis: 
//     Extremely Angry (0-29%)
//     Angry (30-49%)
//     Content (50-69%)
//     Happy (70-89%)
//     Joyful (90-100%)
// -Using Math.Random() to generate random time intervals between 1 and 60 seconds to decrease happiness by 5 at whatever second interval number that the randomizer generates
// -When user clicks Play (play with your pet) button, it will increase the happiness number by 5 each time it is clicked and the corresponding emoji will be displayed

// Exercise
// -When pet is created, health default is 5 hearts (100/100%)
// -5 stages of heart health:
//     5 hearts (0-29%)
//     4 hearts (30-49%)
//     3 hearts (50-69%)
//     2 hearts (70-89%)
//     1 heart (90-100%)
// -When user clicks on Exercise (take your pet for a walk) button, it will increase the heart health number by 5 each time it is clicked and the corresponding heart amount will be displayed

// Delete
// -User has option to delete the pet they created. When user clicks delete button, all pet data fields will reset to “” and pet will be erased from the container
// ****************

// BONUS: Using data from the second interval randomizer: 1-60 seconds: Take frequency of hunger decrements and display all pets’ hunger time decrement stamps. Display results in a chart comparing their timestamp results to see how frequently each pet lost hunger from the randomizer data.




