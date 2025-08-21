let currentAreaKey = null;

const display = document.querySelector(".matrix-container");

function renderTitleScreen() {
  const title = document.createElement("p");
  title.setAttribute("class", "matrix-text title-text");
  title.textContent = "Dungeon Adventure";
  display.appendChild(title);

  const art = document.createElement("p");
  art.setAttribute("class", "matrix-text ascii-art");
  art.innerText = `      O                                     O
{o)xxx|===============-  *  -===============|xxx(o}
      O                                     O`;
  display.appendChild(art);

  const buttonField = document.createElement("div");
  buttonField.setAttribute("class", "button-field");
  display.appendChild(buttonField);

  const playBtn = document.createElement("button");
  playBtn.setAttribute("class", "button");
  playBtn.textContent = "Play Game";
  playBtn.addEventListener("click", () => {
    currentAreaKey = "start";
    render();
  });
  buttonField.appendChild(playBtn);
}

function render() {
  const area = areas[currentAreaKey];
  display.innerHTML = "";

  const prompt = document.createElement("div");
  prompt.className = "matrix-text text-field cursor typewriter-animation";
  prompt.textContent = area.text;
  display.appendChild(prompt);

  if (area.choices && area.choices.length > 0) {
    const choicesField = document.createElement("div");
    choicesField.className = "button-field";
    display.appendChild(choicesField);

    area.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "button";
      button.textContent = choice.label;
      setTimeout(() => {
        choicesField.appendChild(button);
      }, 2500);

      button.addEventListener("click", () => {
        if (choice.label === "Title") {
          display.innerHTML = "";
          renderTitleScreen();
          return;
        }
        currentAreaKey = choice.next;
        render();
      });
    });
  }
  if (currentAreaKey === "dragon" || currentAreaKey === "goldDragon") {
    const dragon = document.createElement("p");
    dragon.setAttribute("class", "matrix-text ascii-art");
    dragon.innerText = `                     _
                  __~a~_
                  ~~;  ~_
    _                ~  ~_                _
   '_\\\;__._._._._._._]   ~_._._._._._.__;/_'
   '(/'/'/'/'|'|'|'| (    )|'|'|'|'\\\'\\\'\\\'\\\)'
   (/ / / /, | | | |(/    \\\) | | | ,\\\ \\\ \\\ \\\)
  (/ / / / / | | | ^(/    \\\) ^ | | \\\ \\\ \\\ \\\ \\\)
 (/ / / / /  ^ ^ ^   (/  \\\)    ^ ^  \\\ \\\ \\\ \\\ \\\)
(/ / / / ^          / (||)|          ^ \\\ \\\ \\\ \\\)
^ / / ^            M  /||\\\M             ^ \\\ \\\ ^
 ^ ^                  /||\\\                 ^ ^
                     //||\\\\
                     //||\\\\
                     //||\\\\        
                     '/||\\\'`;
    display.appendChild(dragon);
    console.log(dragon);
  }
}

renderTitleScreen();
