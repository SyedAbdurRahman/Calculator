const display = document.getElementById("display");

function appendToDisplay(input){
    if(input=='π')
    {
        display.value += "3.14";
    }
    else{
        display.value += input;
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}

function deleteDisplay(){
    display.value = display.value.toString().slice(0,-1);

}