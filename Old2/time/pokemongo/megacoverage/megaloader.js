var num_toggled = 0;
var current_toggled = new Set([]);
var toggled_types = [3, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 2, 2, 3, 1, 5, 3, 1]
var all_types = ["Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"]
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
        // 
        // update variables
        current_toggled.add(curr_pokes[i]);
        num_toggled += 1;
    }
}
function toggleButton(givenCreature, draw_graphs = true) {
    curr_id = givenCreature.id;
    // disable the pokemon
    if (givenCreature.className == 'toggleON') {
        givenCreature.className = 'toggleOFF';
        num_toggled -= 1;
        current_toggled.delete(curr_id);
        curr_types = mega_data[givenCreature.id]['types_index']
        for (i = 0; i < curr_types.length; i++) {
            toggled_types[curr_types[i]] -= 1
        }
    }
    // Re enable the pokemon
    else {
        givenCreature.className = 'toggleON';
        num_toggled += 1;
        current_toggled.add(curr_id);
        curr_types = mega_data[givenCreature.id]['types_index']
        for (i = 0; i < curr_types.length; i++) {
            toggled_types[curr_types[i]] += 1
        }
    }
    toggle_graph();
    console.log(toggled_types)
    // console.log(current_toggled)

}
function toggle_graph(){
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked bar chart'
        },
        xAxis: {
            categories: all_types
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Current Type Dist'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Types',
            data: toggled_types
        }]
    });
}
window.addEventListener('load', function () {
    load_images('current');
    toggle_graph();
})

