$(function () {
  $(document).scroll(function () {
    var section = document.getElementById("sec");
    value = window.scrollY;
    section.style.clipPath = "circle(" + value + "px at center)";
  });
});

let cursor = document.getElementById("cursor");
window.onmousemove = function (e) {
  let x = e.clientX,
    y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};

function rangeSlider(value) {
  document.getElementById("rangeValue").innerHTML = value;
  document.getElementById("fillRangeValue").style.width = +value + "%";
}
