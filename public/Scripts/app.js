var res = document.getElementById("textArea");
res.value = "0";

function getNumber(num){
    if(res.value === "0") res.value = "";
    var result = document.getElementById("textArea");
    result.value += num;
}

function clearField(){
    var result = document.getElementById("textArea");
    result.value = "0";
}

function getResult(){
    var result = document.getElementById("textArea");
    result.value = eval(result.value);
}

function backspace(){
    var result = document.getElementById("textArea");
    var rr = result.value;
    result.value = rr.substring(0, rr.length-1);
    
}