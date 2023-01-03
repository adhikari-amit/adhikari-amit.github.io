document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
      emailjs.sendForm('service_fc9953k', 'template_l671poe', '#contact-form')
          .then(function (response) {
              console.log('SUCCESS!', response.status, response.text);
              document.getElementById("success").innerHTML = "I get your message. Will contact you as soon as possible."
              document.getElementById('contact-form').reset();
          }, function (error) {
             document.getElementById("alert").innerHTML = "Something Went Wrong !!!. Please Contact via Mobile or other social Handels."
              console.log('FAILED...', error);
          });

  });
