let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
let screenValue=" ";
for(items of buttons){
    items.addEventListener("click",function(button){
        buttonText=button.target.innerText;
        console.log('button text',buttonText);
        if(buttonText=='X'){
            buttonText="*";
            screenValue +=buttonText;
            Screen.value =screenValue;
        }
    else if(buttonText=='C')
    {
        screenValue=" ";
        screen.value=screenValue;
    }
    else if(buttonText=='='){
        screen.value=eval(screenValue);
    }
    else{
        screenValue +=buttonText;
        screen.value=screenValue;
    }
    })
}