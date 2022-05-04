var num_toggled = 0;
var current_toggled = new Set([]);

function load_images(type) {
    curr_pokes = mega_list[type]
    for (i = 0; i < curr_pokes.length; i++) {
        // creates the button to place the image into
        var newButton = document.createElement("button");
        newButton.className = 'toggleON';
        newButton.id = `${curr_pokes[i]}`
        newButton.setAttribute('onclick', "toggleButton(this);");

        // places the image in the button
        var innerImage = document.createElement("img");
        innerImage.className = "mega_img";
        innerImage.src = `images/${curr_pokes[i]}_mega.webp`
        newButton.appendChild(innerImage);

        // places the button in the right row
        document.getElementById(`imgs`).appendChild(newButton);

        // update variables
        current_toggled.add(curr_pokes[i]);
        num_toggled += 1;
    }
}
function toggleButton(givenCreature, draw_graphs = true) {
    curr_id = givenCreature.id;
    if (givenCreature.className == 'toggleON') {
        givenCreature.className = 'toggleOFF';
        num_toggled -= 1;
        current_toggled.delete(curr_id);
        
    }
    else {
        givenCreature.className = 'toggleON';
        num_toggled += 1;
        current_toggled.add(curr_id);
    }
    console.log(current_toggled)

}
window.addEventListener('load', function () {
    load_images('current')
})

