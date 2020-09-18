
const timeDisplay = document.querySelector(".time-display");

//Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;


timeSelect.forEach(option => {
    option.addEventListener("click", function() {
        fakeDuration = this.getAttribute("data-time");
       
        timeDisplay.textContent = //fakeDuration `${Math.floor(fakeDuration / 60)}:${Math.floor(
//  fakeDuration % 60
        //)}`;
  //});
});

const Buttons1 = document.querySelectorAll(".options button");
let info
 
Buttons1.forEach(option =>{
  option.addEventListener("click", function(){
   
       info = this.getAttribute("info")
        timeDisplay.textContent = info;
        if(info=="core1"){
alert("lol")
        }


  })
})




