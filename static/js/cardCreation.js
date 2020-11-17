class CardCreationFunction {
    constructor(functionCreate, functionId) {
        this.functionCreate = functionCreate;
        this.functionId = functionId;
    }

    get getFunctionCreate() {
        return this.functionCreate;
    }

    get getFunctionId() {
        return this.functionId;
    }
}

findFunctionById = (array, id) => {
    var selectedItem;
    array.forEach(function (item) {
        if (item.getFunctionId == id) {
            selectedItem = item;
        }
    });
    return selectedItem;
}

addCardContent = (card, content) => {
    var cardContent = document.createElement("p");

    var contentText = document.createTextNode(content);
    cardContent.appendChild(contentText);
    cardContent.classList.add("p");
    cardContent.classList.add("p--card_content");

    card.appendChild(cardContent);
}

addCardBar = (card, title) => {
    var titleText = document.createTextNode(title);

    var cardTitle = document.createElement("h2");
    var cardBar = document.createElement("div");

    cardTitle.appendChild(titleText);
    cardTitle.classList.add("h2");
    cardTitle.classList.add("h2--card_title");

    cardBar.classList.add("div");
    cardBar.classList.add("div--card_bar");

    cardBar.appendChild(cardTitle);
    card.appendChild(cardBar);
}

addMediumCardClass = (card) => {
    card.classList.add("div");
    card.classList.add("div--card");
    card.classList.add("div--card-medium");
}

addBigCardClass = (card) => {
    card.classList.add("div");
    card.classList.add("div--card");
    card.classList.add("div--card-big");
}

createMediumCardText = (element, title, content) => {
    var cardNode = document.createElement("div");

    addMediumCardClass(cardNode);
    addCardBar(cardNode, title);
    addCardContent(cardNode, content)

    element.appendChild(cardNode);
}

createBigCardText = (element, title, content) => {
    var cardNode = document.createElement("div");

    addBigCardClass(cardNode);
    addCardBar(cardNode, title);
    addCardContent(cardNode, content)

    element.appendChild(cardNode);
}

submitCardData = () => {
    var titleInput = document.getElementById("title");
    var contentTextArea = document.getElementById("content");
    var container = document.getElementById("main_container");

    var sizeSelectedRadio = document.querySelector("input[name='card_size']:checked").value;

    const createCardFunction = findFunctionById(cardFunctions, sizeSelectedRadio).getFunctionCreate;
    createCardFunction(container, titleInput.value, contentTextArea.value);

    window.scrollTo(0, document.body.scrollHeight);
}

var cardFunctions = [];

cardFunctions.push(new CardCreationFunction(createMediumCardText, "card_medium"));
cardFunctions.push(new CardCreationFunction(createBigCardText, "card_big"));
document.getElementById("submit_card").addEventListener("click", submitCardData);