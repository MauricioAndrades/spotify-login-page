Features.

1.html layout
    * input form
    * style form, write instructions
    * read through spotify API documentation.

1. crate playlist from text input. line by line.
    2.  


2. pull songs titles from /r/techno

3. login/facebook login

#spotify rederect uri

call spotify api sends a `redirect-uri`

#CREATE REPO
echo "# SpotifyPlaylistMaker" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/MauricioAndrades/SpotifyPlaylistMaker.git
git push -u origin master

#PUSH EXISTING REPO:
git remote add origin https://github.com/MauricioAndrades/SpotifyPlaylistMaker.git
git push -u origin master



#spotify search curl
curl -X GET "https://api.spotify.com/v1/search?q=Deadmau5+-+I+Rememeber&type=track" -H "Accept: application/json"


step1. build authorization.


https://developer.spotify.com/web-api/console/get-album/?id=0sNOF9WDwhWunNAHPD3Baj

    curl -X GET "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj" -H
    "Accept: application/json" -H "Authorization: Bearer BQDJ4
    -zR0FVaVxEyCGcx1TlOT3JDpSVs8hyP4Smqf_vNfj12x2Bt1rY5VvahKs2pc-
    XWEQZ4vu0RWsJJ1w5TOcrIOmh5OYq4K_XMi_NN5Nrw_j6S-
    _s_Sd0LtMveTvKXLXyfT879NWm5efOT27ntGzDeq4YbYXpNVSxIh_lrNwwOHzOU4dNO-JOLGqFJ4
    M134lZcEont_UlUuKCDZP8ZIU1LLoECcQEv0clq3MzTZmuVlaEIk1Gf5UrYrEkSWRTY1EFQfr5Uw
    VhdRRf-zr6zhz0KYSV4K2zqj7FPM6cumw"

`SPOTIFY URI: `The resource identifier that you can enter, for example, in the
Spotify Desktop client's search box to locate an artist, album, or track. To
find a Spotify URI simply right-click (on Windows) or Ctrl-Click (on a Mac) on
the artist's or album's or track's name.

`spotify:track:6rqhFgbbKwnb9MLmUQDhG61`

`SPOTIFY ID: `    The base-62 identifier that you can find at the end of the Spotify URI (see above) for an artist, track, album, playlist, etc. Unlike a Spotify URI, a Spotify ID does not clearly identify the type of resource; that information is provided elsewhere in the call.

6rqhFgbbKwnb9MLmUQDhG6

SpotifyCategoryID:
type: string
ex: party

`SpotifyUserID`: 
The unique string identifying the Spotify user that you can find at the end of the Spotify URI for the user. The ID of the current user can be obtained via the Web API endpoint https://api.spotify.com/v1/me.

`SpotifyURL`:
An HTML link that opens a track, album, app, playlist or other Spotify resource in a Spotify client (which client is determined by the user's device and account settings at play.spotify.com).