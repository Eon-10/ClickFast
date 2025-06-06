  const btn = document.getElementById('btn');
  const counterDisplay = document.getElementById('counter');
  const timerDisplay = document.getElementById('timer');

  let count = 0;
  let timeLeft = 5; // secondes
  let timerActive = true;

  // Fonction pour mettre à jour le chrono
  function countdown() {
    if (timeLeft > 0) {
      timeLeft--;
      timerDisplay.textContent = `Temps restant : ${timeLeft} s`;
    } else {
      timerActive = false;
      timerDisplay.textContent = "Temps écoulé !";
      btn.disabled = true; // désactive le bouton
      clearInterval(intervalId);
    }
  }

  // Démarrer le chrono au chargement
  const intervalId = setInterval(countdown, 1000);

  btn.addEventListener('click', () => {
    if (timerActive) {
      count++;
      counterDisplay.textContent = count;
    }
  });