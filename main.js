let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  //form is empty
  if (
    form.elements.name.value === '' &&
    form.elements.email.value === '' &&
    form.elements.message.value === ''
  ) {
    alert('Please enter information before submitting your form!');
  }
  //form has no email
  else if (form.elements.email.value === '') {
    alert('Your email is required for this form!');
  }
  //for has no message
  else if (form.elements.message.value === '') {
    alert('A message is required for this form!');
  }
  //form filled out
  else {
    //send it to email???
  }
}
