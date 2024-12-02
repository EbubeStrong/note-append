import { computePosition } from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12/+esm";

const content = document.querySelector(".contents");
const noteBelow = document.querySelector(".note-below");
const noteAbove = document.querySelector(".note-above");
const noteRight = document.querySelector(".note-right");
const container = document.querySelector(".container");


// Position noteAbove above the content
computePosition(content, noteAbove, {
  placement: "top-start", // Position above the content
}).then(({ x, y }) => {
  // Adjust the top position manually if necessary
    const adjustedY = y + 2;
    // Adjust based on your need

  Object.assign(noteAbove.style, {
    // position: "absolute", 
    left: `${x}px`,
    top: `${adjustedY}px`,
  });
});

// Position noteBelow below the content
computePosition(content, noteBelow, {
  placement: "bottom-start",
}).then(({ x, y }) => {
  // Adjust the top position manually if necessary
  const adjustedY = y - 20; // Adjust based on your need

  Object.assign(noteBelow.style, {
    //   position: "absolute",
      // Ensure it's positioned correctly
    left: `${x}px`,
    top: `${adjustedY}px`,
  });
});

computePosition(container, noteRight, {
    placement: "right-start",
}).then(({ x, y }) => { 
    const adjustedX = x - 1080;
    const adjustedY = y + 1;
    Object.assign(noteRight.style, {
        right: `${adjustedX}px`,
        top: `${adjustedY}px`,
    });
})
// computePosition(container, noteRight, {
//     placement: "right-start",
// }).then(({ x, y }) => { 
//     // const adjustedX = x - 1;
//     const adjustedY = y - 20;
//     Object.assign(noteRight.style, {
//         left: `${x}px`,
//         top: `${adjustedY}px`,
//     });
// })