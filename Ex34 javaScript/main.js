const addElement = document.querySelector('.items');

function addItemElements() {

    //create elements to the list
    const newItems = document.createElement('li');
    newItems.textContent = 'newItem'
    //console.log(newItems)

    //Display browser
    addElement.appendChild(newItems);
}

function removeItemElements() {
    if(addElement.lastChild) {
        addElement.removeChild(addElement.lastChild)
    } else {
        alert('Saaxiib waa lagu kala baxay')
    }
}