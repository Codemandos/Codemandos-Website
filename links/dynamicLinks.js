$(document).ready(function() {
  $.getJSON("https://spreadsheets.google.com/feeds/list/18af0_kpv1mb6P-6-o9-r8Z7AO4f-pkm8yMqpoZEPwlE/od6/public/values?alt=json", function(data) {
    //first row "title" column
    var entries = data.feed.entry;
    var titleLinkRaw = data.feed.entry[0]['content']['$t'];
    var descriptionRaw = data.feed.entry[1];

    var titleLinkFiltered = titleLinkRaw.split(', ');


    var curatedData = [];
    for (i = 0; i < titleLinkFiltered.length; i++) {
      curatedData.push(titleLinkFiltered[i].split(": "));

    }

    for (x = 0; x < curatedData.length; x++) {
      curatedData[x][2] = descriptionRaw['gsx$' + curatedData[x][0]]['$t'];
    }
    console.log(curatedData);
    for (z = 0; z < curatedData.length; z++) {
      var newEl = $("<a class='dynID' href='" + curatedData[z][1] + "'></a>").text(curatedData[z][0].charAt(0).toUpperCase() + curatedData[z][0].slice(1) + " - " + curatedData[z][2]);
      console.log(curatedData[z][1]);
      $('ul').prepend(newEl);
    }
    $(".dynID").wrap("<li></li>");
  });
})
