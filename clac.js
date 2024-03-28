const display=document.getElementById('display_digit');

function add_to_display(input){
    display.value = display.value + input;
}
function clearing_display(){
    display.value = '';
}
function Calculated_total(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value='Error'
    }
}
function digit_remover(){
     display.value = display.value.substring(0,display.value.length - 1 );
}
    
