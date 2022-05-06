function changeSizeBySlider() {
    var slider = document.getElementById("slider");
    console.log(slider.value);
    document.body.style.fontSize = slider.value + "px";
}