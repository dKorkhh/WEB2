
var clickCount = 0;
var inputField;
var idNumber = 1;

function addItem(name) {
    var newItem = document.createElement("div");
    newItem.id = idNumber.toString();
    var underLine = document.createElement("div");
    underLine.className = "input-underline";
    newItem.appendChild(underLine);
    
    var flexContainer = document.createElement("div");
    flexContainer.className = "flex-container";

    var flexContainerDiv = document.createElement("div");
    flexContainerDiv.className = "flex-container_div";

    var labelName = document.createElement("label");
    labelName.className = "cookies-text";
    labelName.id = "textInContainer" + idNumber.toString();
    labelName.innerText = name;
    
    flexContainerDiv.appendChild(labelName);

    var twoBtnCount = document.createElement("div");
    twoBtnCount.className = "twoBtn-count";

    var btnRed1 = document.createElement("div");
    btnRed1.className = "btn-red dissable";
    btnRed1.setAttribute("data-tooltip", "Зменшити");

    var numberInsideRed1 = document.createElement("div");
    numberInsideRed1.className = "numberInside-red";
    numberInsideRed1.innerText = "-";


    btnRed1.appendChild(numberInsideRed1);


    twoBtnCount.appendChild(btnRed1);


    var numberBox = document.createElement("span");
    numberBox.className = "numberBox colorGray";


    var number2 = document.createElement("span");
    number2.innerText = "1";

    numberBox.appendChild(number2);

    twoBtnCount.appendChild(numberBox);


    var btnGreen = document.createElement("div");
    btnGreen.className = "btn-red colorGreen";
    btnGreen.setAttribute("data-tooltip", "Збільшити");

    var numberInsideGreen = document.createElement("div");
    numberInsideGreen.className = "numberInside-red";
    numberInsideGreen.innerText = "+";

    inputField = document.createElement("input");
    inputField.className = "item-input input-txt-name active";
    inputField.id = "inputField" + idNumber.toString();
    inputField.type = "text";
    inputField.style.display = "none";
    flexContainerDiv.appendChild(inputField);

    
    labelName.addEventListener('click', function() {
        if (boughtLabel.innerText === "Куплено") {
            
            var input = document.getElementById("inputField" + newItem.id),
                item = document.getElementById("textInContainer" + newItem.id);
            input.style.display = "flex";
            item.style.display = "none";
            input.value = document.getElementById("textInContainer" + newItem.id).innerText;
            input.focus();
        }
    });


    inputField.addEventListener('blur', function() {
        var input = document.getElementById("inputField" + newItem.id),
            item = document.getElementById("textInContainer" + newItem.id);

        let check = true;
        for (var i = 1; i < idNumber; i++){
            if (document.getElementById("textInContainer" + i).innerText === input.value){
                alert("Товар з такою назвою вже існує");
                check = false;
                return;
            }
        }

        if (check == true)
            item.innerText = input.value;
        document.getElementById('textStatistics' + newItem.id).innerText = input.value;
        input.style.display = "none";
        item.style.display = "block";
    });

    btnGreen.appendChild(numberInsideGreen);
    twoBtnCount.appendChild(btnGreen);
    flexContainerDiv.appendChild(twoBtnCount);
    flexContainer.appendChild(flexContainerDiv);

    var flexDiv = document.createElement("div");
    flexDiv.style.display = "flex";
    flexDiv.style.alignItems = "center";

    var boughtButton = document.createElement("div");
    boughtButton.id = idNumber.toString();
    boughtButton.className = "bought-button";
    boughtButton.setAttribute("data-tooltip", "Куплено");

    var boughtLabel = document.createElement("label");
    boughtLabel.style.marginLeft = "20px";
    boughtLabel.style.marginRight = "20px";
    boughtLabel.innerText = "Куплено";

    boughtButton.appendChild(boughtLabel);

    flexDiv.appendChild(boughtButton);


    var btnDelete = document.createElement("button");
    btnDelete.className = "btn-delete";
    btnDelete.setAttribute("data-tooltip", "Видалити");
    btnDelete.innerText = "x";

    flexDiv.appendChild(btnDelete);
    flexContainer.appendChild(flexDiv);
    newItem.appendChild(flexContainer);
    
    
    document.getElementById("itemList").appendChild(newItem);
    

    btnDelete.addEventListener('click', function() {
        newItem.remove();
        var item = document.getElementById("btnStatistic" + (newItem.id)); 
        item.remove();
    });

    boughtButton.addEventListener('click', function(event) {    
        var item = document.getElementById("btnStatistic" + (newItem.id)); 

        if (boughtLabel.innerText === "Не куплено") {
            btnDelete.style.display = 'block';
            boughtLabel.textContent = "Куплено";
            btnRed1.style.visibility = 'visible';
            btnGreen.style.visibility = 'visible';
            labelName.style.textDecoration = 'none';

            addStatistics(newItem.id, "remainList", 
                document.getElementById('textInContainer' + newItem.id).innerText,
                false, 
                document.getElementById("number" + newItem.id).innerText);
        } 
        else {
            btnDelete.style.display = 'none';
            boughtLabel.textContent = "Не куплено";
            btnRed1.style.visibility = 'hidden';
            btnGreen.style.visibility = 'hidden';
            labelName.style.textDecoration = 'line-through';

            addStatistics(newItem.id, "containerBought", 
                document.getElementById('textInContainer' + newItem.id).innerText,
                true, 
                document.getElementById("number" + newItem.id).innerText);
        }

        item.remove();
    });

    btnGreen.addEventListener('click', function() {
        number2.innerText = parseInt(number2.innerText) + 1;
        btnRed1.className = "btn-red colorRed";
        
        document.getElementById('number' + newItem.id).innerText = number2.innerText;
    });

    btnRed1.addEventListener('click', function() {
        if (parseInt(number2.innerText) > 1) {
            number2.innerText = parseInt(number2.innerText) - 1;
        
            document.getElementById('number' + newItem.id).innerText = number2.innerText;
        }
        if (parseInt(number2.innerText) === 1){
            btnRed1.className = "btn-red dissable";
        }
    });
}

