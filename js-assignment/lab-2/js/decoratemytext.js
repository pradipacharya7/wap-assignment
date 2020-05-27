
function myFunction()
{
	var textAreaEle = document.getElementById('mytext');
	let fontSizeInPixel = window.getComputedStyle(textAreaEle,null).getPropertyValue('font-size');
	var fontSizeInPt = parseInt(parseFloat(fontSizeInPixel)*0.75);//px to pt
	var setTime=setInterval(function(){
	fontSizeInPt = fontSizeInPt+2;
	let myText=document.getElementById('mytext').style.fontSize= fontSizeInPt+"pt";
	if(fontSizeInPt==24)
		{
			clearInterval(setTime);
		}

},500);



}

function myFunction2()
{
	if(document.getElementById("bling").checked == true)
	{
		let myTest=document.getElementById('mytext').style.fontWeight="Bold";

		let myTestGreen=document.getElementById('mytext').style.color="green";
		let myTestGreenUnderline=document.getElementById('mytext').style.textDecoration="underline";
	}else{
		document.getElementById("mytext").style.fontWeight="normal";
		document.getElementById("mytext").style.textDecoration="none";
		document.getElementById('mytext').style.color="initial";
	} 


}
