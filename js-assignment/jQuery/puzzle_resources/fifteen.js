
init = function() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
        // store x and y for later
        div.x = x;
        div.y = y; 
    }        
};

var shuffle = function(points) {
var i, j, k;
  for (i = points.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    points[i] = points[j]
    points[j] = k
  }
  return points;
}

$(function(){
    "use strict";
    init();
    var emptySpace = {};
    var shuffeled_values = [];
    $('#shufflebutton').click(function(e){
        var shuffling_values = [];
        $('#puzzlearea>div').each(function(){
            shuffling_values.push({
                x:this.x,
                y:this.y,
            });

        })
        shuffeled_values = shuffle(shuffling_values);
        var i = 0;
        $('#puzzlearea>div').each(function(){
            $(this).css({
                left:shuffeled_values[i].x,
                top:shuffeled_values[i].y,
            });
            i++;
        })

    })
    var checkMovable = function(){
        //enter

        var left = $(this).css('left');
        var top = $(this).css('top');
        var skipLeft = 0;
        var skipRight = 0;
        var skipTop = 0;
        var skipButtom = 0;
        
        if($(this).css('left') == '0px'){
            //skip for left
            skipLeft = 1;
        }
        if($(this).css('left') == '300px'){
            //skip for right
            skipRight = 1;
        }
        if($(this).css('top') == '0px'){
            //skip for top
            skipTop = 1;
        }
        if($(this).css('top') == '300px'){
            //skip for buttom
            skipButtom = 1;
        }

        var leftOfCurrentElePos = (parseInt(left)-100);
        var rightOfCurrentElePos = (parseInt(left)+100);
        var topOfCurrentElePos = (parseInt(top)-100);
        var bottomOfCurrentElePos = (parseInt(top)+100);

        var topEleCordinates = {
            left:parseInt(left),
            top:topOfCurrentElePos
        };
        var rightEleCordinates = {
            left:rightOfCurrentElePos,
            top:parseInt(top)
        };
        var buttomEleCordinates = {
            left:parseInt(left),
            top:bottomOfCurrentElePos
        };
        var leftEleCordinates = {
            left:leftOfCurrentElePos,
            top:parseInt(top)
        };

        var topFound = 0;
        var rightFound = 0;
        var bottomFound = 0;
        var leftFound = 0;


        $('#puzzlearea>div').each(function(){
            var leftSec = $(this).css('left');
            var topSec = $(this).css('top');
            if(topEleCordinates.left === parseInt(leftSec) && topEleCordinates.top === parseInt(topSec)){
                topFound = 1;
            }
            if(rightEleCordinates.left === parseInt(leftSec) && rightEleCordinates.top === parseInt(topSec)){
                rightFound = 1;
            }
            if(buttomEleCordinates.left === parseInt(leftSec) && buttomEleCordinates.top === parseInt(topSec)){
                bottomFound = 1;
            }
            if(leftEleCordinates.left === parseInt(leftSec) && leftEleCordinates.top === parseInt(topSec)){
                leftFound = 1;
            }
        })
        var isMovable = false;
        if(topFound == 0 && skipTop == 0){
            isMovable = true;
            emptySpace = topEleCordinates;
        }
        if(rightFound == 0 && skipRight == 0){
            isMovable = true;
            emptySpace = rightEleCordinates;
        }
        if(bottomFound == 0 && skipButtom == 0){
            isMovable = true;
            emptySpace = buttomEleCordinates;
        }
        if(leftFound == 0 && skipLeft == 0){
            isMovable = true;
            emptySpace = leftEleCordinates;
        }
        if(isMovable){
            $(this).addClass('movablepiece');
        }
        console.log('emptySpace',emptySpace);
        // console.log('top',topFound);
        // console.log('right',rightFound);
        // console.log('bottom',bottomFound);
        // console.log('left',leftFound);
        return isMovable;

        
    };
    $('#puzzlearea>div').hover(checkMovable,function(){
        //leave
        $(this).removeClass('movablepiece');
        // console.log('left');

    });
    $('#puzzlearea>div').on('click',function(e){
        if($(this).hasClass('movablepiece')){
            $(this).css({
                left:emptySpace.left+'px',
                top:emptySpace.top+'px',
            })
            var matched = true;
            var i = 1;
            $('#puzzlearea>div').each(function(){
                if($(this).text() != i){
                    matched = false;
                }
            })
            if (matched == true) {
                alert("You won the game.");
            }
        }
        
    })

})
  // init = function() {
        
    //     var puzzleArea = document.getElementById('puzzlearea');
    //     var divs = puzzleArea.getElementsByTagName("div");
          
    //     // initialize each piece
    //     for (var i=0; i< divs.length; i++) {

    //         var div = divs[i];
            
    //         // calculate x and y for this piece
    //         var x = ((i % 4) * 100) ;
    //         var y = (Math.floor(i / 4) * 100) ;

    //         // set basic style and background
    //         div.className = "puzzlepiece";
    //         div.style.left = x + 'px';
    //         div.style.top = y + 'px';
    //         div.style.backgroundImage = 'url("background.jpg")';
    //         div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            
    //         // store x and y for later
    //         div.x = x;
    //         div.y = y; 
    //     }        
    // };
    //   var shuffle = function(arr) {
    //         var i, j, k;
    //         for (i = arr.length -1; i > 0; i--) {
    //         j = Math.floor(Math.random() * i)
    //         k = arr[i]
    //         arr[i] = arr[j]
    //         arr[j] = k
    //         }
    //         return arr;
    //     }

    // $(function()
    // {
    //  init();
    //  $('#shufflebutton').click(function(){
    //      var arr=[];
    //      $("#puzzlearea>div").each(function() {
    //       arr.push($(this).text()); 
    //     });

    //      console.log(shuffle(arr));

    // });
    // });

