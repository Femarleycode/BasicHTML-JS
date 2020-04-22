const colours = ['red', 'green', 'blue', 'orange', 'lime','olive', 'black', 'yellow'];

let i = 0;

    function buildP(placeholder, number){
        do {
            let newPTag = document.createElement("p");
            let newTextNode = document.createTextNode("This is my new repeated text and you are going to like it.");
            // magic colour 
            newPTag.style.color = colours[parseInt(Math.random() * colours.length)];
            newPTag.appendChild(newTextNode);
            placeholder.appendChild(newPTag);
            i++;
        } while(i < number);
    }

let foundElement = document.querySelector("#placeholder");
buildP(foundElement, 10);

