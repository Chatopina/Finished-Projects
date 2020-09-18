function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {

    document.getElementById("output-value").innerText = num;

}

function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}



const Buttons1 = document.querySelectorAll(".options button");
let info
 
Buttons1.forEach(option =>{
  option.addEventListener("click", function(){
    var output = getOutput();
    var output = getOutput();
    if (output != NaN) { //if output is a number
        output = output + this.id;
        printOutput(output);
    }
});
})


Buttons1.forEach(option =>{
    option.addEventListener("click", function(){
     
        var output = getOutput();
        var history = getHistory();


        //if (output != "") {
        // output = output;
        ''
        history = history + output;

        if (this.id == "=") {
            var result = eval(history);
            printOutput(result);
            printHistory("");

        } else {
            history = history + this.id;
            printHistory(history);
            printOutput("");
        }
       
    })
  })