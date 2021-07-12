const table = document.querySelector("#table");
const text = document.getElementById("inputtext");
let num1, num2, op;

table.addEventListener("click", (e) => {
  if (!e.target.classList.contains("num")) return;
  if (e.target.value === "+") {
    num1 = text.value;
    text.value = "";
    op = e.target.value;
  } else if (e.target.value === "-") {
    num1 = text.value;
    text.value = "";
    op = e.target.value;
  } else if (e.target.value === "*") {
    num1 = text.value;
    text.value = "";
    op = e.target.value;
  } else if (e.target.value === "/") {
    num1 = text.value;
    text.value = "";
    op = e.target.value;
  } else if (e.target.value === "C") {
    text.value = "";
  } else if (e.target.value === "=") {
    num2 = text.value;
    text.value = "";
    switch (op) {
      case "+":
        text.value = (parseFloat(num1) + parseFloat(num2)).toString();
        break;
      case "-":
        text.value = (parseFloat(num1) - parseFloat(num2)).toString();
        break;
      case "*":
        text.value = (parseFloat(num1) * parseFloat(num2)).toString();
        break;
      case "/":
        text.value = (parseFloat(num1) / parseFloat(num2)).toString();
        break;
      default:
        console.log("error");
    }
  } else {
    text.value = text.value + e.target.value;
    console.log(e.target.value);
  }
});
