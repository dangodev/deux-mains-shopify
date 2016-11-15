/**
 * Stepper
 *
 * Increment / decrement button
 */

export default function () {
  const steppers = document.querySelectorAll('.form-quantity');

  const modifyValue = (parentEl, sum) => {
    const numberInput = parentEl.querySelector('.form-number');
    const value = parseInt(numberInput.value);
    const newValue = value + sum;
    if ((parseInt(numberInput.min) > newValue) || (parseInt(numberInput.max) < newValue)) {
      return false;
    }
    numberInput.value = newValue;
  };

  const minusHandler = (e) => {
    modifyValue(e.target.parentElement, -1);
    e.preventDefault();
  };

  const plusHandler = (e) => {
    modifyValue(e.target.parentElement, 1);
    e.preventDefault();
  };

  steppers.forEach((el) => {
    el.querySelector('.form-quantity-dec').addEventListener('click', minusHandler);
    el.querySelector('.form-quantity-inc').addEventListener('click', plusHandler);
  });
}
