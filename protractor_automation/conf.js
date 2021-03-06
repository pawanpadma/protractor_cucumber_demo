
exports.config = {  

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',  
    directConnect:true,  
    getPageTimeout: 60000,  
    allScriptsTimeout: 500000,  
    framework: 'custom',  
    SELENIUM_PROMISE_MANAGER: true,
    // path relative to the current config file  
    frameworkPath: require.resolve('protractor-cucumber-framework'),  
    capabilities: {  
      'browserName': 'firefox'  
    },  
      
    // Spec patterns are relative to this directory.  
    specs: [  
      'features/*.feature'  
    ],  
  
    cucumberOpts: {  
      require: 'steps/*.js',  
      //tags: false,
      format:'json:cucumber_report.json'  
        
    }  
  
};  