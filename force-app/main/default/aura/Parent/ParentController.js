({
    doNavigate : function(component, event, helper) {
        var childComponent = component.find("childComponent");
        childComponent.navigate("https://www.theonion.com");
    }
})
