import "./styles.css";

var item1 = "This is item 1";
var item2 = "This is item 2";
var item3 = "This is item 3";

const button1 = document.getElementById("but1");
button1.addEventListener("click", btClick1, false);

const button2 = document.getElementById("but2");
button2.addEventListener("click", btClick2, false);

const button3 = document.getElementById("but3");
button3.addEventListener("click", btClick3, false);

function btClick1() {
  document.getElementById("carea").innerHTML = item1;
  button1.classList.add("active");
  button2.classList.remove("active");
  button3.classList.remove("active");
}
function btClick2() {
  document.getElementById("carea").innerHTML = item2;
  button1.classList.remove("active");
  button2.classList.add("active");
  button3.classList.remove("active");
}
function btClick3() {
  document.getElementById("carea").innerHTML = item3;
  button1.classList.remove("active");
  button2.classList.remove("active");
  button3.classList.add("active");
}
