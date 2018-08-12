'use strict';

var playList = [{
    author: "led zeppelin",
    song: "stairway to heaven",
    duration: "2:03"
},
{
    author: "queen",
    song: "bohemian rhapsody",
    duration: "2:30"
},
{
    author: "lynyrd skynyrd",
    song: "free bird",
    duration: "1:56"
},
{
    author: "deep purple",
    song: "smoke on the water",
    duration: "3:03"
},
{
    author: "jimi hendrix",
    song: "all along the watchtower",
    duration: "2:53"
},
{
    author: "AC/DC",
    song: "back in black",
    duration: "2:43"
},
{
    author: "queen",
    song: "we will rock you",
    duration: "2:13"            
},
{
    author: "metallica",
    song: "enter sandman",
    duration: "3:03"            
}
];


function generatePlayList(songsArr) {

    if ( !Array.isArray(songsArr) || songsArr.length === 0 ) {
        return;
    }

    var playList = '<ul class="playlist">';
    playList += '<h3 class="playlist__title">' +
                    'PlayList' +
                '</h3>';

    songsArr.forEach(function(track) {
        playList += '<li class="playlist__track">' +
                        '<span class="track__author">' +
                            (track.author ? track.author : 'unknown artist') +
                        '</span>' +
                        '<span class="track__name">' +
                            (track.song ? track.song : 'unknown') +
                        '</span>' +
                        '<span class="track__duration">' +
                            (parseInt(track.duration) ? track.duration : '??:??') +
                        '</span>' +
                        '<div class="track__like">' +
                        '</div>'
                    '</li>';

    });

    playList += '</ul class="playlist">';

    document.write(playList);
}

generatePlayList(playList);