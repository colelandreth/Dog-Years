var humanAge, dogAge

function dogYears(){
    humanAge = document.getElementById("humanAge").value;
    if (humanAge === "" || humanAge === 0) {
        alert("Enter Your Age");
        return;
    }

    if (humanAge >= 1) {
        dogAge = 20 + (humanAge - 2) * 5;
        alert("You are " + dogAge + " years old as a dog!");
    }
};



document.getElementById("submit").onclick = function(){
    dogYears();
};
