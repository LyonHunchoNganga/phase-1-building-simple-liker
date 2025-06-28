// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph');
  const modal = document.getElementById('modal');
  const modalMsg = document.getElementById('modal-message');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      if (heart.textContent === EMPTY_HEART) {
        mimicServerCall()
          .then(() => {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          })
          .catch(error => {
            modal.classList.remove('hidden');
            modalMsg.textContent = error;
            setTimeout(() => {
              modal.classList.add('hidden');
            }, 3000);
          });
      } else {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    });
  });
});

//------------------------------------------------------------------------------
// Ignore after this point. This function is provided for you.
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
} 
