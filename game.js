const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");
const qImgElement = document.getElementById("qpic");

let state = {};

function startGame() {
  state = {};
  showTextNode(0);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  var ritem = qImgElement.childNodes[0];
  var img = document.createElement("img");
  let img_dir = "images/";
  img.src = img_dir.concat(textNode.image);
  img.width = 300;
  qImgElement.replaceChild(img, ritem);
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 0,
    text: "Space Odyssey: Online Treasure Hunt \n Fill the form before you start \n https://forms.gle/cfxtTFvN8LG1sC239",
    image: "astral1.png",
    options: [
      {
        text: "Start",
        nextText: 1,
      },
      {
        text: "May be later!",
        nextText: 0,
      },
    ],
  },
  {
    id: 1,
    text: "It is 2035 and humanity is thriving under the shelter of the pale blue dot. It has been only a few months since NASA had spotted a wierd object floating through the space.",
    image: "Earth.png",
    options: [
      {
        text: "← Back",
        nextText: 0,
      },
      {
        text: "Are you curious? Let's see where it takes us",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "The object seems to be nothing like humanity has ever seen. Its unusual trajectory seems to intrigue a lot of researchers. But what's even more mysterious is its striking resemblence with ʻOumuamua. They seem to call it 'Object X'",
    image: "mystery.gif",
    options: [
      {
        text: "← Back",
        nextText: 1,
      },
      {
        text: "ʻOumuamua! Hmm seems interesting",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "ʻOumuamua is the first known interstellar object detected passing through the Solar System. Do you know who discovered it?",
    image: "ou.jpeg",
    options: [
      {
        text: "Karen Jean Meech",
        nextText: 4,
      },
      {
        text: "Robert Weryk",
        nextText: 5,
      },
      {
        text: "Robert Jedicke",
        nextText: 4,
      },
      {
        text: "Marco Micheli",
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Oops don't think that's correct. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 3,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },
  {
    id: 5,
    text: "Oh yes that's correct! Now back to the story.\n Thanks to the advanced technology, NASA is all geared up to send a group of researchers to Object X. Their motive is to study the object and it's extra-terrestrial orgins.",
    image: "AstMining.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 3,
      },
      {
        text: "Help NASA crack the math!",
        nextText: 6,
      },
    ],
  },
  {
    id: 6,
    text: "Let's start with some space flight performance! \n What would be the nature of the effect of the propellant mass fraction on the vehicle velocity?",
    image: "rocket.jpeg",
    options: [
      {
        text: "Exponential",
        nextText: 8,
      },
      {
        text: "Logarithmic",
        nextText: 7,
      },
      {
        text: "Linear",
        nextText: 8,
      },
      {
        text: "Parabolic",
        nextText: 8,
      },
    ],
  },
  {
    id: 7,
    text: "Woah! You are right. ",
    image: "req.png",
    options: [
      {
        text: "← Back",
        nextText: 6,
      },
      {
        text: "Let's crack the next one",
        nextText: 9,
      },
    ],
  },
  {
    id: 8,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 6,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },
  {
    id: 9,
    text: "Astronauts have boarded the ship to Object X. What is the minimum velocity required by the rocket to escape the gravitaional pull of Earth? ",
    image: "ev.jpeg",
    options: [
      {
        text: "11.19 km/s",
        nextText: 10,
      },
      {
        text: "10.18 km/s",
        nextText: 11,
      },
      {
        text: "10.38 km/s",
        nextText: 11,
      },
      {
        text: "11.29 km/s",
        nextText: 11,
      },
    ],
  },
  {
    id: 10,
    text: "You got this! Thanks to you, now we are leaving Earth successfully ",
    image: "rocket_leaving.gif",
    options: [
      {
        text: "← Back",
        nextText: 9,
      },
      {
        text: "Let's crack the next one",
        nextText: 12,
      },
    ],
  },
  {
    id: 11,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 9,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },
  {
    id: 12,
    text: "Its a long distance journey ahead. Object X is located somewhere near Uranus at the outskirts of Solar System. But ofcourse there is plenty to explore.",
    image: "uranus.jpg",
    options: [
      {
        text: "← Back",
        nextText: 9,
      },
      {
        text: "Explore",
        nextText: 13,
      },
    ],
  },
  {
    id: 13,
    text: "Oh wow! We have reached Asteriod belt, the smallest and innermost known circumstellar disc in the Solar System. Do you know that about half its mass is contained in the four largest asteroids: Ceres, Vesta, Pallas, and Hygiea. Speaking of which can you guess the mass of the Asteriod belt?",
    image: "asteroid-belt.png",
    options: [
      {
        text: "4% mass of the Sun",
        nextText: 15,
      },
      {
        text: "4% mass of the Earth",
        nextText: 15,
      },
      {
        text: "4% mass of the Moon",
        nextText: 14,
      },
      {
        text: "4% mass of the Jupiter",
        nextText: 15,
      },
    ],
  },
  {
    id: 14,
    text: "Perfection! Bye Bye Asterid belt. Next stop Jupiter",
    image: "asteroid-belt.png",
    options: [
      {
        text: "← Back",
        nextText: 13,
      },
      {
        text: "Go to Jupiter",
        nextText: 16,
      },
    ],
  },
  {
    id: 15,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 13,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },
  {
    id: 16,
    text: "Jupiter, the fifth and the largest planet in the solar system. Isn't it beautful? It has 80 known moons but do you know which is the largest?",
    image: "jupiter.png",
    options: [
      {
        text: "Callisto",
        nextText: 18,
      },
      {
        text: "Europa",
        nextText: 18,
      },
      {
        text: "lo",
        nextText: 18,
      },
      {
        text: "Ganymede",
        nextText: 17,
      },
    ],
  },
  {
    id: 17,
    text: "Perfection! Time to bid farewell to Jupiter",
    image: "jupiter.png",
    options: [
      {
        text: "← Back",
        nextText: 16,
      },
      {
        text: "Close to destination?",
        nextText: 19,
      },
    ],
  },
  {
    id: 18,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 16,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },
  {
    id: 19,
    text: "We are closing in on Object X. But the crew members are quite in a perplexed state right now. Object X looks nothing like the researchers had speculated. Infact it looks more like .... an advanced spacecraft attached to a rock",
    image: "alienAst.jpg",
    options: [
      {
        text: "Abandon mission. Go back ",
        nextText: 16,
      },
      {
        text: "Explore the ship.",
        nextText: 20,
      },
    ],
  },
  {
    id: 20,
    text: "The researchers land on Object X in the hopes of finding something relevant, but to their dismay and relief at the same time, the spaceship seems to be abandoned. The Object has been controlled automatically by some kind of advanced space race.",
    image: "alienAst.jpg",
    options: [
      {
        text: "Go back ",
        nextText: 19,
      },
      {
        text: "Continue",
        nextText: 21,
      },
    ],
  },
  {
    id: 21,
    text: "Unfortunately one of the crew members presses a button on the ship out of curiosity causing the ship to override. All the doors in the ship gets sealed and an alien hologram like technology pops up and presents them with 4 options to choose from. They have no other choice but go with the flow.",
    image: "alienAst.jpg",
    options: [
      {
        text: " Go back ",
        nextText: 20,
      },
      {
        text: "Show options",
        nextText: 22,
      },
    ],
  },
  // Meeting point 2
  {
    id: 123,
    text: "Hmm... I guess we are now presented with another set of 4 alien language options. I think this might be it! Let's get going...",
    image: "alienAst.jpg",
    options: [
      {
        // exo planets
        text: "⟒⌖⍜⌿⌰⏃⋏⟒⏁⌇",
        requiredState: (currentState) => !currentState.EP,
        setState: { EP: true },
        nextText: 90,
      },
      {
        // Neutron
        text: "⋏⟒⎍⏁⍀⍜⋏ ⌇⏁⏃⍀",
        requiredState: (currentState) => !currentState.NEU,
        setState: { NEU: true },
        nextText: 75,
      },
      {
        // Red Sup
        text: "⍀⟒⎅ ⌇⎍⌿⟒⍀☌⟟⏃⋏⏁",
        requiredState: (currentState) => !currentState.RS,
        setState: { RS: true },
        nextText: 102,
      },
      {
        // SAG
        text: "⌇⏃☌⟟⏁⏁⏃⍀⟟⎍⌇ ⏃*",
        requiredState: (currentState) => !currentState.SAG,
        setState: { SAG: true },
        nextText: 114,
      },
      {
        // Move to docs
        text: "I think you have reached the end of the journey!!.",
        requiredState: (currentState) =>
          currentState.EP &&
          currentState.RS &&
          currentState.SAG &&
          currentState.NEU,
        setState: { P2F: true },
        nextText: 132,
      },
    ],
  },
  // Meeting point 1
  {
    id: 22,
    text: " Hmm.. the options seems to be in some unknow language. Ready to make a leap of faith? Let's see where it takes us",
    image: "alienAst.jpg",
    options: [
      {
        // pulsar
        text: "⌿⎍⌰⌇⏃⍀",
        requiredState: (currentState) => !currentState.PUL,
        setState: { PUL: true },
        nextText: 23,
      },
      {
        // BSS
        text: "⏚⟟⋏⏃⍀⊬ ⌇⏁⏃⍀ ⌇⊬⌇⏁⟒⋔",
        requiredState: (currentState) => !currentState.BSS,
        setState: { BSS: true },
        nextText: 38,
      },
      {
        // WDwarf
        text: "⍙⊑⟟⏁⟒ ⎅⍙⏃⍀⎎",
        requiredState: (currentState) => !currentState.WD,
        setState: { WD: true },
        nextText: 50,
      },
      {
        // Nebula
        text: "⋏⟒⏚⎍⌰⏃",
        requiredState: (currentState) => !currentState.NEB,
        setState: { NEB: true },
        nextText: 62,
      },
      {
        // Move to Path 2
        text: "Display next set of coordinates.",
        requiredState: (currentState) =>
          currentState.WD &&
          currentState.NEB &&
          currentState.BSS &&
          currentState.PUL,
        setState: { P1F: true },
        nextText: 123,
      },
    ],
  },

  // pulsar 1
  {
    id: 23,
    text: "What is the rarest type of solar eclipse?",
    image: "qn06.jpg",
    options: [
      {
        text: "Annular",
        nextText: 24,
      },
      {
        text: "Total",
        nextText: 24,
      },
      {
        text: "Partial",
        nextText: 24,
      },
      {
        text: "Hybrid",
        nextText: 25,
      },
    ],
  },
  {
    id: 25,
    text: "That's right. Let's move on",
    image: "PUL1.gif",
    options: [
      {
        text: "← Back",
        nextText: 23,
      },
      {
        text: "Next",
        nextText: 26,
      },
    ],
  },
  {
    id: 24,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 23,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // pulsar 2
  {
    id: 26,
    text: "The physicist on-board says “This is a pulsar, these are the clocks of the universe. Their bursts are as accurate as atomic clocks. They rotate extremely fast and emit powerful radiation from their magnetic poles. They are like a lighthouse and this one happens to point straight at us! Most of the time, they are ___”",
    image: "PUL2.gif",
    options: [
      {
        text: "White dwarfs",
        nextText: 27,
      },
      {
        text: "Red supergiants",
        nextText: 27,
      },
      {
        text: "Neutron stars",
        nextText: 28,
      },
      {
        text: "Red Dwarf",
        nextText: 27,
      },
    ],
  },
  {
    id: 28,
    text: "That's right. Let's move on",
    image: "PUL2.gif",
    options: [
      {
        text: "← Back",
        nextText: 26,
      },
      {
        text: "Next",
        nextText: 29,
      },
    ],
  },
  {
    id: 27,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 26,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // pulsar 3
  {
    id: 29,
    text: "Which type of solar eclipse can cause the 'diamond ring' effect?",
    image: "qn07.jpg",
    options: [
      {
        text: "Partial",
        nextText: 31,
      },
      {
        text: "Total",
        nextText: 30,
      },
      {
        text: "Annual",
        nextText: 31,
      },
      {
        text: "Hybrid",
        nextText: 31,
      },
    ],
  },
  {
    id: 30,
    text: "That's right. Let's move on",
    image: "PUL3.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 29,
      },
      {
        text: "Next",
        nextText: 32,
      },
    ],
  },
  {
    id: 31,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 29,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // pulsar 4
  {
    id: 32,
    text: "It takes 164 years for one revolution",
    image: "qn10.jpg",
    options: [
      {
        text: "Mercury",
        nextText: 34,
      },
      {
        text: "Saturn",
        nextText: 34,
      },
      {
        text: "Jupiter",
        nextText: 34,
      },
      {
        text: "Neptune",
        nextText: 33,
      },
    ],
  },
  {
    id: 33,
    text: "That's right. Let's move on",
    image: "PUL4.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 32,
      },
      {
        text: "Next",
        nextText: 35,
      },
    ],
  },
  {
    id: 34,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 32,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // pulsar 5
  {
    id: 35,
    text: "White dwarfs can also be pulsars, the physicist says. But, since they are much less dense, their moment of inertia is much larger and so their rotation period is ___ than neutron star pulsars and are much rarer. The first one was found in ___.    ",
    image: "PUL5.jpeg",
    options: [
      {
        text: "Higher, 1997",
        nextText: 37,
      },
      {
        text: "Higher, 2016",
        nextText: 36,
      },
      {
        text: "Lower, 1997",
        nextText: 37,
      },
      {
        text: "Lower, 2016",
        nextText: 37,
      },
    ],
  },
  {
    id: 36,
    text: "That's right. Let's move on",
    image: "PUL5.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 35,
      },
      {
        text: "Next",
        nextText: 131,
      },
    ],
  },
  {
    id: 37,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 35,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // BSS 1
  {
    id: 38,
    text: "In all SSTO(single stage to orbit) vehicles proposed, what type of engine is used in the atmosphere",
    image: "qn09.jpg",
    options: [
      {
        text: "Scramjet",
        nextText: 39,
      },
      {
        text: "Nuclear Propulsion",
        nextText: 40,
      },
      {
        text: "Cryogenic",
        nextText: 40,
      },
      {
        text: "HTPB",
        nextText: 40,
      },
    ],
  },
  {
    id: 39,
    text: "That's right. Let's move on",
    image: "BS1.jpg",
    options: [
      {
        text: "← Back",
        nextText: 38,
      },
      {
        text: "Next",
        nextText: 41,
      },
    ],
  },
  {
    id: 40,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 38,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // BSS 2
  {
    id: 41,
    text: "The name of the air-launched rocket-powered plane that reached space in 2004, becoming the first privately funded and flown space mission, winning the Ansari 	XPrize",
    image: "qn08.jpg",
    options: [
      {
        text: "X-15",
        nextText: 43,
      },
      {
        text: "Buran",
        nextText: 43,
      },
      {
        text: "SpaceShipOne",
        nextText: 42,
      },
      {
        text: "Pegasus",
        nextText: 43,
      },
    ],
  },
  {
    id: 42,
    text: "That's right. Let's move on",
    image: "BS2.jpg",
    options: [
      {
        text: "← Back",
        nextText: 41,
      },
      {
        text: "Next",
        nextText: 44,
      },
    ],
  },
  {
    id: 43,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 41,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // BSS 3
  {
    id: 44,
    text: "The binary star system you are witnessing is 4U 1820-30 composed of neutron star and white dwarf with neutron  and electron degeneracy pressures. The white dwarf gains in size through mass transfer forming an accretion disc and finally explodes releasing binding energy converting into K.E and lunlminosity . This is called as",
    image: "BSS23.gif",
    options: [
      {
        text: "Carbon explosion",
        nextText: 45,
      },
      {
        text: "Supernova",
        nextText: 45,
      },
      {
        text: "Stellar Novae",
        nextText: 46,
      },
      {
        text: "Neutrino bomb",
        nextText: 45,
      },
    ],
  },
  {
    id: 46,
    text: "That's right. Let's move on",
    image: "BSS23.gif",
    options: [
      {
        text: "← Back",
        nextText: 44,
      },
      {
        text: "Next",
        nextText: 47,
      },
    ],
  },
  {
    id: 45,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 44,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },
  // BSS 4
  {
    id: 47,
    text: "Which of these has a revolution - rotation period closest to one",
    image: "qn11.jpg",
    options: [
      {
        text: "Mercury",
        nextText: 48,
      },
      {
        text: "Venus",
        nextText: 49,
      },
      {
        text: "Earth",
        nextText: 48,
      },
      {
        text: "Mars",
        nextText: 48,
      },
    ],
  },
  {
    id: 49,
    text: "That's right. Let's move on",
    image: "BS3.jpg",
    options: [
      {
        text: "← Back",
        nextText: 47,
      },
      {
        text: "Next",
        nextText: 130,
      },
    ],
  },
  {
    id: 48,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 47,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // white dwarf -1
  {
    id: 50,
    text: "What is the evidence for The Big Bang",
    image: "qn13.jpg",
    options: [
      {
        text: "Black holes",
        nextText: 51,
      },
      {
        text: "Cosmic microwave background radiation",
        nextText: 52,
      },
      {
        text: "Quasars",
        nextText: 51,
      },
      {
        text: "Dark Energy",
        nextText: 51,
      },
    ],
  },
  {
    id: 52,
    text: "That's right. Let's move on",
    image: "WD1.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 50,
      },
      {
        text: "Next",
        nextText: 53,
      },
    ],
  },
  {
    id: 51,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 50,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // white dwarf -2
  {
    id: 53,
    text: "Neutron star is the same as white dwarf. In Neutron star gravity is balanced by Neutron degeneracy pressure , in white dwarf it is",
    image: "qn15.jpg",
    options: [
      {
        text: "Radiation pressure",
        nextText: 54,
      },
      {
        text: "Molten core",
        nextText: 54,
      },
      {
        text: "Electron degeneracy pressure",
        nextText: 55,
      },
      {
        text: "Magnetic field motion of collapsed core",
        nextText: 54,
      },
    ],
  },
  {
    id: 55,
    text: "That's right. Let's move on",
    image: "WD2.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 53,
      },
      {
        text: "Next",
        nextText: 56,
      },
    ],
  },
  {
    id: 54,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 53,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // white dwarf -3
  {
    id: 56,
    text: "Our Universe is",
    image: "qn12.jpg",
    options: [
      {
        text: "Homogeneous",
        nextText: 57,
      },
      {
        text: "Isotropic",
        nextText: 57,
      },
      {
        text: "Homogeneous and Isotropic",
        nextText: 58,
      },
      {
        text: "Radiative",
        nextText: 57,
      },
    ],
  },
  {
    id: 58,
    text: "That's right. Let's move on",
    image: "WD3.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 56,
      },
      {
        text: "Next",
        nextText: 59,
      },
    ],
  },
  {
    id: 57,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 56,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },
  // white dwarf - 4
  {
    id: 59,
    text: "Even though the nuclear fuel is entirely burned out and only a faint light comes out of it from the stored thermal energy, its core is still at some temperature range and its temperature is preserved from sudden cooling with the opacity to radiation by its outer layers",
    image: "WD2.jpeg",
    options: [
      {
        text: "3000000K ",
        nextText: 60,
      },
      {
        text: "5000-10000000K",
        nextText: 60,
      },
      {
        text: "100000000K-2000000000K",
        nextText: 60,
      },
      {
        text: "depends on when it actually run out of fuel",
        nextText: 61,
      },
    ],
  },
  {
    id: 61,
    text: "That's right. Let's move on",
    image: "WD2.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 59,
      },
      {
        text: "Next",
        nextText: 129,
      },
    ],
  },
  {
    id: 60,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 59,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Nebula 1
  {
    id: 62,
    text: "For about how long did Yuri Gagarin stay in space in his first journey?",
    image: "qn19.jpg",
    options: [
      {
        text: "3 days",
        nextText: 63,
      },
      {
        text: "1 week",
        nextText: 63,
      },
      {
        text: "30 mins",
        nextText: 63,
      },
      {
        text: "2 hrs",
        nextText: 64,
      },
    ],
  },
  {
    id: 64,
    text: "That's right. Let's move on",
    image: "Neb1.png",
    options: [
      {
        text: "← Back",
        nextText: 62,
      },
      {
        text: "Next",
        nextText: 66,
      },
    ],
  },
  {
    id: 63,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 62,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },
  // Nebula 2
  {
    id: 66,
    text: "Dark Matter is divided into two types: ",
    image: "qn04.jpg",
    options: [
      {
        text: "High and Low Density",
        nextText: 67,
      },
      {
        text: "Fast and Slow",
        nextText: 67,
      },
      {
        text: "Hot and Cold",
        nextText: 68,
      },
      {
        text: "Dark and Darker",
        nextText: 67,
      },
    ],
  },
  {
    id: 68,
    text: "That's right. Let's move on",
    image: "Neb2.png",
    options: [
      {
        text: "← Back",
        nextText: 66,
      },
      {
        text: "Next",
        nextText: 69,
      },
    ],
  },
  {
    id: 67,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 66,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Nebula 3
  {
    id: 69,
    text: "Where were the first rockets made?",
    image: "qn20.jpg",
    options: [
      {
        text: "China",
        nextText: 71,
      },
      {
        text: "India",
        nextText: 70,
      },
      {
        text: "Egypt",
        nextText: 70,
      },
      {
        text: "Greece",
        nextText: 70,
      },
    ],
  },
  {
    id: 71,
    text: "That's right. Let's move on",
    image: "Ne3.jpg",
    options: [
      {
        text: "← Back",
        nextText: 69,
      },
      {
        text: "Next",
        nextText: 72,
      },
    ],
  },
  {
    id: 70,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 69,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Nebula 4
  {
    id: 72,
    text: "Who was the first american to go on a space walk?",
    image: "qn17.jpg",
    options: [
      {
        text: "John Glenn",
        nextText: 73,
      },
      {
        text: "Edward White",
        nextText: 74,
      },
      {
        text: "Neil Armstrong",
        nextText: 73,
      },
      {
        text: "Jim Lovell",
        nextText: 73,
      },
    ],
  },
  {
    id: 74,
    text: "That's right. Let's move on",
    image: "Neb4.png",
    options: [
      {
        text: "← Back",
        nextText: 72,
      },
      {
        text: "Next",
        nextText: 128,
      },
    ],
  },
  {
    id: 73,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 72,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Neutron 1
  {
    id: 75,
    text: "When was NASA founded?",
    image: "qn18.jpg",
    options: [
      {
        text: "1945",
        nextText: 76,
      },
      {
        text: "1958",
        nextText: 77,
      },
      {
        text: "1980",
        nextText: 76,
      },
      {
        text: "1969",
        nextText: 76,
      },
    ],
  },
  {
    id: 77,
    text: "That's right. Let's move on",
    image: "NS1.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 75,
      },
      {
        text: "Next",
        nextText: 78,
      },
    ],
  },
  {
    id: 76,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 75,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Neutron 2
  {
    id: 78,
    text: "When was ISRO's predecessor organisation, INCOSPAR found?",
    image: "qn16.jpg",
    options: [
      {
        text: "26 January, 1965",
        nextText: 79,
      },
      {
        text: "Feb 16, 1962",
        nextText: 80,
      },
      {
        text: "August 15, 1968",
        nextText: 79,
      },
      {
        text: "December 12, 1958",
        nextText: 79,
      },
    ],
  },
  {
    id: 80,
    text: "That's right. Let's move on",
    image: "NS2.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 78,
      },
      {
        text: "Next",
        nextText: 81,
      },
    ],
  },
  {
    id: 79,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 78,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Neutron 3
  {
    id: 81,
    text: "Which of the following support evidence of dark matter?",
    image: "qn05.jpg",
    options: [
      {
        text: "High temperatures of X-ray gas in galaxy clusters",
        nextText: 82,
      },
      {
        text: "Unseen mass component in gravitational lensing",
        nextText: 82,
      },
      {
        text: "Large scale structure formation",
        nextText: 82,
      },
      {
        text: "All of these",
        nextText: 83,
      },
    ],
  },
  {
    id: 83,
    text: "That's right. Let's move on",
    image: "NS3.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 81,
      },
      {
        text: "Next",
        nextText: 84,
      },
    ],
  },
  {
    id: 82,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 81,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Neutron 4
  {
    id: 84,
    text: "Which is the landing site where Perseverance Rover Landed",
    image: "qn14.jpg",
    options: [
      {
        text: "Jezero crater",
        nextText: 86,
      },
      {
        text: "Holden crater",
        nextText: 85,
      },
      {
        text: "Gusev crater",
        nextText: 85,
      },
      {
        text: "Mawrth Vallis",
        nextText: 85,
      },
    ],
  },
  {
    id: 86,
    text: "That's right. Let's move on",
    image: "NS4.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 84,
      },
      {
        text: "Next",
        nextText: 87,
      },
    ],
  },
  {
    id: 85,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 84,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Neutron 5
  {
    id: 87,
    text: "A Neutron star has a mass about 1.4 times that of the sun. Although the size of a neutron star is comparable with _____",
    image: "NS5.jpeg",
    options: [
      {
        text: "A city",
        nextText: 89,
      },
      {
        text: "Size of a basketball",
        nextText: 88,
      },
      {
        text: "United States of America",
        nextText: 88,
      },
      {
        text: "A bus",
        nextText: 88,
      },
    ],
  },
  {
    id: 89,
    text: "That's right. Let's move on",
    image: "NS5.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 87,
      },
      {
        text: "Next",
        nextText: 127,
      },
    ],
  },
  {
    id: 88,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 87,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Exp 1
  {
    id: 90,
    text: "Who discovered the famous 'Rocket Equation'",
    image: "qn21.jpg",
    options: [
      {
        text: "Robert Goddard	",
        nextText: 92,
      },
      {
        text: "Robert Esnault-Pelterie",
        nextText: 92,
      },
      {
        text: "Konstantin E. Tsiolkovsky",
        nextText: 91,
      },
      {
        text: "Hermann Oberth",
        nextText: 92,
      },
    ],
  },
  {
    id: 91,
    text: "That's right. Let's move on",
    image: "Exp1.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 90,
      },
      {
        text: "Next",
        nextText: 96,
      },
    ],
  },
  {
    id: 92,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 90,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Exp 2
  {
    id: 93,
    text: "Who created the first liquid fuelled rocket?",
    image: "qn22.jpg",
    options: [
      {
        text: "Konstantin Tsiolkovsky",
        nextText: 94,
      },
      {
        text: "Robert H. Goddard",
        nextText: 95,
      },
      {
        text: "Hermann Oberth",
        nextText: 94,
      },
      {
        text: "Wernher Von Braun",
        nextText: 94,
      },
    ],
  },
  {
    id: 95,
    text: "That's right. Let's move on",
    image: "Exp2.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 93,
      },
      {
        text: "Next",
        nextText: 90,
      },
    ],
  },
  {
    id: 94,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 93,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Exp 3
  {
    id: 96,
    text: "Identify the name of this Celestial Body:",
    image: "id_cel.jpeg",
    options: [
      {
        text: "Mars",
        nextText: 97,
      },
      {
        text: "Europa",
        nextText: 97,
      },
      {
        text: "Titan",
        nextText: 98,
      },
      {
        text: "Io",
        nextText: 97,
      },
    ],
  },
  {
    id: 98,
    text: "That's right. Let's move on",
    image: "Exp3.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 96,
      },
      {
        text: "Next",
        nextText: 99,
      },
    ],
  },
  {
    id: 97,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 96,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // Exp 4
  {
    id: 99,
    text: "Indirect methods like transit method have helped in detection of about 3500 exoplanets.Now the technology have advanced and improvised direct methods are being in use for the search of exoplanets.But their efficiency is limited by overwhelming glare of stars.Inorder to overcome this effect the new technology being in use is?",
    image: "Exp5.jpeg",
    options: [
      {
        text: "Coronagraphy",
        nextText: 101,
      },
      {
        text: "Microlensing",
        nextText: 100,
      },
      {
        text: "Astrometry",
        nextText: 100,
      },
      {
        text: "None of the above",
        nextText: 100,
      },
    ],
  },
  {
    id: 101,
    text: "That's right. Let's move on",
    image: "Exp5.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 99,
      },
      {
        text: "Next",
        nextText: 126,
      },
    ],
  },
  {
    id: 100,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 99,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // RS 1
  {
    id: 102,
    text: "From approximately how much area of the earth is a lunar eclipse visible?",
    image: "qn02.jpg",
    options: [
      {
        text: ">10%",
        nextText: 103,
      },
      {
        text: ">25%",
        nextText: 103,
      },
      {
        text: ">50%",
        nextText: 104,
      },
      {
        text: ">5%",
        nextText: 103,
      },
    ],
  },
  {
    id: 104,
    text: "That's right. Let's move on",
    image: "RS1.jpg",
    options: [
      {
        text: "← Back",
        nextText: 102,
      },
      {
        text: "Next",
        nextText: 105,
      },
    ],
  },
  {
    id: 103,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 102,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // RS 2
  {
    id: 105,
    text: "Which king of India built an astronomical observatory in 17 th century?",
    image: "qn23.jpg",
    options: [
      {
        text: "Bahadur Singh",
        nextText: 106,
      },
      {
        text: "Jahangir",
        nextText: 106,
      },
      {
        text: "Aurangzeb",
        nextText: 106,
      },
      {
        text: "Jai Singh",
        nextText: 107,
      },
    ],
  },
  {
    id: 107,
    text: "That's right. Let's move on",
    image: "RS2.png",
    options: [
      {
        text: "← Back",
        nextText: 105,
      },
      {
        text: "Next",
        nextText: 108,
      },
    ],
  },
  {
    id: 106,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 105,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // RS 3
  {
    id: 108,
    text: "Identify the Nebula shown: ",
    image: "id_nebula.jpeg",
    options: [
      {
        text: "Round Nebula",
        nextText: 109,
      },
      {
        text: "Cat Eye Nebula",
        nextText: 109,
      },
      {
        text: "Ring Nebula",
        nextText: 110,
      },
      {
        text: "Spiral Nebula",
        nextText: 109,
      },
    ],
  },
  {
    id: 110,
    text: "That's right. Let's move on",
    image: "RS3.jpg",
    options: [
      {
        text: "← Back",
        nextText: 108,
      },
      {
        text: "Next",
        nextText: 111,
      },
    ],
  },
  {
    id: 109,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 108,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // RS 4
  {
    id: 111,
    text: "The moon's appearance during a total eclipse has given it this name",
    image: "qn01.jpg",
    options: [
      {
        text: "Dark Moon",
        nextText: 113,
      },
      {
        text: "Blue Moon",
        nextText: 112,
      },
      {
        text: "Blood Moon",
        nextText: 112,
      },
      {
        text: "Dead Moon",
        nextText: 112,
      },
    ],
  },
  {
    id: 113,
    text: "That's right. Let's move on",
    image: "RS4.jpg",
    options: [
      {
        text: "← Back",
        nextText: 111,
      },
      {
        text: "Next",
        nextText: 125,
      },
    ],
  },
  {
    id: 112,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 111,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // SAG 1
  {
    id: 114,
    text: "The size comparison to sun will be futile it's hundreds of thousands of billions of times the mass of the sun . We should be lucky to see it this close , it's also known as",
    image: "SAG1.jpeg",
    options: [
      {
        text: "Einstein- Rosen bridge",
        nextText: 115,
      },
      {
        text: "Black holes",
        nextText: 115,
      },
      {
        text: "Dimensional portal",
        nextText: 115,
      },
      {
        text: "Quasi stellar objects",
        nextText: 116,
      },
    ],
  },
  {
    id: 116,
    text: "That's right. Let's move on",
    image: "SAG1.jpeg",
    options: [
      {
        text: "← Back",
        nextText: 114,
      },
      {
        text: "Next",
        nextText: 117,
      },
    ],
  },
  {
    id: 115,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 114,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // SAG 2
  {
    id: 117,
    text: "Measurements shows that it has a radius of 22mn kilometres . Our habitat is 8 kilo parsec from sag A* , it's mass is enormous it can completely stretch out the space time fabric , each minute we spent here it's __ in Earth",
    image: "sag2.gif",
    options: [
      {
        text: "700 years",
        nextText: 119,
      },
      {
        text: "10 years",
        nextText: 118,
      },
      {
        text: "100 years",
        nextText: 118,
      },
      {
        text: "1 mn years",
        nextText: 118,
      },
    ],
  },
  {
    id: 119,
    text: "That's right. Let's move on",
    image: "sag2.gif",
    options: [
      {
        text: "← Back",
        nextText: 117,
      },
      {
        text: "Next",
        nextText: 120,
      },
    ],
  },
  {
    id: 118,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 117,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // SAG 3
  {
    id: 120,
    text: "What gives the moon its distinctive colour during a total lunar eclipse?	",
    image: "qn03.jpg",
    options: [
      {
        text: "Rayleigh scattering",
        nextText: 121,
      },
      {
        text: "Diffraction",
        nextText: 121,
      },
      {
        text: "Refraction",
        nextText: 121,
      },
      {
        text: "Raman Scattering",
        nextText: 122,
      },
    ],
  },
  {
    id: 122,
    text: "That's right. Let's move on",
    image: "sag3.gif",
    options: [
      {
        text: "← Back",
        nextText: 120,
      },
      {
        text: "Next",
        nextText: 124,
      },
    ],
  },
  {
    id: 121,
    text: "Oops! That did not go as planned. Let's give it one more shot",
    image: "default-image.jpg",
    options: [
      {
        text: "Try Again",
        nextText: 120,
      },
      {
        text: "Start from the beginning",
        nextText: 1,
      },
    ],
  },

  // CLUES
  {
    id: 124,
    text: "Wait I guess it's a clue! Keep this in mind or take a screenshot. It might help you crack the final answer.",
    image: "Clue1.jpg",
    options: [
      {
        text: "← Back",
        nextText: 120,
      },
      {
        text: "Next",
        nextText: 123,
      },
    ],
  },
  {
    id: 125,
    text: "Oh its another clue! Keep this in mind or take a screenshot. It might help you crack the final answer.",
    image: "Clue2.jpg",
    options: [
      {
        text: "← Back",
        nextText: 111,
      },
      {
        text: "Next",
        nextText: 123,
      },
    ],
  },
  {
    id: 126,
    text: "There's another clue! Keep this in mind or take a screenshot. It might help you crack the final answer.",
    image: "Clue3.jpg",
    options: [
      {
        text: "← Back",
        nextText: 96,
      },
      {
        text: "Next",
        nextText: 123,
      },
    ],
  },
  {
    id: 127,
    text: "There's another clue! Keep this in mind or take a screenshot. It might help you crack the final answer.",
    image: "Clue4.jpg",
    options: [
      {
        text: "← Back",
        nextText: 87,
      },
      {
        text: "Next",
        nextText: 123,
      },
    ],
  },
  {
    id: 128,
    text: "There's another clue! Keep this in mind or take a screenshot. It might help you crack the final answer.",
    image: "Clue5.jpg",
    options: [
      {
        text: "← Back",
        nextText: 72,
      },
      {
        text: "Next",
        nextText: 22,
      },
    ],
  },
  {
    id: 129,
    text: "There's another clue! Keep this in mind or take a screenshot. It might help you crack the final answer.",
    image: "Clue6.jpg",
    options: [
      {
        text: "← Back",
        nextText: 59,
      },
      {
        text: "Next",
        nextText: 22,
      },
    ],
  },
  {
    id: 130,
    text: "Oh that's a clue! Keep this in mind or take a screenshot. It might help you crack the final answer.",
    image: "Clue7.jpg",
    options: [
      {
        text: "← Back",
        nextText: 47,
      },
      {
        text: "Next",
        nextText: 22,
      },
    ],
  },
  {
    id: 131,
    text: "Woah it's a clue!! Keep this in mind or take a screenshot. It might help you crack the final answer.",
    image: "Clue8.jpg",
    options: [
      {
        text: "← Back",
        nextText: 35,
      },
      {
        text: "Next",
        nextText: 22,
      },
    ],
  },

  // Final doc
  {
    id: 132,
    text: "It seems you had a great journey! Scan the QR code and type in the keyword you decoded from the clues.",
    image: "quest.png",
    options: [
      {
        text: "← Back",
        nextText: 123,
      },
      {
        text: "Start from beginning",
        nextText: 1,
      },
    ],
  },
];

startGame();
