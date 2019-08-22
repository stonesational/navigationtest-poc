({
    doNavigate : function(component, event, helper) {
        var navService  = component.find("navigationService");

        let url = event.getParam('arguments').url;

        let pageReference = { 
            type: 'standard__webPage',
            attributes: {
                url: url
            }
        };
        
        navService.navigate(pageReference);

    }
})
