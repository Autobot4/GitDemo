describe('Protractor Initial Steps', function() {

	function calculator(firstNumber, secondNumber, Operation) {
		element(by.model("first")).sendKeys(firstNumber);
		element(by.model("second")).sendKeys(secondNumber);

		element.all(by.tagName("option")).each(function(item) {

			item.getAttribute("value").then(function(text) {
				if (text == Operation) {
					item.click();
				}
			})

		})
		element(by.id("gobutton")).click();
	}
	it('Open Angular JS Website', function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
		calculator(4, 5, "ADDITION");
		calculator(4, 5, "MULTIPLICATION");
		element.all(by.repeater("result in memory")).each(
				function(arg) {

					arg.element(by.css("td:nth-child(3)")).getText().then(
							function(value) {
								console.log(value);

							})
				})

	})
})
