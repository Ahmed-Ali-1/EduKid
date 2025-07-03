const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');

    // Close all
    buttons.forEach(btn => {
      btn.classList.remove('active');
      btn.classList.add('collapsed');
      btn.querySelector('.icon').textContent = '+';
      btn.parentElement.nextElementSibling.classList.remove('open');
    });

    // If not already active, open it
    if (!isActive) {
      button.classList.add('active');
      button.classList.remove('collapsed');
      button.querySelector('.icon').textContent = '−';
      button.parentElement.nextElementSibling.classList.add('open');
    }
  });
});
