const areas = {
  start: {
    text: "You awaken in a dark dungeon. Two doors lie before you.",
    choices: [
      { label: "Left Door", next: "hallway" },
      { label: "Right Door", next: "trapRoom" },
    ],
  },
  hallway: {
    text: "You hear a noise ahead, a sword lies near you.",
    choices: [
      { label: "Be Brave", next: "weaponlessDragon" },
      { label: "Grab Sword", next: "dragon" },
    ],
  },
  trapRoom: {
    text: "ARROWS SHOOT OUT OF THE WALL!",
    choices: [{ label: "DODGE!", next: "treasureRoom" }],
  },
  weaponlessDragon: {
    text: "You see a dragon. You can't defend yourself. You die.",
    choices: [{ label: "Try Again?", next: "start" }, { label: "Title" }],
  },
  dragon: {
    text: "You see a dragon. You slay the dragon with all your might.",
    choices: [{ label: "YAY!", next: "poorExit" }],
  },
  treasureRoom: {
    text: "You enter a door at the end of the room. You find vast riches!",
    choices: [
      { label: "Take Gold", next: "goldHallway" },
      { label: "Leave it", next: "hallway" },
    ],
  },
  goldHallway: {
    text: "You hear a noise ahead, a sword lies near you.",
    choices: [
      { label: "Be Brave", next: "weaponlessDragon" },
      { label: "Grab Sword", next: "goldDragon" },
    ],
  },
  goldDragon: {
    text: "You see a dragon. You slay the dragon with all your might.",
    choices: [{ label: "YAY!", next: "richExit" }],
  },
  poorExit: {
    text: "You make it out of the dungeon, but you've left the gold.",
    choices: [
      { label: "Go Back", next: "start" },
      { label: "Leave it", next: "poorEnd" },
    ],
  },
  richExit: {
    text: "You make it out of the dungeon a very rich person.",
    choices: [{ label: "YAY!", next: "richEnd" }],
  },
  poorEnd: {
    text: "You live to see another day.",
    choices: [{ label: "Title" }],
  },
  richEnd: {
    text: "You take your newly found wealth and ride into the sunrise.",
    choices: [{ label: "Title" }],
  },
};
