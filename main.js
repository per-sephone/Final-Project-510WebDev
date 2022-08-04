let form = document.querySelector('form');
let socialsLink = document.querySelectorAll('.link');
let nav = document.querySelector('nav');
let projectLink = document.querySelectorAll('.project-link');
let navLink = document.querySelectorAll('.nav-link');
let section4 = document.querySelector('.section4');
let light = document.querySelector('#light');

form.addEventListener('submit', handleSubmit);
light.addEventListener('click', handleClick);

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

function handleClick(event) {
  if (light.innerHTML === 'Light Theme') {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
    for (let i = 0; i < socialsLink.length; i++) {
      socialsLink[i].style.backgroundColor = 'white';
      socialsLink[i].style.color = 'black';
    }
    for (let i = 0; i < projectLink.length; i++) {
      // projectLink[i].style.backgroundColor = 'rgb(223, 223, 223)';
      projectLink[i].style.color = 'black';
    }
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.backgroundColor = 'rgb(223, 223, 223)';
      navLink[i].style.color = 'black';
    }
    section4.style.backgroundColor = 'rgb(223, 223, 223)';
    nav.style.backgroundColor = 'rgb(223, 223, 223)';
    light.innerHTML = 'Dark Theme';
    light.style.backgroundColor = 'black';
    light.style.color = 'white';
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
    light.innerHTML = 'Light Theme';
    light.style.backgroundColor = '';
    light.style.color = '';
  }
}

// window.addEventListener('keyup', (event) => {
//   if (event.key == 'l') {
//     document.body.style.background = '';
//     document.body.style.color = '';
//     for (let i = 0; i < socialsLink.length; i++) {
//       socialsLink[i].style.backgroundColor = '';
//       socialsLink[i].style.color = '';
//     }
//     for (let i = 0; i < projectLink.length; i++) {
//       projectLink[i].style.backgroundColor = '';
//       projectLink[i].style.color = '';
//     }
//     for (let i = 0; i < navLink.length; i++) {
//       navLink[i].style.backgroundColor = '';
//       navLink[i].style.color = '';
//     }
//     section4.style.backgroundColor = '';
//     nav.style.backgroundColor = '';
//   }
// });
