document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    document.body.appendChild(button);
    button.name = 'Add Square';

    let buttons = document.getElementsByName('Add Square');
    let numOfDiv = 0

    let randomColors = [
        "blue",
        "green",
        "grey",
        "orange",
        "pink",
        "lightblue",
        "brown"
    ];

    buttons[0].addEventListener("click", function() {
        let divElem = document.createElement('div');
        document.body.appendChild(divElem);
        document.body.style.cssText = "display: flex; flex-wrap: wrap;";
        divElem.style.cssText = "height:100px; width:100px; background-color: black; color: white; text-align: center;";
        divElem.className = 'theDiv';
        divElem.id = `${numOfDiv++}`;
        divElem.addEventListener('mouseenter', function() {
            let idText = document.createTextNode(divElem.id);
            divElem.appendChild(idText);
        });
        divElem.addEventListener('mouseleave', function() {
            divElem.innerHTML = '';
        });
        divElem.addEventListener('click', function() {
            divElem.style.backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];
        });
        divElem.addEventListener("dblclick", function() {
            if ((divElem.id % 2) === 0) {
                if (divElem.nextElementSibling !== null) {
                    divElem.nextElementSibling.remove();
                } else {
                    alert("You've killed them all! Make some more!")
                };
            } else if ((divElem.id % 2) !== 0) {
                if (divElem.previousElementSibling !== null) {
                    divElem.previousElementSibling.remove();
                } else {
                    alert("Well now you can't make anymore since you killed the button!")
                };
            };
        });
    });
});