const string = "Hello, I'm Dahlia!"

function reverseString(string) {
    const splitStringToArray = string.split("")
    const reverseArray = splitStringToArray.reverse()
    const joinArray = reverseArray.join("")

    return joinArray
}

console.log(reverseString(string))
