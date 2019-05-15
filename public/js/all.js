$.get("/api", function(data) {
    for (var i = 0; i < data.length; i++) {
      var wellSection = $("<div>");
      wellSection.addClass("well");
      wellSection.attr("id", "character-well-" + i);
      $("#well-section").append(wellSection);
      $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
      $("#character-well-" + i).append("<h3>class: " + data[i].class + "</h3>");
      $("#character-well-" + i).append("<h3>race: " + data[i].race + "</h3>");
      $("#character-well-" + i).append(
        "<h3>alignment: " + data[i].alignment + "</h3>"
      );
      $("#character-well-" + i).append("<h3>level: " + data[i].level + "</h3>");
      $("#character-well-" + i).append(
        "<h3>experience: " + data[i].experience + "</h3>"
      );
      $("#character-well-" + i).append("<h3>speed: " + data[i].speed + "</h3>");
      $("#character-well-" + i).append(
        "<h3>strength: " + data[i].strength + "</h3>"
      );
      $("#character-well-" + i).append(
        "<h3>constitution: " + data[i].constitution + "</h3>"
      );
      $("#character-well-" + i).append(
        "<h3>intelligence: " + data[i].intelligence + "</h3>"
      );
    }
  });