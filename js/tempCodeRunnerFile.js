textLetter("Salom"); // ssaalloomm

function textLetter(str) {
    let text3 = str.split("")
    for(let i = 0; i < text3.length; i+=2) {
        text3.splice(i,0,text3[i])
    }
    let result = text3.join("")
    return console.log(result);
}