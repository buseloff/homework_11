"use strict";
/*   Реализуйте форму валидации (username, password), которая проверяет 
корректность ввода данных условие проверки: username должен содержать от 6 до 20 символов 
и не содержать спецсимволов и пробелы, password от 8 до 20 символов 
и содержать обязательно 1 заглавную букву и 1 цифру. 
Условие вывода: если ввод корректный подсветить рамку ввода зелёным,
 при невалидном вводе –красным. См. прикрепленую ссылку на проект. 
 */
function validateData(event) {
  event.preventDefault();
  event.stopPropagation();
  let userFname = document.getElementsByName("userFName")[0];
  let userLname = document.getElementsByName("userLName")[0];
  let userEmail = document.getElementsByName("userEmail")[0];
  let userPassword = document.getElementsByName("userPass")[0];
  let userConfirmPassword = document.getElementsByName("userCPass")[0];
  let namePattern = /^[a-zA-Z0-9]{6,20}$/;
  let emailPattern = /^(\w+)@(\w+\.)(\w+)$/;
  let passwordPattern = /^(?=.*\d)(?=.*?[A-Z]).{8,20}$/;
  let wrongStyle = "4px solid red";
  let rightStyle = "4px solid green";

  if (!namePattern.test(userFname.value)) {
    userFname.style.border = wrongStyle;
  } else {
    userFname.style.border = rightStyle;
  }

  if (!namePattern.test(userLname.value)) {
    userLname.style.border = wrongStyle;
  } else {
    userLname.style.border = rightStyle;
  }

  if (!emailPattern.test(userEmail.value)) {
    userEmail.style.border = wrongStyle;
  } else {
    userEmail.style.border = rightStyle;
  }
  if (!passwordPattern.test(userPassword.value)) {
    userPassword.style.border = wrongStyle;
  } else {
    userPassword.style.border = rightStyle;
  }
  if (userConfirmPassword.value !== userPassword.value) {
    userConfirmPassword.style.border = wrongStyle;
  } else {
    userConfirmPassword.style.border = rightStyle;
  }
}

let submitUserData = document.getElementsByName("submitData")[0];
submitUserData.addEventListener("click", validateData);
submitUserData.addEventListener("submit", validateData);

