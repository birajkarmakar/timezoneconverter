// Refer to UI elements
var button = document.getElementById('gmtpst');

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
                          now.getUTCHours()+4, //ta-da
                          now.getUTCMinutes(), 
                          now.getUTCSeconds()
                          );

targetdate_gmtpst = targetdate.toUTCString();
alert(targetdate_gmtpst);
}
})