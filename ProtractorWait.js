describe("Sync", function() {

	it("Sync", function() {
		browser.waitForAngularEnabled(false);
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
		//browser.waitForAngularEnabled(false);
		
		browser.driver.manage().window().maximize();
		element(by.css("a[href*='loadAjax']")).click();
		
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id('loader'))),8000);
		
		element(by.id('results')).getText().then(function(text)
				{
			
			console.log(text);
			
				})
		
	})
})