const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const movimento = setInterval(() => {
    for (i = array.length - 1; i > 0; i--) {
        array[i] = array[i - 1];
    }
    array[0] = array[0] + 1;
    console.log(array);
}, 1000);
