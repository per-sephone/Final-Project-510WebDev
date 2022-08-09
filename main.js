let form = document.querySelector('form');
let socialsLink = document.querySelectorAll('.link');
let nav = document.querySelector('nav');
let projectLink = document.querySelectorAll('.project-link');
let navLink = document.querySelectorAll('.nav-link');
let section4 = document.querySelector('.section4');
let color = document.querySelector('#color');

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
  //form filled out (name not required)
  else {
    //send it to email???
    var parameters = {
      from_name: form.elements.name.value,
      email_id: form.elements.email.value,
      message: form.elements.message.value,
    };
    emailjs.send('service_afc06c4', 'template_3c3mvbx', parameters).then(
      function (response) {
        console.log('success', response.status, response.text);
      },
      function (error) {
        console.log('failed', error);
      }
    );
    form.elements.name.value = '';
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
}

function handleClick(event) {
  //changes dark theme to light theme
  if (color.innerHTML === 'Light Theme') {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
    for (let i = 0; i < socialsLink.length; i++) {
      socialsLink[i].style.backgroundColor = 'white';
      socialsLink[i].style.color = 'black';
    }
    for (let i = 0; i < projectLink.length; i++) {
      projectLink[i].style.color = 'black';
    }
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.backgroundColor = 'rgb(223, 223, 223)';
      navLink[i].style.color = 'black';
    }
    section4.style.backgroundColor = 'rgb(223, 223, 223)';
    nav.style.backgroundColor = 'rgb(223, 223, 223)';
    color.innerHTML = 'Dark Theme';
    color.style.backgroundColor = 'black';
    color.style.color = 'white';
    //changes light theme to dark theme
  } else {
    document.body.style.background = '';
    document.body.style.color = '';
    for (let i = 0; i < socialsLink.length; i++) {
      socialsLink[i].style.backgroundColor = '';
      socialsLink[i].style.color = '';
    }
    for (let i = 0; i < projectLink.length; i++) {
      projectLink[i].style.backgroundColor = '';
      projectLink[i].style.color = '';
    }
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.backgroundColor = '';
      navLink[i].style.color = '';
    }
    section4.style.backgroundColor = '';
    nav.style.backgroundColor = '';
    color.innerHTML = 'Light Theme';
    color.style.backgroundColor = '';
    color.style.color = '';
  }
}
//form event listener
form.addEventListener('submit', handleSubmit);
//color theme button event listener
color.addEventListener('click', handleClick);
