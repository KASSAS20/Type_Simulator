const container = document.querySelector('.container');
const list_button =  [
    "Esc", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=", "Back",
    "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\",
    "Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "Enter",
    "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"
];

const list_char = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\",
    "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/",
    "A", "S", "D", "F", "G", "H", "J", "K", "L"]

const smugl = ["2", "W", "S", "X","9","O","L","."];
const orangered= ["3", "E", "D", "C","8","I","K",","];
const orange= ["4", "R", "F", "V","7","U","J","M"];
const low_green= ["5", "T", "G", "B","6","Y","H","N"];


function create_button(list_button){
    for (const key in list_button) {
        let button = document.createElement("button");
        button.textContent = list_button[key];
        if (key >=0 && key <=12){
            button.classList = 'num';
        } else if (key == 13 || key == 14){
            button.classList = 'spec_1';
        } else if ((key >= 15 && key<= 27) || (key >= 29 && key <= 39) || (key >= 42 && key <= 51)){
            button.classList = 'char';
        } else if (key == 28 || key == 40){
            button.classList = 'spec_2';
        } else {
            button.classList = 'shift';
        }

        if (smugl.includes(list_button[key])){
            button.setAttribute('id', 'smugl');
        } else if (orangered.includes(list_button[key])){
            button.setAttribute('id', 'orangered');
        } else if (orange.includes(list_button[key])){
            button.setAttribute('id', 'orange');
        } else if (low_green.includes(list_button[key])){
            button.setAttribute('id', 'low-green');
        } else{
            button.setAttribute('id', 'pink');

        }
        button.setAttribute('name', list_button[key]);
        container.appendChild(button);
    }
}


function randChar(){
    let randomIndex = Math.floor(Math.random() * list_char.length);
    let randomValue = list_char[randomIndex];
    return randomValue;
}


function dinamic(name = randChar()){
    const but = document.getElementsByName(name)[0];
    but.classList.toggle('scale-up');


    function clicked(){
            but.classList.remove('scale-up')
            but.removeEventListener('keydown', key_click)
            but.removeEventListener('click', clicked)
            dinamic(randChar())
        }
        
    function key_click(event){
        if (event.key .toUpperCase() == name){
            but.click()
        }
     }
    document.addEventListener('keydown', key_click)
    but.addEventListener("click", clicked)
    }


create_button(list_button);
dinamic();
