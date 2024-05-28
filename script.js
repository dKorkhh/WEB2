function addItem() {
    var newItem = document.createElement("div");
    var underLine = document.createElement("div");
    underLine.className = "input-underline";
    newItem.appendChild(underLine);
    // Создаем главный div с классом "flex-container"
    var flexContainer = document.createElement("div");
    flexContainer.className = "flex-container";

    // Создаем div с классом "flex-container_div"
    var flexContainerDiv = document.createElement("div");
    flexContainerDiv.className = "flex-container_div";

    // Создаем label с классом "cookies-text" и id "textInContainer"
    var cookiesText = document.createElement("label");
    cookiesText.className = "cookies-text";
    cookiesText.id = "textInContainer";
    cookiesText.innerText = document.getElementById("inputField").value;

    // Добавляем label в "flex-container_div"
    flexContainerDiv.appendChild(cookiesText);

    // Создаем div с классом "twoBtn-count"
    var twoBtnCount = document.createElement("div");
    twoBtnCount.className = "twoBtn-count";

    // Создаем div с классами "btn-morph-red" и "colorRed"
    var btnMorphRed1 = document.createElement("div");
    btnMorphRed1.className = "btn-morph-red colorRed";
    btnMorphRed1.setAttribute("data-tooltip", "Зменшити");

    // Создаем div с классом "numberInside-red"
    var numberInsideRed1 = document.createElement("div");
    numberInsideRed1.className = "numberInside-red";
    numberInsideRed1.innerText = "-";

    // Добавляем "numberInside-red" в "btn-morph-red"
    btnMorphRed1.appendChild(numberInsideRed1);

    // Добавляем "btn-morph-red" в "twoBtn-count"
    twoBtnCount.appendChild(btnMorphRed1);

    // Создаем span с классом "numberBox colorGray"
    var numberBox = document.createElement("span");
    numberBox.className = "numberBox colorGray";

    // Создаем span с числом 2
    var number2 = document.createElement("span");
    number2.innerText = "0";

    // Добавляем span с числом в "numberBox"
    numberBox.appendChild(number2);

    // Добавляем "numberBox" в "twoBtn-count"
    twoBtnCount.appendChild(numberBox);

    // Создаем второй div с классами "btn-morph-red" и "colorGreen"
    var btnMorphRed2 = document.createElement("div");
    btnMorphRed2.className = "btn-morph-red colorGreen";
    btnMorphRed2.setAttribute("data-tooltip", "Збільшити");

    // Создаем второй div с классом "numberInside-red"
    var numberInsideRed2 = document.createElement("div");
    numberInsideRed2.className = "numberInside-red";
    numberInsideRed2.innerText = "+";

    // Добавляем второй "numberInside-red" во второй "btn-morph-red"
    btnMorphRed2.appendChild(numberInsideRed2);

    // Добавляем второй "btn-morph-red" в "twoBtn-count"
    twoBtnCount.appendChild(btnMorphRed2);

    // Добавляем "twoBtn-count" в "flex-container_div"
    flexContainerDiv.appendChild(twoBtnCount);

    // Добавляем "flex-container_div" в "flex-container"
    flexContainer.appendChild(flexContainerDiv);

    // Создаем div с inline стилями
    var flexDiv = document.createElement("div");
    flexDiv.style.display = "flex";
    flexDiv.style.alignItems = "center";

    // Создаем div с классом "bought-button"
    var boughtButton = document.createElement("div");
    boughtButton.className = "bought-button";
    boughtButton.setAttribute("data-tooltip", "Куплено");

    // Создаем label с inline стилями
    var boughtLabel = document.createElement("label");
    boughtLabel.style.marginLeft = "20px";
    boughtLabel.style.marginRight = "20px";
    boughtLabel.innerText = "Куплено";

    // Добавляем label в "bought-button"
    boughtButton.appendChild(boughtLabel);

    // Добавляем "bought-button" в div с inline стилями
    flexDiv.appendChild(boughtButton);

    // Создаем кнопку с классом "btn-delete"
    var btnDelete = document.createElement("button");
    btnDelete.className = "btn-delete";
    btnDelete.setAttribute("data-tooltip", "Видалити");
    btnDelete.innerText = "x";

    flexDiv.appendChild(btnDelete);
    flexContainer.appendChild(flexDiv);

    newItem.appendChild(flexContainer);
    
    // Добавляем li в список
    document.getElementById("itemList").appendChild(newItem);
    
    inputField.value = "";
    inputField.focus();
  }
    
  // Додаємо обробник подій для клавіші Enter
  document.getElementById("inputField").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      addItem();
    }
  });