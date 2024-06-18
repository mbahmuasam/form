const scriptURL = 'https://script.google.com/macros/s/AKfycbzSaBP0-3vGhTN9dih1L5ofmwOQJQWsiODQeUfkmwrXtVuGnaL37O7uHDz4ewF7rr0l/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})