window.onload = function()
{
    var sentence = "have a great day.";
    
    function capWord(str)
    {
       return str.charAt(0).toUpperCase() + str.slice(1);
        
     }           
    alert(capWord(sentence));
}