const nameElement = document.getElementById("animated-name");
const nameText = "youssef ammar";
let index = 0;
let forward = true;

function typeDeleteEffect() {
  if (forward) {
    if (index < nameText.length) {
      nameElement.textContent += nameText.charAt(index);
      index++;
    } else {
      forward = false;
      setTimeout(typeDeleteEffect, 1000);
      return;
    }
  } else {
    if (index > 0) {
      nameElement.textContent = nameText.substring(0, index - 1);
      index--;
    } else {
      forward = true;
    }
  }
  setTimeout(typeDeleteEffect, 150);
}
typeDeleteEffect();


// ====== حركة الأشكال داخل البطاقة ======
const shapes = document.querySelectorAll(".animated-shapes .shape");

shapes.forEach(shape => {
  const speedX = Math.random() * 2 + 1; // سرعة عشوائية X
  const speedY = Math.random() * 2 + 1; // سرعة عشوائية Y
  let posX = Math.random() * 300;
  let posY = Math.random() * 200;
  let directionX = Math.random() > 0.5 ? 1 : -1;
  let directionY = Math.random() > 0.5 ? 1 : -1;

  function moveShape() {
    posX += speedX * directionX;
    posY += speedY * directionY;

    // انعكاس عند حدود البطاقة
    if (posX < 0 || posX > 350) directionX *= -1;
    if (posY < 0 || posY > 250) directionY *= -1;

    shape.style.transform = `translate(${posX}px, ${posY}px) rotate(${posX + posY}deg)`;
    requestAnimationFrame(moveShape);
  }
  moveShape();
});


// ====== إضافة فقاعات عشوائية للخلفية ======
const bg = document.querySelector(".background");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = Math.random() * window.innerWidth + "px";
  bubble.style.width = bubble.style.height = Math.random() * 10 + 5 + "px";
  bubble.style.animationDuration = 3 + Math.random() * 5 + "s";
  bg.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 8000); // إزالة الفقاعة بعد انتهاء الحركة
}

setInterval(createBubble, 200);


