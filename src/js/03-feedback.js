import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const feedbackMessageTextarea = form.querySelector('textarea');
const feedbackEmailInput = form.querySelector('input');

const FEEDBACK_FORM = 'feedback-form-state';

populateTextarea();

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleFormInput, 1000));

function handleFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)));
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}

function handleFormInput() {
  const formMessage = {
    email: feedbackEmailInput.value,
    message: feedbackMessageTextarea.value,
  };

  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formMessage));
}

function populateTextarea() {
  const savedFormMessage = localStorage.getItem(FEEDBACK_FORM);
  if (savedFormMessage) {
    const parsedSavedMessage = JSON.parse(savedFormMessage);
    feedbackEmailInput.value = parsedSavedMessage.email;
    feedbackMessageTextarea.value = parsedSavedMessage.message;
  }
}
