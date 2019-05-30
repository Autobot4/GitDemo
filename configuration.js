var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub', //direct connect(address of a running selenium server)
  specs: ['ImplementationOfPageObject.js'] ,
  
  
  //Capabilities to be passed to the webdriver instance
 /* capabilities: {
	  'browserName' : 'internet explorer'
  }*/
   onPrepare :function(){
	   
	   browser.driver.manage().window().maximize();
	   jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
		   
   },
   suites:
	   {
	   Smoke:['cal.js','ProtractorWait.js'],
	   Regression : 'ImplementationOfPageObject.js'
	   },
   
jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
   
  
  
}; 