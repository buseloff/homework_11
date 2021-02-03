"use strict";
/*  1.Сделать два инпута: в один вводить параметр(число), во втором показывать его квадрат. 
2.Дан элемент div с id=elem 
- Добавьте ему класс www. 
- Удалите у него класс www. 
- Проверьте наличие у него класса www. 
- Добавьте содержимое в элемент (текст). 
3.Реализуйте событие: по нажатию на элемент (см задание 2) пользователь получит 
сообщение о нажатии. 
 */
//1
function calculateSquare(event) {
  let userInputElement = document.getElementById("userInput");
  let userNumber = 0;
  try {
    userNumber = parseFloat(userInputElement.value);
    if (Number.isNaN(userNumber)) throw Error();
  } catch (error) {
    alert("Input must be a number!!!");
  }
  let result = +(userNumber * userNumber).toFixed(2);
  event.target.value = result;
}

let output = document.getElementById("resultData");
output.addEventListener("click", calculateSquare);

//2
let element = document.getElementById("element");
element.classList.add("www");
element.classList.remove("www");
if (element.classList.contains("wwww")) {
    console.log("Contains class www");
} else {
    console.log("Not contains class www");
}
element.innerHTML = "Element div and its text";
function alertOn() {
    alert('You clicked on element!');
}


//3
element.addEventListener("click", alertOn);