function changeText() {
    const msg = document.getElementById("message");
    msg.textContent = "🎉 Text changed using JavaScript!";
    msg.style.color = "green";
    msg.style.fontWeight = "bold";
}
  function toggleBox() {
    const box = document.getElementById("box");
    if (box) {
      box.remove();
    } else {
      const newBox = document.createElement("div");
      newBox.id = "box";
      newBox.className = "box";
      newBox.textContent = "I'm back!";
      document.querySelector("main").appendChild(newBox);
    }
  }
  