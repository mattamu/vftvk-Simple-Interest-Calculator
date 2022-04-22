function compute()
{  
var principal = document.getElementById("principal").value;
    var n = Number(principal)
    if (n<=0) {
    	alert("Enter a positive number");
		principal.focus();
		return false;
    }
var rate = document.getElementById("rate").value; 
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
var result = document.getElementById("result");
result.innerHTML= 'If you deposit ' + (principal) + '<br><br> at an interest rate of ' + (rate) +  '<p>You will receive an amount of <span class="htl">' + (interest) + ',</span></p>'+ 'in the year ' + (year);
// htl for highlight
}
// function for rate
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}      