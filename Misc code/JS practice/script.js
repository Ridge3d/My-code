document.addEventListener("DOMContentLoaded", function() {
    let paragraph = document.createElement('p');
    let text = document.createTextNode('this can be whatever you want it to be');

    paragraph.style.color = "red";
    paragraph.style.textTransform = "upprcase";
    paragraph.className = "some-paragraph";

    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    let button = document.createElement('button');
    let btnText = document.createTextNode('click me');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        let h1 = document.createElement('h1');
        let h1Text = document.createTextNode("I've been clicked");
        h1.appendChild(h1Text);
        document.body.appendChild(h1);
       })
 })