//Wraping all the code in a callback function to ensure Html has loaded 
$('document').ready(()=>{
//finding and saving text-area element to a variable
const myInput = $('#tweet-text');
//Finding and saving the output element to a variable
const counter = $('.counter');
const max = 140;
//registering a call back 
myInput.on("input", function(){
    //Calculating number of characters left
   let textLength = max-$(this).val().length;
  //Assigning the value to counter 
    counter.text(textLength);
    if($(this).val().length > 140) {
        counter.css("color", "red");
    } 
});

})

