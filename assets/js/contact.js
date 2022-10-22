const thisForm = document.getElementById('contactForm');
thisForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(thisForm).entries()
  try {
      const response = await fetch('https://contactme001.herokuapp.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData))
    });
    const result = await response.json();
    if (result.status == "success") {
    document.getElementById("alert").innerHTML = "I get your message. Will contact you as soon as possible."
    thisForm.reset();
  }
  } catch (error) {
    document.getElementById("alert").innerHTML = "Something Went Wrong !!!. Please Contact via Mobile or other social Handels."
  } 
});