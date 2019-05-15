$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newCharacter = {
      // name from name input
      name: $("#name").val().trim(),

      class: $("#class").val().trim(),

      Race: $("#race").val().trim(),

      background: $("#background").val().trim(),

      alignment: $("#alignment").val().trim(),

      experiene: $("#experience").val().trim(),

      proficiencyBonus: $("#proficiencyBonus").val().trim(),

      inspiration: $("#inspiration").val().trim(),

      speed: $("#speed").val().trim(),

      level: $("#level").val().trim(),
      
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newCharacter)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding character...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#class").val("");
    $("#race").val("");
    $("#background").val("");
    $("#alignment").val("");
    $("#experience").val("");
    $("proficiencyBonus").val("")
    $("inspiration").val("")
    $("#speed").val("");
    $("#level").val("");
  });