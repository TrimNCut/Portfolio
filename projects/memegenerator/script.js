let imageurl = document.getElementById("image-url");
let firsttext = document.getElementById("text1");
let firsttextcolour = document.getElementById("colour1");
let secondtext = document.getElementById("text2");
let secondtextcolour = document.getElementById("colour2");
let generateBtn = document.getElementById("generate");
let inputImage = document.getElementById("image");
let resultImage = document.getElementById("result-image")
let abovetext = document.getElementById("abovetext");
let resultabovetext = document.getElementById("resultabovetext");
let belowtext = document.getElementById("belowtext");
let resultbelowtext = document.getElementById("resultbelowtext");

imageurl.onblur = () => {
    inputImage.style.backgroundImage = `url(${imageurl.value})`;
}

firsttext.onblur = () => {
    abovetext.innerText = firsttext.value;
}

secondtext.onblur = () => {
    belowtext.innerText = secondtext.value;
}

firsttextcolour.onblur = () => {
    abovetext.style.color = firsttextcolour.value;
}

secondtextcolour.onblur = () => {
    belowtext.style.color = secondtextcolour.value;
}

generateBtn.onclick = () => {
    resultImage.style.backgroundImage = `url(${imageurl.value})`;
    resultabovetext.innerText = firsttext.value;
    resultbelowtext.innerText = secondtext.value;
    resultabovetext.style.color = firsttextcolour.value;
    resultbelowtext.style.color = secondtextcolour.value;
    if (resultabovetext.innerText == "") {
        resultabovetext.innerText = "Label1";
        resultabovetext.style.opacity = 0;
    }
}