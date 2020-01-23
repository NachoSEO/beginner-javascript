const buttons = document.querySelectorAll('.card');
const outerModal = document.querySelector('.modal-outer');
const innerModal = document.querySelector('.modal-inner');
const paragraph =  document.querySelector('p');
const image = document.createElement('img');
outerModal.prepend(image);

outerModal.addEventListener('click', hideModal, {capture: true});

buttons.forEach( button => {
    button.lastElementChild.addEventListener('click', showModal);
})

function showModal() {
    outerModal.classList.add('open');
    const srcImage = this.parentElement.firstElementChild.src;
    const text = this.parentElement.dataset.description;
    paragraph.textContent = text;
    image.src = srcImage;
}

function hideModal(event) {
    event.stopPropagation();
    outerModal.classList.remove('open');
}