let canvas;
let img;
let topText = "";
let bottomText = "";
let textColor;
let fontSize;
let fontFamily;

function setup() {
    canvas = createCanvas(640, 480);
    canvas.parent("canvasContainer");
    textSize(40);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    textFont("Arial");

    document.getElementById("imageUpload").addEventListener("change", function (event) {
        img = loadImage(URL.createObjectURL(event.target.files[0]));
    });

    textColor = document.getElementById("colorPicker");
    fontSize = document.getElementById("fontSize");
    fontFamily = document.getElementById("fontFamily");
    saveBtn = document.getElementById("saveMeme");

    saveBtn.addEventListener("click", function () {
        saveCanvas(canvas, "myMeme", "jpg");
    });
}

function draw() {
    background(255);
    if (img) {
        image(img, width / 2, height / 2, width, height);
    }

    fill(textColor.value);
    textSize(fontSize.value);
    textFont(fontFamily.value);

    text(topText, width / 2, 40);
    text(bottomText, width / 2, height - 40);
}

function keyPressed() {
    if (keyCode === ENTER) {
        topText = "";
        bottomText = "";
    } else if (keyCode === BACKSPACE) {
        topText = topText.slice(0, -1);
        bottomText = bottomText.slice(0, -1);
    } else {
        topText += key;
    }
}
