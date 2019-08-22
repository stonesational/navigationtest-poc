({
    myAction : function(component, event, helper) {
        
        let navService = component.find("navService");
        
        let pageReference = {    
            "type": "standard__webPage",
            "attributes": {
                "url": "http://www.wellsfargo.com"
            }
        }
        navService.navigate(pageReference);
    }
})
