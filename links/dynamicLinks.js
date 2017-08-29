$(document).ready(function() {
  $.getJSON("https://spreadsheets.google.com/feeds/list/18af0_kpv1mb6P-6-o9-r8Z7AO4f-pkm8yMqpoZEPwlE/od6/public/values?alt=json", function(data) {
    //first row "title" column
    $('ul').prepend('<br>');

    var titleRaw = data.feed.entry[0]['content']['$t'];
    var linkRaw = data.feed.entry[1]['content']['$t'];
    var descriptionRaw = data.feed.entry[2]['content']['$t'];

    var titleFiltered = titleRaw.split(', ');
    var linkFiltered = linkRaw.split(', ');
    var descriptionFiltered = descriptionRaw.split(', ');
    //  console.log(titleFiltered);
    var curatedData = [];
    for (i = 0; i < titleFiltered.length; i++) {
      var entry = titleFiltered[i].split(": ");
      entry.push(linkFiltered[i].split(": ")[1]);
      entry.push(descriptionFiltered[i].split(": ")[1]);
      curatedData.push(entry);
    }

    for (z = 0; z < curatedData.length; z++) {
      if (!curatedData[z][2].includes("http")) {
        curatedData[z][2] = "http" + curatedData[z][2];
      }
      var newEl = $(('<a id="' + curatedData[z][0].slice(1) + '" href="' + curatedData[z][2] + '"></a>')).append($("<font color='gold'></font>").text(curatedData[z][1])).append($("<i></i>").text(" - " + curatedData[z][3]));
      $('ul').prepend(newEl);
      $('#' + curatedData[z][0].slice(1)).wrap("<li></li>");

    }

  });
})
