
'use strict';
var {Given, When, Then, BeforeAll, AfterAll, Before, After} = require('cucumber');  
const {defineSupportCode} = require('cucumber');
const { browser, element, By } = require('protractor');  
//defineSupportCode(function({Given,When,Then,setDefaultTimeout,BeforeAll, AfterAll}){
  //setDefaultTimeout(10*1000);
BeforeAll(function(){  
    //You can initialize any data base connection  
    console.log("Inside Before All method");  
    browser.waitForAngularEnabled(false);
    browser.get("https://github.com");
});  
AfterAll(function(){  
  //close of database connection  
  console.log("Inside After All method");  
});
  Given('user navigates to the angular app website', function () {
   browser.element(By.name('q')).sendKeys('selenium');
   browser.driver.findElement(By.xpath("//button[@type='submit']")).click();
  });


  When('user enters the Vaid username and password', function () {
   
  });


  Then('user should be successfully loggedin to the application', function () {
    //assert.lengthOf(foo, 5)
  });
//});
