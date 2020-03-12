import $ from "jquery";

export const honey = (w, d, undefined) => {
  var gravityForms = $('.gplaceholder');
  var honeyFormSettings = [];
  var clientID = 1; //grab clientID from honey
  var listID = 365; //grab listID from honey 
  var formCategory = ['Consultation' , 'Google AdWords' , 'Newsletter' , 'Ask Us Anything' , 'Event' , 'Livestream' , 'Resource Request' , 'Physical Brochure' , 'Career']
   
  let formSetting = (formSelector, formType ) => {
    this.selector = '#' + formSelector; 
    this.listId = listID;
    this.formType = formType;
    this.mappings = {
        firstName : '.name-field input',
        email : '.email-field input',
        comment : '.comment-field textarea'
    };
  } 

  let addHoneyScripts = () => {
    var url      = window.location.href;     // Returns full URL
        w._honeySettings = { 
            clientId: clientID,
            websiteUrl: url,
            forms: honeyFormSettings
        }
        var head = d.getElementsByTagName('head')[0];
        var tag = d.createElement('script');

        tag.async = 1;
        tag.src = 'https://05ab5854d232fd37cd92-d8310f79ece792c4405f169f3d25ed4a.ssl.cf1.rackcdn.com/honey-forms.js'; 

        head.appendChild(tag); 

  }

  if (gravityForms){  
      for (var i = 0; i < gravityForms.length; i++) {
          var currentForm = $(gravityForms[i]);    
          var formFields = currentForm.find('.gfield');
          //get fields
          for (var j = 0; j < formFields.length; j++) {
              var currentFormField = $(formFields[j]); 
              var currentInputField = currentFormField.find('input');
              for(var k = 0; k < formCategory.length; k++) {
                if ($(currentInputField).val() === formCategory[k]) {
                    if ($(currentInputField).val() === 'Event') {  
                        listID = 5708;  
                    } 
                  var formSelector = currentForm.attr("id");
                  var formType = formCategory[k];
                  var formSettings = new formSetting( formSelector, formType );
                  honeyFormSettings.push(formSettings);
                }
              }
          }
      }
      addHoneyScripts();
  }
};

