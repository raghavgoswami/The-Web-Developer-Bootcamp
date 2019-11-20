function Vehicle(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;

	Vehicle.prototype.turnOn = function(){
		this.isRunning = true;
	}

	Vehicle.prototype.turnOff = function(){
		this.isRunning = false;
	}
	Vehicle.prototype.beep = function(){
		if (this.isRunning === true){
			return "beep!";
		} 
	}
}

