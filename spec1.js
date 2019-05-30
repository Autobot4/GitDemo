   describe('Test suite name: Protractor Baby Steps',function(){
	   
	    it('Test case name: Open Angular JS Website',function(){
	    	
	    	
	    	browser.waitForAngularEnabled(false);
	   	 //browser.get("https://angularjs.org"); //*/// This is Protractor
	    	browser.get("https://www.google.com/");
	    	//browser.get('http://juliemr.github.io/protractor-demo/');
	    	
	    	console.log("Sourabh");
	    	
	    	
	    	element(by.model("first")).sendKeys(50);
	    	element(by.model("second")).sendKeys(60);
	    	element(by.id("gobutton")).click();
	    	//element(by.css("h2[class='ng-binding']")).getText();//.then(function(text){
	    		
	    		//console.log(element(by.css("h2[class='ng-binding']")).getText());
	    		
	    		//})*/
	    	//expect();
	    	 
	    });
	   
   })
