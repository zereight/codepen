const randomNumber = (num) => Math.floor(Math.random() * num) + 1;
const sleep = (m) => new Promise((r) => setTimeout(r, m));

document.querySelectorAll(".star").forEach(($star) => {
  const size = randomNumber(7);
  $star.style.cssText = `
        width: ${size + 3}px;
        height: ${size + 3}px;
        animation-duration: ${randomNumber(30) + 15}s;
        animation-delay: ${randomNumber(40) - 40}s;
        top: ${randomNumber(101) - 1}vh;
    `;
});

const $mainText = document.querySelector(".main-text");

const printText = (text) => {
  let i = 0;
  let isPause = false;
  setInterval(async () => {
    if (isPause) return;
    $mainText.textContent += text.charAt(i);
    i++;
    if (i > text.length) {
      i = 0;
      isPause = true;
      await sleep(2000);
      isPause = false;
      $mainText.textContent = "";
    }
  }, 100);
};

printText("도비는(은) 미키 였습니다. - 체프");
