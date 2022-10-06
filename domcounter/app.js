

let title = document.getElementById("title");

let button = document.getElementById("btn");
let button2 = document.getElementById("btn2");

let count = 0;

function clicker(){
    count+= 1;
    
    title.innerText = count + " keer geklikt";
    document.body.style.backgroundColor = "blue";
    button.style.background = "red";

}


function clicker2(){
    count-= 1;
  title.innerText = count + " keer geklikt"
    document.body.style.backgroundColor = "red";
    button2.style.background = "blue";
}


