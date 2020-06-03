		window.onload=function(){

		var myMoodule=(function()
		{
		'use strict';
		var createBicyclePrototype=function(){
		return{
			speed:0,
			applyBrake:function(decrement) {this.speed-=decrement;},
			speedUp:function(increment){this.speed+=increment;}
		}

		};

		var createMountainBikeProtype=function(prototype){
			var prototype1=Object.create(prototype);
			
			prototype1.gear=1,
			prototype1.setGear=function(gear1)
			{
				this.gear=gear1;
			}
			return prototype1;
			
		};

		var start=function(){
			
			var bicyclePrototype=createBicyclePrototype();
			var mountainBikePrototype=createMountainBikeProtype(bicyclePrototype);
			console.log(bicyclePrototype.speed);
			console.log(bicyclePrototype.speed);
			bicyclePrototype.speedUp(10);
			console.log(mountainBikePrototype.speed);
			bicyclePrototype.applyBrake(5);
			console.log(bicyclePrototype.speed);
			console.log(mountainBikePrototype.speed);

	};
	start();
	})();
}