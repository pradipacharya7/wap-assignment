
window.onload=function()
{
 var text = '';
 var speed="250";
// var optState;
// var startStopState;
function optionClick()
{
  
    text=ANIMATIONS[this.value]; //here this.value is option value from user 
    document.getElementById("displayText").value=text;

}
function changeSpeed()
{
 if(document.getElementById("turbo").checked)
    {
       var delay=50;
    }
    else
    {
        delay=250;
    }
    return delay;
}
function doAnimation(speed)
{
var splittedArray=text.split("=====\n");
var cnt=0;
// if(document.getElementById("turbo").checked){
interval=setInterval(function(){
    if(cnt>=splittedArray.length){
        cnt = 0;
    }
    document.getElementById("displayText").value=splittedArray[cnt];
    cnt++;
 
},speed)  
}

function startClick(){
speed=changeSpeed();
doAnimation(speed);
document.getElementById("animation").disabled=true;
document.getElementById("start").disabled=true;
document.getElementById("stop").disabled=false;

}
// function isTurboChecked()
// {
//     return document.getElementById("turbo").checked;
// }

function stopClick()
{
    clearInterval(interval);
    document.getElementById("displayText").value=text;
    document.getElementById("animation").disabled=false;
    document.getElementById("start").disabled=false;
    document.getElementById("stop").disabled=true;
}

function changeFont()
{

 text=document.getElementById("displayText").style.fontSize=this.value;   

}

function speedControl()
{
    delay=changeSpeed();
  if(document.getElementById("turbo").checked==true)
  { 
    clearInterval(interval);
    doAnimation(delay);
  } 
  else 
  {
    clearInterval(interval);
    doAnimation(delay);
  }
  
    
}

document.getElementById("start").onclick=startClick;
document.getElementById("stop").onclick=stopClick;
document.getElementById("animation").onchange=optionClick;
document.getElementById("font").onchange=changeFont;
document.getElementById("turbo").onchange=speedControl;

}




// function animation()
// {
//     var startBtn=document.getElementById("start");

//     var stopBtn=document.getElementById("stop");

    
//     startBtn.onclick=function()
//     {
//         let animationSel=document.getElementById("animation").value;
//         if(animationSel=="blank")
//         {
//           document.getElementById("displayText").innerHTML = "This is Blank";
//       }
//       else if(animationSel=="exercise")
//       {
//         document.getElementById("displayText").innerHTML =EXERCISE;
//         var splitedExercise=EXERCISE.split( "=====\n");

//         var first = false;
//         var startAnimation=setInterval(function(){
//             if(first == false){
//                 moveFunction(splitedExercise[0]);
//                 first = true;
//             }else{
//                 moveFunction(splitedExercise[1]);
//                 first = false;
//             }
//         },2000);

//     }   
//     else if(animationSel=="juggler")
//     {
//         // alert('jjjk');
//         document.getElementById("displayText").innerHTML =JUGGLER;
//         var splitedJuggler=JUGGLER.split( "=====\n");
//         console.log(splitedJuggler);
//         var i = 0;
//         var startAnimation =setInterval(function(){

//             if(i==splitedJuggler.length){
//                     i=0;
//             }
//             moveFunction(splitedJuggler[i]);
//             i++;


//         },2000);

//     }
//     stopBtn.onclick=function() {
//         clearInterval(startAnimation);
//     }
// }

// }

// function moveFunction(sp) 
// {
//     document.getElementById("displayText").innerHTML =sp;

// }


// window.onload=animation;
