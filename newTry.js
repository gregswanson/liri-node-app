var spotify = require('spotify');

spotify.search({ type: 'track', query: "I Want it That Way" }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    for (var i = 0; i < data.tracks.items.length; i++) {
    	console.log("artist: " + data.tracks.items[i].artists[0].name);
    	console.log("song name: " + data.tracks.items[i].name);
    	console.log("preview link: " + data.tracks.items[i].preview_url);
    	console.log("album name: " + data.tracks.items[i].album.name);
    }
 //console.log(data.tracks.items[1].album.id);
    // Do something with 'data'
});