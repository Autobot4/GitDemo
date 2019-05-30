function car() {
	this.color = "silver";
	this.engine = "BS6";
	this.brand = "TATA";

	this.getmodel = function() {

		console.log("Our first Javascript code");

	};
};


/*var a = new car(); 
	a.getmodel(); *///Accessing the method within same JS file

module.exports = new car();