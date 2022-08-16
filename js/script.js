// 1-masala
reversName("Dadajonov Farhod");

function reversName(text) {
    let newArr = text.split(" ").reverse().join(" ");
    return console.log(newArr);
}


//2-masala
squareNumber([2,4,9,3,5]);

function squareNumber(numbers) {
    let arr = [];

    for(let element of numbers) {
        if (Math.sqrt(element) % 1 === 0) {
            arr.push(Math.sqrt(element));
        }
        else {
            arr.push(element*element);
        }
    }
    return console.log(arr );
}

// 3-masala

doubleLetter("Salom"); // ssaalloomm

function doubleLetter(text) {
    let text1 = text.split("")
    for(let i = 0; i < text1.length; i+=2) {
        text1.splice(i,0,text1[i])
    }
    let result = text1.join("")
    return console.log(result);;
}


