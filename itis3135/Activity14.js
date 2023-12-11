$(document).ready(function() {
	$('#nav_list a').click(function(e) {
        e.preventDefault();

        var speaker = $(this).attr('title');
        var speakerJSON = speaker + '.json';

        $.getJSON('json_files/' + speakerJSON, function(data) {
            var speakerData = data.speakers[0];
            var html = '<h1>' + speakerData.title + '</h1>';
            html += '<h2>' + speakerData.month + '</h2>';
            html += '<h3>' + speakerData.speaker + '</h3>';
            html += '<img src="' + speakerData.image + '" alt="' + speakerData.speaker + '_picture">';
            html += '<p>' + speakerData.text + '</p>';

            $('main').html(html);
        });
    });
}); // end ready