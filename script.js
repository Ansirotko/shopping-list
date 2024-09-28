const sendInput = document.querySelector('#input');
const newItem = document.querySelector('.items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const newElements = document.createElement('div');
        newElements.classList.add('element');
        newElements.textContent = sendInput.value;
        if (sendInput.value != '') {
            newItem.append(newElements);
        }
        sendInput.value = '';
        newElements.addEventListener('click', function() {
            newElements.classList.toggle('done');
        })
    }
})