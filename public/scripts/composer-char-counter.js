//Wraping all the code in a callback function to ensure Html has loaded 
$('document').ready(()=>{
//finding and saving text-area element to a variable
const myInput = $('#tweet-text');
//Finding and saving the output element to a variable
const counter = $('.counter');
//registering a call back 
myInput.on("input", function(){
    //parisng counter's string value to integer
  const intValue = parseInt(counter.text());
    counter.text(intValue - 1);
    if($(this).val().length > 140) {
        counter.css("color", "red");
    } 
});

})

