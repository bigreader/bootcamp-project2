$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var newCharacter = {
    // name from name input
    name: $("#name")
      .val()
      .trim(),
    class: $("#class")
      .val()
      .trim(),
    race: $("#race")
      .val()
      .trim(),
    alignment: $("#alignment")
      .val()
      .trim(),
    level: $("#level")
      .val()
      .trim(),
    experiene: $("#experience")
      .val()
      .trim(),
    speed: $("#speed")
      .val()
      .trim(),
    charisma: $("#charisma")
      .val()
      .trim(),
    strength: $("#strength")
      .val()
      .trim(),
    dexterity: $("#dexterity")
      .val()
      .trim(),
    constitution: $("#constitution")
      .val()
      .trim(),
    intelligence: $("#intelligence")
      .val()
      .trim()
  };

  $.post("/api/new", newCharacter).then(function(data) {
    console.log(data);
    alert("Adding character...");
  });

  $("#name").val("");
  $("#class").val("");
  $("#race").val("");
  $("#alignment").val("");
  $("#level").val("");
  $("#experience").val("");
  $("#speed").val("");
  $("#charisma").val("");
  $("#strength").val("");
  $("#constitution").val("");
  $("#intelligence").val("");
});
