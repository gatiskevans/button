var add = document.getElementById("add");
var number = document.getElementById("number");
var count = 0;

add.onclick = function() {
    count++;
    number.innerHTML = count;
};

add.onmouseover = function() {
    add.innerHTML = "NEBUUS!!! :))"
}

add.onmouseout = function() {
    add.innerHTML = "Add"
}

document.getElementById("add").style.transitionDuration = "1s";