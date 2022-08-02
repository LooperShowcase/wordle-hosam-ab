const daddywords = document.getElementById("words");
const newtitle = document.createElement("h2");

const LINE_CONST = 6;
const CHAIR_CONST = 5;

for (let i = 0; i < LINE_CONST; i++) {
  const wordDiv = document.createElement("div");
  wordDiv.className = "word";

  for (let J = 0; J < CHAIR_CONST; J++) {
    const charDiv = document.createElement("div");
    charDiv.className = "char";
    wordDiv.appendChild(charDiv);
  }

  daddywords.appendChild(wordDiv);
}

let currentChair = 0;
let currentWord = 0;
let currentLine = 0;

document.addEventListener("keydown", async (event) => {
  const firstword = daddywords.children[currentWord];
  if (event.code == "Enter") {
    if (currentChair < LINE_CONST) {
      const answer = getCurrentWord();
      const result = await guess(answer);
      colorize(result);
      currentWord++;
      currentChair = 0;
    }
  } else if (event.code == "Enter") {
    if (currentChair == CHAIR_CONST) {
      currentWord++;
      currentChair = 0;
    }
  } else if (event.code == "Backspace") {
    if (currentChair > 0) {
      currentChair--;
      firstword.children[currentChair].innerHTML = "";
    }
  } else if (currentChair < CHAIR_CONST) {
    firstword.children[currentChair].innerHTML = event.key;
    currentChair++;
  }
});

async function guess(word) {
  const req = await fetch("/guess/" + word);
  const res = await req.json();
  return res;
}
function getCurrentWord() {
  var word = "";
  var wordDiv = document.getElementById("words").children[currentWord];
  for (var i = 0; i < wordDiv.children.length; i++) {
    word = word + wordDiv.children[i].innerHTML;
  }
  return word;
}

function colorize(results) {
  const wordDiv =
    document.getElementById("words").children[currentWord].children;
  for (let i = 0; i < results.length; i++) {
    if (results[i] == 1) {
      wordDiv[i].style.backgroundColor = "green";
    } else if (results[i] == 0) {
      wordDiv[i].style.backgroundColor = "yellow";
    } else {
      wordDiv[i].style.backgroundColor = "red";
    }
  }
}

document.getElementsByClassName("keyboard-button").addEventListener("click", () =>{
      
})
