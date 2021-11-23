var add = document.getElementById("add");
var number = document.getElementById("number");
var count = 0;

add.onclick = function() {
    count++;
    number.innerHTML = count;
};