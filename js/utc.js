// Refer to UI elements
var button = document.getElementById('utc');

// Bind click event of the button with an event listener
button.addEventListener('click', function(){
var txtInput = document.getElementById('datetimepicker');
var text = txtInput.value;

if (text == "")
{alert('Enter date');}
else{
var now = new Date(text);
var targetdate = new Date(now.getUTCFullYear(), 
                          now.getUTCMonth(), 
                          now.getUTCDate(),  
                          now.getUTCHours()+5, //ta-da
                          now.getUTCMinutes()+30, 
                          now.getUTCSeconds()
                          );

targetdate_UTC = targetdate.toUTCString();
alert(targetdate_UTC);
}
})