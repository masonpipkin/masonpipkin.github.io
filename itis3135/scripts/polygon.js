var number;
do {
    number = prompt('Please enter a number (1-10)');
    number = Math.round(number);
    number = Math.abs(number);
}
while (!validateEntry(number))
getShape(number);

function getShape(input) {
    console.log(input)
    switch (input) {
        case 0:
            alert('notagon');
            break
        case 1:
            alert('henagon');
            break;
        case 2:
            alert('digon');
            break;
        case 3:
            alert('trigon');
            break;
        case 4:
            alert('tetragon');
            break;
        case 5:
            alert('pentagon');
            break;
        case 6:
            alert('hexagon');
            break;
        case 7:
            alert('heptagon');
            break;
        case 8:
            alert('octagon');
            break;
        case 9:
            alert('enneagon');
            break;
        case 10:
            alert('decagon');
            break;
    }
}

function validateEntry(entry) {
    if (entry >= 0 && entry <= 10) {
        return true;
    }
    return false;
}