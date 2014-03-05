/* Write the div with participant avatars */
function write_discourse_div(data, topic_url)
{
    $('#discourse').html('<div id="comments"></div><div id="participants"></div>');
    var part_div = $('#discourse #participants');
    part_div.append( '<p>' + data.participants.length + ' people are talking about this. Join the <a href="' + topic_url + '">conversation</a>.</p>');
    part_div.append('<p>');
    $.each(data.participants, function (i, participant) {
        var avatar_url = participant.avatar_template.replace('\{size\}', "45");
        part_div.append('<img src="' + avatar_url + '">');
    });
    part_div.append('</p>');

    var comment_div = $('#discourse #comments');
    $.each(data.posts, function(i, post){
        comment = '<div class="media">';
        comment += '<a class="pull-left">';
        avatar_url = post.avatar_template.replace('\{size\}', "45");
        comment += '<img class="media-object" src="' + avatar_url;
        comment += '" alt="Profile image of ' + post.name + '">'
        comment += '</a>';
        comment += '<div class="media-body">';
        comment += post.cooked;
        comment += '</div></div>';
        comment_div.append(comment);
    });
}

function write_discourse_section(topic_url){
    var url = topic_url + '/wordpress.json?best=3';
    $.ajax(url)
    .done(function(data) {
        write_discourse_div(data, topic_url);
    })
    .fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.log( "error: " + err );
    });
}

