var myButton = document.getElementById('button');

myButton.onclick = function(){

	var billAmount = document.getElementById('BillAmount').value ,
    	selected   = document.getElementById('selector').value ,
    	peopleNo   = document.getElementById('peopleNo').value;

	 var total = (billAmount * selected) / peopleNo;
	 console.log(total);
	 document.getElementById('result').innerHTML = "TIP AMOUNT"+"<br>"+"<sup>$</sup>"+total+"<br>"+"each";
	 document.getElementById("result").style.display = "block";
	

};

document.getElementById("result").style.display = "none";