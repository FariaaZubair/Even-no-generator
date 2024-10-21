function generateEven() {
    let inputValue = parseInt(document.getElementById('inputValue').value);
    let i = 0;
    let value = '';

    if (isNaN(inputValue)) {
        document.getElementById('result').innerHTML = 'Please enter a valid number.';
        return;
    }

    while (i <= inputValue) {
        if (i % 2 === 0) {
            value += i + ' ';
        }
        i++;
    }

    document.getElementById('result').innerHTML = value || 'No even numbers found.';
}
