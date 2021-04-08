const OPT1 = 1.25;
const OPT2 = 1.5;
const OPT3 = 1.75;

const taskbarTag = "._1R3Un";
const velocities = [1, 1.25, 1.5, 1.75];

const interval = setInterval(() => {
  const header = document.querySelector(taskbarTag);
  if (header) {
    clearInterval(interval);
    header.appendChild(createSelects(velocities));
    manangeSelect(document.getElementById("mySelect"));
  }
}, 1000);

function manangeSelect (select) {
  const speedLoop = setInterval(function () {
    setSelectedSpeedLoop(select.value);
  }, 1000);
}

function manangeButton (button, velocity, listBt) {
    button.addEventListener("click", () => {
        if (buttonState == 0) {
          buttonState = 1;
          listBt.forEach(a => applyStyleTurnedOff(a));
          turnOnDoubleSpeed(button, velocity);
        } else {
          buttonState = 0;
          turnOffDoubleSpeed(button);
        }
      });
}

function createSelects(velocities) {
  const select = document.createElement("select");
  select.style.witdh = '60px';
  select.setAttribute("id", "mySelect");
  select.setAttribute("onChange", "verifyVelocity()");
  velocities.forEach(velocity => {
    const velocityToList = document.createElement("option");
    velocityToList.value = velocity;
    velocityToList.text = velocity;
    select.appendChild(velocityToList);
  });
  return select;
}

function verifyVelocity() {
  console.log(document.getElementById("mySelect").value);
  turnOnSelectedSpeed(document.getElementById("mySelect").value)
}

function turnOnSelectedSpeed(velocity) {
  setSelectedSpeedLoop(velocity);
}

function applyStyleTurnedOn(button) {
  button.style.backgroundColor = "lightgray";
  button.style.color = "#222222";
  button.style.border = "0.6px solid #999";
  button.style.borderRadius = "40%";
}

function setSelectedSpeedLoop(velocity) {
  const speedLoop = setInterval(function () {
    let audios = document.querySelectorAll("audio");
    audios.forEach((audio) => {
      audio.playbackRate = velocity;
    });
    clearInterval(speedLoop);
  }, 1000);
}

function applyBlur(element) {
    element.style.color = "transparent";
    element.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
}

function removeBlur(element) {
    element.style.mixBlendMode = "exclusion";
    element.style.color = "white";
    element.style.textShadow = null;
}

var possibleTextClasses = ['_1SjZ2','_3Dr46','_IeYBo','_3Dr46','_2pkLM','_1SjZ2'];
//TODO: INCLUDE BUTTON TO CHANGE HIDE IMAGES
//TODO: INCLUDE BUTTON TO CHANGE HIDE TEXTXS TOO

// $x("//img").forEach(a => a.src = "../assets/user.jpg");
