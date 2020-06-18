const array = [1, 2, 's', 'b', 's', 'iws'];

// function findElement
function findElement(element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element)
            return `Index of the found element is ${i}`;
        else
            continue;
    }
    return `Element not found`;
}

console.log(findElement('iws'));