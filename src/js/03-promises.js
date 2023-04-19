const form = document.querySelector('.form');
// // ====================================      натискаю сабміт ==============
form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let delayNumber = Number(delay.value);
  let stepNumber = Number(step.value);
  let amountNumber = Number(amount.value);

  for (let i = 1; i <= amountNumber; i++) {
    createPromise(i, delayNumber)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayNumber += stepNumber;
  }
  event.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
