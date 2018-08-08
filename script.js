$(function(){

    var speed=2;

    var circleX=550;
    var circleY=500;

    var groundX1=0;
    var groundY1=0;
    var groundX2=1100;
    var groundY2=750;

    var direction=[+1,-1];
    var directionX=direction[Math.floor(Math.random() * 2)];//index 0 or 1
    var directionY=direction[Math.floor(Math.random() * 2)];//index 0 or 1
    console.log(directionX);
    console.log(directionY);



    //console.log(directionX);
    //console.log(directionY);

    var svg = Pablo('#ground').svg({ //create svg with height and width
        width: 1100,
        height: 750
    });

    var ball=svg.circle({
        cx: circleX,
        cy: circleY,
        r: 10,
        fill:  '#060'
    });

    setInterval(function(){

      ball.attr({cx:circleX,cy:circleY});// draw the ball with cx and cy

      circleX=circleX+directionX;
      circleY=circleY+directionY;



      if(circleX ==groundX1+10||circleX == groundX2-10){//the ball hit the wall x
        directionX=directionX*-1;//change direction
      }
      if(circleY == groundY1+10||circleY == groundY2-10){//the ball hit the wall y
        directionY=directionY*-1;//change direction
      }


    },speed);


});
