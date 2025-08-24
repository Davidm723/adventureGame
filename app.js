let currentAreaKey = null;

const display = document.querySelector(".matrix-container");

function renderTitleScreen() {
  const title = document.createElement("p");
  title.setAttribute("class", "matrix-text ascii-art title-text");
  title.textContent = `      ##### ##                                                                                         
   /#####  /##                                                                                         
 //    /  / ###                                                                                        
/     /  /   ###                                                                                       
     /  /     ###                                                                                      
    ## ##      ## ##   ####    ###  /###     /###      /##       /###   ###  /###                      
    ## ##      ##  ##    ###  / ###/ #### / /  ###  / / ###     / ###  / ###/ #### /                   
    ## ##      ##  ##     ###/   ##   ###/ /    ###/ /   ###   /   ###/   ##   ###/                    
    ## ##      ##  ##      ##    ##    ## ##     ## ##    ### ##    ##    ##    ##                     
    ## ##      ##  ##      ##    ##    ## ##     ## ########  ##    ##    ##    ##                     
    #  ##      ##  ##      ##    ##    ## ##     ## #######   ##    ##    ##    ##                     
       /       /   ##      ##    ##    ## ##     ## ##        ##    ##    ##    ##                     
  /###/       /    ##      /#    ##    ## ##     ## ####    / ##    ##    ##    ##                     
 /   ########/      ######/ ##   ###   ### ########  ######/   ######     ###   ###                    
/       ####         #####   ##   ###   ###  ### ###  #####     ####       ###   ###                   
#                                                 ###                                                  
 ##                                         ####   ###                                                 
                                          /######  /#                                                  
                                         /     ###/                                                    
                                                                                                       
        ##            ##                                                                               
     /####             ##                                                                              
    /  ###             ##                                       #                                      
       /##             ## ##                                   ##                                      
      /  ##            ## ##                                   ##                                      
      /  ##        ### ##  ##    ###      /##  ###  /###     ######## ##   ####    ###  /###     /##   
     /    ##      ######### ##    ###    / ###  ###/ #### / ########   ##    ###  / ###/ #### / / ###  
     /    ##     ##   ####  ##     ###  /   ###  ##   ###/     ##      ##     ###/   ##   ###/ /   ### 
    /      ##    ##    ##   ##      ## ##    ### ##    ##      ##      ##      ##    ##       ##    ###
    /########    ##    ##   ##      ## ########  ##    ##      ##      ##      ##    ##       ######## 
   /        ##   ##    ##   ##      ## #######   ##    ##      ##      ##      ##    ##       #######  
   #        ##   ##    ##   ##      ## ##        ##    ##      ##      ##      ##    ##       ##       
  /####      ##  ##    /#   ##      /  ####    / ##    ##      ##      ##      /#    ##       ####    /
 /   ####    ## / ####/      ######/    ######/  ###   ###     ##       ######/ ##   ###       ######/ 
/     ##      #/   ###        #####      #####    ###   ###     ##       #####   ##   ###       #####  
#                                                                                                      
 ##                                                                                                    `;
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
      }, 2000);

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
  const face = document.createElement("p");
  face.setAttribute("class", "matrix-text ascii-art face");
  face.textContent = "(ó﹏ò｡)";
  display.appendChild(face);
  if(currentAreaKey === 'hallway' || currentAreaKey === 'goldHallway'){
    face.textContent = '(ᵕ—ᴗ—)'
  }
  if(currentAreaKey === 'trapRoom'){
    face.textContent = '( ˶°ㅁ°) !!'
  }
  if(currentAreaKey === 'weaponlessDragon'){
    face.textContent = '(x_x)'
  }
  if(currentAreaKey === 'dragon' || currentAreaKey === 'goldDragon'){
    face.textContent = '"( - ⌓ - )'
  }
  if(currentAreaKey === 'treasureRoom'){
    face.textContent = '($‿$)'
  }
  if(currentAreaKey === 'poorExit'){
    face.textContent = '(╥﹏╥)'
  }
  if(currentAreaKey === 'richExit'){
    face.textContent = '◝(ᵔᗜᵔ)◜'
  }
  if(currentAreaKey === 'poorEnd'){
    face.textContent = 'ദ്ദി（• ˕ •マ.ᐟ'
  }
  if(currentAreaKey === 'richEnd'){
    face.textContent = '(⌐■_■)'
  }
}

renderTitleScreen();
