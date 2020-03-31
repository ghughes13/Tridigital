(function(w, d, undefined) {
  if (!w._honeySettings) {
    throw "_honeySettings does not exist!";
  }

  if (!w._honeySettings.forms || w._honeySettings.forms.length === 0) {
    throw "_honeySettings does not have any form settings";
  }

  for (var i = 0; i < w._honeySettings.forms.length; i++) {
    var form = w._honeySettings.forms[i];
    var el = document.querySelector(form.selector);
    if (el) {
      el.onsubmit = (function(form, el) {
        return function(e) {
          var request = {
            ClientId: w._honeySettings.clientId,
            WebsiteUrl: w._honeySettings.websiteUrl,
            FormType: form.formType,
            ListId: form.listId,
          };

          if (form.mappings.firstName) {
            var firstNameElement = el.querySelector(form.mappings.firstName);

            if (firstNameElement) {
              request.FirstName = firstNameElement.value;
            }
          }

          if (form.mappings.lastName) {
            var lastNameElement = el.querySelector(form.mappings.lastName);

            if (lastNameElement) {
              request.LastName = lastNameElement.value;
            }
          }

          if (form.mappings.email) {
            var emailElement = el.querySelector(form.mappings.email);

            if (emailElement) {
              request.Email = emailElement.value;
            }
          }

          if (form.mappings.phone) {
            var phoneElement = el.querySelector(form.mappings.phone);

            if (phoneElement) {
              request.Phone = phoneElement.value;
            }
          }

          if (form.mappings.title) {
            var titleElement = el.querySelector(form.mappings.title);

            if (titleElement) {
              request.Title = titleElement.value;
            }
          }

          if (form.mappings.city) {
            var cityElement = el.querySelector(form.mappings.city);

            if (cityElement) {
              request.City = cityElement.value;
            }
          }

          if (form.mappings.region) {
            var regionElement = el.querySelector(form.mappings.region);

            if (regionElement) {
              request.Region = regionElement.value;
            }
          }

          if (form.mappings.countryName) {
            var countryElement = el.querySelector(form.mappings.countryName);

            if (countryElement) {
              request.CountryName = countryElement.value;
            }
          }

          if (form.mappings.comment) {
            var commentElement = el.querySelector(form.mappings.comment);

            if (commentElement) {
              request.Comment = commentElement.value;
            }
          }

          var method = "POST";
          var url = "https://api.honeycrm.com/service/formsubmissions";
          console.log("validated");
          console.log(request);

          try {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.setRequestHeader(
              "Content-Type",
              "application/json; charset=UTF-8"
            );
            xhr.send(JSON.stringify(request));
            xhr.addEventListener("load", function(event) {
              // alert("Yeah! Data sent and response loaded.");
            });

            xhr.addEventListener("error", function(event) {
              // alert("Oops! Something went wrong.");
            });
            console.log("sent");
            console.log(xhr.response);
          } catch (error) {
            console.log(error);
          }
        };
      })(form, el);
    }
  }
})(window, document);
