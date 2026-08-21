let score = 0;
let lives = 3;
let current = 0;
let inventory = [];

const clues = [

  // =====================================
  // CASE #001
  // THE MISSING BLUEBERRY MUFFIN
  // =====================================

  {
    story: `
      <b>🕵🏽‍♀️ CASE #001: THE MISSING BLUEBERRY MUFFIN</b>

      <br><br>

      Dad bought one enormous blueberry muffin
      and left it in the kitchen.

      <br><br>

      The next morning...

      <br><br>

      <b>IT WAS GONE.</b> 😱

      <br><br>

      At the scene you find:

      <br>
      🫐 one squashed blueberry
      <br>
      💧 three tiny drops of water
      <br>
      🧵 a short red thread
      <br>
      🪟 an open kitchen window

      <div class="banana">
        🐒 Agent Banana: "I suspect the muffin."
      </div>
    `,

    question: `
      You inspect the floor and find
      two small wet footprints.

      <br><br>

      They are bare human footprints.

      <br><br>

      A tiny blue LEGO piece is stuck in one.

      <br><br>

      Who should you investigate first?

      <br><br>

      Type:
      <b>Digu</b>,
      <b>Mum</b>,
      <b>Dad</b>,
      or
      <b>Mr Nibbles</b>.
    `,

    answers: ["digu"],

    hint:
      "The LEGO clue is the strongest new evidence.",

    success:
      "Good choice. Digu said he was building LEGO.",

    item:
      "🧩 Blue LEGO clue"
  },

  {
    story: `
      You follow the wet footprints upstairs.

      <br><br>

      Near a bedroom door you find:

      <br>
      🧦 one wet sock
      <br>
      🧵 red thread stuck to it
      <br>
      🍫 chocolate-chip crumbs

      <br><br>

      But the missing muffin was blueberry.

      <br><br>

      Someone may be trying to frame somebody.
    `,

    question: `
      You compare the red thread from the kitchen
      with the thread on the sock.

      <br><br>

      They are identical:

      <br><br>

      bright red,
      fluffy,
      with a tiny golden sparkle.

      <br><br>

      What item is the thread most likely from?
    `,

    answers: [
      "christmas hat",
      "red christmas hat",
      "santa hat"
    ],

    hint:
      "Think of something red, fluffy and festive.",

    success:
      "Exactly — a red Christmas hat.",

    item:
      "🎅 Red thread"
  },

  {
    story: `
      You hide behind the curtains.

      <br><br>

      The wardrobe door creaks open.

      <br><br>

      Out steps...

      <br><br>

      <b>A MONKEY wearing a Christmas hat.</b> 🐒🎅

      <br><br>

      He is carrying half the missing muffin.

      <br><br>

      But he points desperately at a photograph
      and says:

      <br><br>

      <b>"Not me."</b>
    `,

    question: `
      The photograph shows a person
      carrying the whole muffin.

      <br><br>

      You can see:

      <br>
      👟 one green slipper
      <br>
      ⭐ star-patterned pyjama bottoms
      <br>
      🧁 the muffin

      <br><br>

      What object should you search for next?
    `,

    answers: [
      "green slipper",
      "slipper"
    ],

    hint:
      "Look for the most distinctive physical object.",

    success:
      "Right — find the green slipper.",

    item:
      "📸 Muffin photograph"
  },

  {
    story: `
      You find the green slipper under Dad's chair.

      <br><br>

      Inside it is written:

      <div class="code">M</div>

      Then a cat runs through the hallway
      wearing the matching slipper.

      <br><br>

      Its collar says:

      <br><br>

      <b>MARMALADE</b> 🐈
    `,

    question: `
      What does the letter M most likely stand for?
    `,

    answers: ["marmalade"],

    hint:
      "Use the name on the cat's collar.",

    success:
      "Exactly. The slipper belongs to Marmalade.",

    item:
      "👟 Green slipper"
  },

  {
    story: `
      Marmalade drops a tiny note:

      <div class="code">
        Meet me at the shed.
        <br>
        Bring the muffin.
        <br>
        Midnight.
        <br><br>
        — X
      </div>
    `,

    question: `
      You also find a tiny golden key
      hidden inside Agent Banana's banana. 🍌

      <br><br>

      Its label says:

      <div class="code">SHED — 12:00</div>

      Where should you go next?
    `,

    answers: [
      "shed",
      "the shed"
    ],

    hint:
      "Both clues point to the same place.",

    success:
      "To the shed!",

    item:
      "🗝️ Shed key"
  },

  {
    story: `
      You unlock the shed.

      <br><br>

      Inside sits Mr Nibbles
      wearing tiny sunglasses. 🐿️😎

      <br><br>

      Then the lights switch on.

      <br><br>

      Mum, Dad, Digu, Marmalade
      and several squirrels jump out.

      <br><br>

      <b>SURPRISE!</b> 🎉

      <br><br>

      The blueberry muffin is untouched.

      <br><br>

      Mr Nibbles says:

      <br><br>

      "There was never a thief."

      <br><br>

      "This was a test."
    `,

    question: `
      What secret group
      were you being tested to join?

      <br><br>

      <div class="code">
        THE ______ DETECTIVE SOCIETY
      </div>
    `,

    answers: [
      "midnight detective society",
      "the midnight detective society"
    ],

    hint:
      "The missing word is Midnight.",

    success:
      "Correct. Welcome to the Midnight Detective Society. 🕵🏽‍♀️",

    item:
      "🏅 Detective badge"
  },

  // =====================================
  // CASE #002
  // THE GIRL WHO DISAPPEARED
  // FROM A PHOTOGRAPH
  // =====================================

  {
    story: `
      <b>📸 CASE #002:
      THE GIRL WHO DISAPPEARED FROM A PHOTOGRAPH</b>

      <br><br>

      Mr Nibbles slides a black envelope
      across the table.

      <br><br>

      Inside is an old photograph from 1986.

      <br><br>

      It shows four children.

      <br><br>

      But on the back someone has written:

      <div class="code">
        SUMMER 1986 — ALL FIVE OF US
      </div>

      There are only four children in the picture.

      <div class="banana">
        🐒 Agent Banana:
        "Maybe the fifth one was taking the photo?"
      </div>
    `,

    question: `
      You inspect the photograph.

      <br><br>

      Between two children is an empty space.

      <br><br>

      Inside that space you can faintly see...

      <br><br>

      ✋ the outline of a hand.

      <br><br>

      What does this suggest?
    `,

    answers: [
      "someone disappeared",
      "someone is missing",
      "a person disappeared",
      "someone was removed"
    ],

    hint:
      "There should be five children, but one is missing.",

    success:
      "Exactly. Someone has been removed from the photograph. 😱",

    item:
      "📸 Strange 1986 photograph"
  },

  {
    story: `
      Three objects fall from the envelope:

      <br><br>

      🔑 A silver key labelled
      <b>ROOM 13</b>

      <br>
      🎀 A faded purple ribbon

      <br>
      📝 A note saying:

      <div class="code">
        DON'T LOOK FOR ME IN THE HOUSE.
        <br><br>
        LOOK FOR THE PLACE
        <br>
        THE HOUSE REMEMBERS.
      </div>
    `,

    question: `
      An old picture of the house shows
      these upstairs windows:

      <div class="code">
        10 &nbsp; 11 &nbsp; 12 &nbsp; 14 &nbsp; 15
      </div>

      Which room is missing?
    `,

    answers: [
      "13",
      "room 13",
      "thirteen"
    ],

    hint:
      "Look between 12 and 14.",

    success:
      "Room 13. But where did it go? 🔑",

    item:
      "🔑 Room 13 key"
  },

  {
    story: `
      You discover part of the house
      was demolished in 1987.

      <br><br>

      An old map shows where Room 13
      used to stand.

      <br><br>

      It is labelled:

      <div class="code">
        THE FORGOTTEN GARDEN
      </div>

      In the garden,
      an enormous tree has the number

      <div class="code">13</div>

      carved into its trunk.

      <br><br>

      You touch it.

      <br><br>

      <b>CLICK.</b>

      <br><br>

      The tree opens like a secret door. 🌳
    `,

    question: `
      Downstairs you find
      hundreds of photographs.

      <br><br>

      One photograph is dated TODAY.

      <br><br>

      It shows you,
      Agent Banana,
      Mr Nibbles...

      <br><br>

      and a mysterious girl
      wearing a ______ ribbon.

      <br><br>

      What colour is it?
    `,

    answers: ["purple"],

    hint:
      "You found the same ribbon in the envelope.",

    success:
      "Purple. The girl is pointing at a wooden box... 😳",

    item:
      "🎀 Purple ribbon"
  },

  {
    story: `
      The wooden box says:

      <div class="code">
        PIHU —
        <br>
        DO NOT OPEN
        <br>
        UNTIL YOU KNOW MY NAME
      </div>

      You examine the purple ribbon.

      <br><br>

      Tiny stitched letters appear:

      <div class="code">
        E L A R A
      </div>
    `,

    question: `
      What is the missing girl's name?
    `,

    answers: ["elara"],

    hint:
      "Read the stitched letters.",

    success:
      "ELARA. 🎀 The photographs begin moving!",

    item:
      "🎀 Elara's name"
  },

  {
    story: `
      You open the wooden box.

      <br><br>

      Inside is a mirror. 🪞

      <br><br>

      In its reflection you see:

      <br><br>

      yourself,
      Agent Banana,
      Mr Nibbles...

      <br><br>

      and Elara standing beside you.

      <br><br>

      She whispers:

      <div class="code">
        FINALLY.
        <br>
        YOU CAN SEE ME.
      </div>

      Suddenly a door appears.

      <br><br>

      Written across it:

      <div class="code">
        ROOM 13
      </div>
    `,

    question: `
      You listen at the door.

      <br><br>

      A man inside says:

      <br><br>

      "Pihu must never discover
      what happened to Elara."

      <br><br>

      Elara whispers:

      <br><br>

      "Look at the 1986 photograph."

      <br><br>

      What should you investigate next?
    `,

    answers: [
      "photograph",
      "the photograph",
      "1986 photograph"
    ],

    hint:
      "Elara told you directly.",

    success:
      "Good choice. Something is hidden in the background... 🔎",

    item:
      "🕵🏽‍♀️ Room 13 evidence"
  },

  {
    story: `
      You study the 1986 photograph.

      <br><br>

      Behind the children,
      someone is standing in an upstairs window.

      <br><br>

      An adult man.

      <br><br>

      Around his neck is a silver necklace
      shaped like an eye. 👁️

      <br><br>

      You check older photographs.

      <br><br>

      1950.

      <br>
      Same man.

      <br><br>

      1922.

      <br>
      Same man.

      <br><br>

      1891.

      <br>
      Same man.

      <br><br>

      <b>He has not aged.</b> 😨
    `,

    question: `
      What object is the mysterious man
      holding in the photograph?
    `,

    answers: [
      "camera",
      "a camera"
    ],

    hint:
      "It is the object used to take photographs.",

    success:
      "A camera. And Elara points at it in terror. 📷",

    item:
      "📷 Mysterious camera"
  }

];