function addStatistics(index, list, text, isDecor, number) {
    var button = document.createElement('button');
    button.id = "btnStatistic" + index.toString();
    button.className = 'quantity-button';

    
    var label = document.createElement('label');
    label.id = 'textStatistics' + index.toString();
    label.className = 'text-in-button';
    label.innerText = text;

    var btnNumber = document.createElement('div');
    btnNumber.className = 'btn-number';

    //add id number
    var numberInside = document.createElement('div');
    numberInside.className = 'numberInside';
    numberInside.innerText = number;
    numberInside.id = 'number' + index.toString();

    if (isDecor === true){
        label.style.textDecoration = 'line-through';
        numberInside.style.textDecoration = 'line-through';
    }
    else {
        label.style.textDecoration = 'none';
        numberInside.style.textDecoration = 'none';
    }

    btnNumber.appendChild(numberInside);
    button.appendChild(label);
    button.appendChild(btnNumber);

    document.getElementById("inputField").value = "";
    document.getElementById("inputField").focus();

    document.getElementById(list).appendChild(button);
}

function addAllEl(){
    if (document.getElementById("inputField").value === "") {
        alert("Введіть назву товару");
        return;
    }

    for (var i = 1; i < idNumber; i++){
        if (document.getElementById("textInContainer" + i).innerText === document.getElementById("inputField").value){
            alert("Товар з такою назвою вже існує");
            return;
        }
    }

    addItem(document.getElementById("inputField").value);
    addStatistics(idNumber, "remainList", 
        document.getElementById('textInContainer' + idNumber).innerText, false, 1);
    idNumber++;
}
  
document.getElementById("inputField").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addAllEl();
    }
});

window.onload = function() {
    addItem('Item1');
    addStatistics(idNumber, "remainList", 
    document.getElementById('textInContainer' + idNumber).innerText, false, 1);
    idNumber++;

    addItem('Item2');
    addStatistics(idNumber, "remainList", 
    document.getElementById('textInContainer' + idNumber).innerText, false, 1);
    idNumber++;

    addItem('Item3');
    addStatistics(idNumber, "remainList", 
    document.getElementById('textInContainer' + idNumber).innerText, false, 1); 
    idNumber++;
};