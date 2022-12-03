const thisForm = document.getElementById('contactForm');
thisForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(thisForm).entries()
  try {
      const response = await fetch('https://parseapi.back4app.com/classes/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','X-Parse-Application-Id':'rZLTgwg7f2PtjY31kxwRIpAxMkLzPbsvw9WOnuj6','X-Parse-REST-API-Key':'eL1sgPx7USNw9UeVaW6uzDnHH95hf6BAkEJG3ZeQ' },
      body: JSON.stringify(Object.fromEntries(formData))
    });

    document.getElementById("alert").innerHTML = "I get your message. Will contact you as soon as possible."
    thisForm.reset();
  } catch (error) {
    document.getElementById("alert").innerHTML = "Something Went Wrong !!!. Please Contact via Mobile or other social Handels."
  } 
});