const storyBox =
  document.getElementById("storyBox");

const questionBox =
  document.getElementById("questionBox");

const answerInput =
  document.getElementById("answerInput");

const message =
  document.getElementById("message");

const scoreEl =
  document.getElementById("score");

const livesEl =
  document.getElementById("lives");

const clueNumberEl =
  document.getElementById("clueNumber");

const inventoryItems =
  document.getElementById("inventoryItems");

const submitBtn =
  document.getElementById("submitBtn");

const hintBtn =
  document.getElementById("hintBtn");

const restartBtn =
  document.getElementById("restartBtn");


function normalize(text) {

  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

}


function updateStats() {

  scoreEl.textContent =
    score;

  livesEl.textContent =
    lives;

  clueNumberEl.textContent =
    current + 1;

  if (inventory.length === 0) {

    inventoryItems.textContent =
      "Empty";

  } else {

    inventoryItems.innerHTML =
      inventory.join("<br>");

  }

}


function renderClue() {

  updateStats();

  if (current >= clues.length) {

    storyBox.innerHTML = `
      🎉 <b>CHAPTER COMPLETE!</b>

      <br><br>

      You have solved all the clues
      currently built into the game.

      <div class="banana">
        🐒 Agent Banana:
        "More mystery please."
      </div>
    `;

    questionBox.innerHTML = `
      Final score:
      <b>${score}</b>
    `;

    answerInput.style.display =
      "none";

    submitBtn.style.display =
      "none";

    hintBtn.style.display =
      "none";

    return;

  }

  const clue =
    clues[current];

  storyBox.innerHTML =
    clue.story;

  questionBox.innerHTML =
    clue.question;

  answerInput.value =
    "";

  message.textContent =
    "";

  answerInput.style.display =
    "block";

  submitBtn.style.display =
    "inline-block";

  hintBtn.style.display =
    "inline-block";

}


