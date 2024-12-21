document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.querySelectorAll(".btn");
    const displayValue = document.getElementById("data_display");
    const calc = document.getElementById("calc_btn");
    const clearLast = document.getElementById("clear_last");
    const clearAll = document.getElementById("clear_all")
    const error = document.getElementById("error");


    buttons.forEach(button =>{
        button.addEventListener("click", ()=>{
            if(displayValue.value == 0){
                displayValue.value = "";
            }
            const val = button.getAttribute("data-value");
            // console.log(val);
            if(val){
                displayValue.value += val;
            }
        });
        
    });

    calc.addEventListener("click", ()=>{
        if(displayValue.value == 0){
            alert("Please enter any value");
        }else{
            displayValue.value = eval(displayValue.value);
        }     
    })

    clearLast.addEventListener("click", ()=>{
        displayValue.value = displayValue.value.slice(0, -1);
        displayValue.value = "0";
    })

    clearAll.addEventListener("click", ()=>{
        displayValue.value = "0";
    })

    







})