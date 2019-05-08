sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment){
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
		onShowHello: function(){
			
		},
		onOpenDialog: function(){
			var oView = this.getView();
			
			// create dialog lazily
			if(!this.byId("helloDialog")){
				// load asynchronous XMl fragment
				Fragment.load({
					id: oView.getId(),
					name: "sap/ui.demo.walkthrough.view.HelloDialog",
					controller: this
				}).then(function (oDialog){
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else{
				this.byId("helloDialog").open();
			}
		},
		onCloseDialog: function(){
			this.byId("helloDialog").close();
		}
	});
});