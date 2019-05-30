describe("Protractor Javascript Reporting", function() {

	var Object = require("./PageObjectMechanismforJavasciptProtractor.js");
	var using = require('jasmine-data-provider');
	var dataObject = require("./data.js");
	beforeEach(function() { // setup Jasmine Method
		Object.getURL();
	});
	function SelectProduct(product) {

		element.all(by.tagName("app-card")).each(function(item) {

			item.element(by.css("h4 a")).getText().then(function(text) {
				if (text == product) {
					item.element(by.css("button")).click();
				}
			})

		})
	} 
	
	
	using(dataObject.DataDriven, function (data, description) {    //DataDriven testing by Jasmine Data Provider
		
		it("Executing test scripts" + description , function() {

			Object.name.sendKeys(data.MyFirstName); 
			Object.password.sendKeys(data.MyLastName);
			Object.checkBox.click();
			Object.EmailField.sendKeys(data.Enter_Email_ID);
			Object.Gender.click();
			Object.EmploymentStatus.click();
			Object.Submit.click();
			Object.ShopLink.click();
			SelectProduct("Nokia Edge");
			SelectProduct("iphone X");
			SelectProduct("Samsung Note 8");
			Object.checkoutCount.getText().then(function(ItemNumber) {
				expect(ItemNumber).toContain("3");
				console.log(ItemNumber);
			})
			// expect(element(by.css("div[class*='alert-success']")).getText()).toEqual("Success! 
			// The Form has been submitted successfully!.");
			/*element(by.css("div[class*='alert-success']")).getText().then(function(text){
				console.log(text);
				expect(text).toEqual("Success! The Form has been submitted successfully!.");
			})*/
		})
		
	});
	 

	
	afterEach(function() {  //Teardown Jasmine Method
	     console.log("Test is completed");
	  });

	
})