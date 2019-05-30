function pageObject() {
	
	this.name = element(by.name("name"));
	this.password = element(by.id('exampleInputPassword1'));
	this.checkBox = element(by.id('exampleCheck1'));
	this.EmailField = element(by.css("input[name='email']"));
	this.Gender = element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female"));
	this.EmploymentStatus = element(by.id('inlineRadio1'));
	this.Submit = element(by.css("input[value='Submit']"));
	this.ShopLink = element(by.linkText("Shop"));
	this.checkoutCount = element(by.partialLinkText("Checkout"));
	
	this.getURL = function(){
		browser.get("https://qaclickacademy.github.io/protocommerce/");
	}
	
}
	module.exports = new pageObject();