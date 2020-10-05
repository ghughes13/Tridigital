(function(w, d, undefined) {
  var gravityForms = document.querySelectorAll("form");
  var honeyFormSettings = [];
  var clientID = 1;
  var listID = 365;
  var formCategory = [
    "Consultation",
    "Fortinet",
    "Lenovo",
    "Apple",
    "Storagecraft",
    "IBM",
    "Brother",
    "RSA",
    "Google AdWords",
    "Newsletter",
    "Ask Us Anything",
    "Event",
    "Livestream",
    "TRIpod",
    "Resource Request",
    "Physical Brochure",
    "RSAMDF",
    "Career",
    "Warmup",
    "Citrix",
    "Cisco",
    "Verizon",
  ];

  if (gravityForms) {
    for (var i = 0; i < gravityForms.length; i++) {
      var currentForm = gravityForms[i];
      for (var k = 0; k < formCategory.length; k++) {
        if (currentForm.className == formCategory[k]) {
          if (formCategory[k] == "Livestream") {
            listID = 5400;
          }
          if (formCategory[k] == "Fortinet") {
            listID = 9314;
          }
          if (formCategory[k] == "Lenovo") {
            listID = 9488;
          }
          if (formCategory[k] == "Apple") {
            listID = 9820;
          }
          if (formCategory[k] == "Storagecraft") {
            listID = 9826;
          }
          if (formCategory[k] == "IBM") {
            listID = 9902;
          }
          if (formCategory[k] == "Brother") {
            listID = 9903;
          }
          if (formCategory[k] == "RSA") {
            listID = 10102;
          }
          if (formCategory[k] == "RSAMDF") {
            listID = 10348;
          }
          if (formCategory[k] == "Citrix") {
            listID = 10570;
          }
          if (formCategory[k] == "Cisco") {
            listID = 11185;
          }
          if (formCategory[k] == "Verizon") {
            listID = 11228;
          }
          var formSelector = currentForm.id;
          var formType = formCategory[k];
          var formSettings = new formSetting(formSelector, formType);
          honeyFormSettings.push(formSettings);
        }
      }
    }
    addHoneyScripts();
  }

  function formSetting(formSelector, formType) {
    (this.selector = "#" + formSelector),
      (this.listId = listID),
      (this.formType = formType),
      (this.mappings = {
        firstName: ".name-field input",
        email: ".email-field input",
        company: "company-field input",
        comment: ".comment-field textarea",
      });
  }

  function addHoneyScripts() {
    var url = window.location.href; // Returns full URL
    w._honeySettings = {
      clientId: clientID,
      websiteUrl: url,
      forms: honeyFormSettings,
    };
    var head = d.getElementsByTagName("head")[0];
    var tag = d.createElement("script");

    tag.src = "/static/honey-form-validation.js";
    tag.async = true;

    document.body.appendChild(tag);
  }
})(window, document);
