document.addEventListener('DOMContentLoaded', () => {
  const targetElement = document.querySelector('.hero .title');
  const textToType = 'CRML Games!';
  const typingSpeed = 200; // Скорость печати (мс между символами)

  let currentIndex = 0;

  const typeText = () => {
    if (currentIndex < textToType.length) {
      targetElement.textContent += textToType[currentIndex];
      currentIndex++;
      setTimeout(typeText, typingSpeed);
    }
  };

  typeText();
});
