// Function to play the sound and add playing class
function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!audio) return; // Stop the function if no audio is associated with the key

    audio.currentTime = 0; // Rewind to the start to allow rapid key presses
    audio.play();

    key.classList.add('playing'); // Add the class to highlight the key
}

// Function to remove playing class after the transition
function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // Skip if it's not a transform event
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add event listener for keydown event to trigger sound
document.addEventListener('keydown', playSound);