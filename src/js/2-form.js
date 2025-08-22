let formData = {
   email: "",
   message: ""
};

const formChanges = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
  formChanges.elements.email.value = formData.email;
  formChanges.elements.message.value = formData.message;
}


formChanges.addEventListener('input', (event) => {
  if (event.target.name in formData) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

formChanges.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  formChanges.reset();
});
