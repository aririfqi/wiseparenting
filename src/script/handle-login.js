import '../style/style.css';
import main from './script';
import { createLoginForm, createRegisterForm } from './template/create-template';

main();

const getSection = document.querySelectorAll('input[type=radio][name="section-login-register"]');
let sectionLoginOrRegister = document.querySelector('.login-or-register');

sectionLoginOrRegister.innerHTML += createLoginForm();

getSection.forEach((section) => section.addEventListener('change', () => {
  const sectionName = section.value;
   if (sectionName === 'login-section') {
    sectionLoginOrRegister.innerHTML = '';
    sectionLoginOrRegister.innerHTML += createLoginForm();
  }
   if (sectionName === 'register-section') {
    sectionLoginOrRegister.innerHTML = '';
    sectionLoginOrRegister.innerHTML += createRegisterForm();
  }
}))





