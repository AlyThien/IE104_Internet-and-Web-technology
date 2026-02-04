//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname'); /* MSSV: 23521478 - Cau 1.2 */

const randomize = document.querySelector('.randomize');

const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so insert: went for a walk. When they got to inserty:, they stared in horror for a few moments, then insertz:. Bob saw the whole thing, but was not surprised - insert: weighs 300 pounds, and it was a hot day. ";

const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

const inserty = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result); /* MSSV: 23521478 - Cau 1.3 */

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertZ);
  
  newStory = newStory.replace(/:insertx:/g, xItem); /* MSSV: 23521478 - Cau 1.4 */
  newStory = newStory.replace(/:inserty:/, yItem);
  newStory = newStory.replace(/:insertz:/, zItem);
  
  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }
  
  if(document.getElementById('uk').checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature = Math.round((94 - 32) * 5/9) + ' centigrage';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}