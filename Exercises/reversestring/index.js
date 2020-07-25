// ---Directions
// Given a String, return a new string with the reversed 
// order of characters
// --- Examples
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

// Solution #1 
function reverse(str) {
    //Converting the String "str" to an Array
    const arr = str.split('');
    //Using the reverse method to reverse the array
    arr.reverse();
    //Converting my array to String and returning it
    return arr.join('');

    //Putting all in one line
    //return str.slipt('').reverse.join('');
}

//Solution #2
function reverse(str) {
    //creating and auxiliar variable
    let reversed = '';

    //New Sintaxe to for loop.
    //iterating through each character in str
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

//Solution #3
function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');

    // Puting all in one line:
    // return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
