$(function() {

  $("#contactForm input").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      print("error");// additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      //var diseasetype = $("input#disease_selection").val();
      var location = $("input#loc").val();
      var date = $("input#date").val();
      //var message = $("textarea#message").val();
      //var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      /*if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }*/
      $this = $("#submitBtn");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $this.innerHtml='Submitting';
      /*$.ajax({
        url: "././mail/contact_me.php",
        type: "POST",
        data: {
          diseasetype: diseasetype,
          location: location,
          date: date
        },*/
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Submission successful. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Submission failed, please try again!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
