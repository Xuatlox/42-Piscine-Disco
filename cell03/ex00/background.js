function change() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var rgb = `rgb(${x},${y},${z})`;
    document.body.style.backgroundColor = rgb;
}