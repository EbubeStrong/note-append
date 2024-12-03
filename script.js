import { computePosition } from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12/+esm";

const content = document.querySelector(".contents");
const noteBelow = document.querySelector(".note-below");
const noteAbove = document.querySelector(".note-above");
const noteRight = document.querySelector(".note-right");
const container = document.querySelector(".container");


computePosition(content, noteAbove, {
  placement: "top-start", 
}).then(({ x, y }) => {
    const adjustedY = y + 2;

  Object.assign(noteAbove.style, {
    left: `${x}px`,
    top: `${adjustedY}px`,
  });
});



function updateNoteBelowPosition() {
  computePosition(content, noteBelow, {
    placement: "bottom-start",
  }).then(({ x, y }) => {
    const contentHeight = content.offsetHeight; 
    let adjustedY = y
     adjustedY =  contentHeight; 
    adjustedY -= 2; 

    Object.assign(noteBelow.style, {
      left: `${x}px`,
      top: `${adjustedY}px`,
    });
  });
}

// Call the function initially and on window resize
updateNoteBelowPosition();
window.addEventListener("resize", updateNoteBelowPosition);


function updateNoteRightPostion(){
  computePosition(container, noteRight, {
    placement: "right-start",
  }).then(({ x, y }) => {
    // const adjustedX = x - 1075;
    const contentWidth = content.offsetWidth;
    let adjustedX = x;
    adjustedX = contentWidth;
    adjustedX -= 5;

    const adjustedY = y + 1;
    Object.assign(noteRight.style, {
      left: `${adjustedX}px`,
      top: `${adjustedY}px`,
    });
  });
}
updateNoteRightPostion()
window.addEventListener("resize", updateNoteRightPostion)