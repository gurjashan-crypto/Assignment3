// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const buttonSubmit  = document.getElementById('submit-button');
const pageForContactUs = document.getElementById('contact-page');
buttonSubmit.addEventListener('click',afterSubmitClick);
function afterSubmitClick() {
    const text = document.createElement('p');
    text.textContent = "Thank you for your message!";
    text.style.fontSize = '24px';
    pageForContactUs.innerHTML = '';
    pageForContactUs.appendChild(text);
}

