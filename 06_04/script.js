/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let titleColor = "blue";
  // var color above and let color here, we are now working inside a local scope of just this function,
  // and inside this function we can now declare all new variables using let and they will only exist inside that funtion
  document.querySelector(".title").style.color = titleColor;
  console.log("inside:", titleColor)
}

headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
