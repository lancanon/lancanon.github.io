$(document).ready(function() {
    $('#nav_list li a').click(function(e) {
      e.preventDefault();
  
      var speaker = $(this).attr('title');
      var speakerJSON = speaker + '.json';
  
      $.getJSON('data/' + speakerJSON, function(data) {
        var speakerData = data.speakers[0];
        var html = `
        <h1>${speakerData.title}</h1>
        <h2>${speakerData.month}</h2>
          <h3>${speakerData.speaker}</h3>
          <img src="${speakerData.image}" alt="${speakerData.speaker}_picture">
          <p>${speakerData.text}</p>
        `;
  
        $('main').html(html);
      });
    });
  }); // end ready
  