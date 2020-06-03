		window.onload=function(){

		var myMoodule=(function()
		{
		// 'use strict';
		function BicyclePrototype(){
		this.speed=0;
		}
		BicyclePrototype.prototype.applyBrake=function(decrement){this.speed-=decrement;};
		BicyclePrototype.prototype.speedUp=function(increment){this.speed+=increment;};

		function MountainBikeProtype(){
			BicyclePrototype.call(this);
			this.gear=1;
		}
		MountainBikeProtype.prototype.setGear=function(gearval){this.gear=gearval;}

		MountainBikeProtype.prototype=Object.create(BicyclePrototype.prototype);

		var start=function(){
			
			var bicyclePrototype=new BicyclePrototype();
			var mountainBikePrototype=new MountainBikeProtype();

			console.log(bicyclePrototype.speed);
			console.log(mountainBikePrototype.speed);
			bicyclePrototype.speedUp(10);
			console.log(bicyclePrototype.speed);
			bicyclePrototype.applyBrake(5);
			console.log(bicyclePrototype.speed);
			console.log(mountainBikePrototype.speed);
			// mountainBikePrototype.setGear()

	};
	start();
	})();
}
