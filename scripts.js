function button1 () {
    var input1 = document.getElementById('input1');
    var temp = input1.value;
    if (temp < 15) {
      alert("a little cold but still happy");
    } else if (temp < 20) {
        alert ("the perfect and ideal weather")
    } else if (temp < 25) {
        alert ("slightly uncomfortable")
    } else if (temp < 35) {
        alert ("This is what I call oppressive weather")
    } else if (temp >= 35) {
        alert ("make peace with the life you lead")
    }
}

function button2 () {
    var input1 = document.getElementById('input1');
    input1.value = "";
    var rand = Math.random();
    if (rand < 0.25){
        alert ("I told you not to click that");
    } else if (rand < 0.5) {
        alert ("Why did you click that?");
    } else if (rand < 0.75) {
        alert ("stop clicking that");
    } else {
        alert ("learn to read");
    }
}