function checkAnswer() {

  const clue =
    clues[current];

  const userAnswer =
    normalize(answerInput.value);

  const correct =
    clue.answers.some(
      answer =>
        normalize(answer) === userAnswer
    );

  if (correct) {

    score += 100;

    if (
      clue.item &&
      !inventory.includes(clue.item)
    ) {

      inventory.push(
        clue.item
      );

    }

    updateStats();

    message.textContent =
      "✅ " + clue.success;

    submitBtn.disabled =
      true;

    hintBtn.disabled =
      true;

    setTimeout(() => {

      current++;

      submitBtn.disabled =
        false;

      hintBtn.disabled =
        false;

      renderClue();

    }, 900);

  } else {

    lives--;

    updateStats();

    if (lives <= 0) {

      message.innerHTML = `
        💥 Case failed!

        <br><br>

        Press Restart to try again.
      `;

      submitBtn.disabled =
        true;

      hintBtn.disabled =
        true;

    } else {

      message.textContent =
        "❌ Not quite. Try again, Detective Pihu.";

    }

  }

}


function showHint() {

  const clue =
    clues[current];

  if (score >= 20) {

    score -= 20;

  }

  updateStats();

  message.textContent =
    "💡 " + clue.hint;

}


function restartGame() {

  score = 0;
  lives = 3;
  current = 0;
  inventory = [];

  answerInput.style.display =
    "block";

  submitBtn.style.display =
    "inline-block";

  hintBtn.style.display =
    "inline-block";

  submitBtn.disabled =
    false;

  hintBtn.disabled =
    false;

  renderClue();

}


submitBtn.addEventListener(
  "click",
  checkAnswer
);

hintBtn.addEventListener(
  "click",
  showHint
);

restartBtn.addEventListener(
  "click",
  restartGame
);

answerInput.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {

      checkAnswer();

    }

  }
);

renderClue();