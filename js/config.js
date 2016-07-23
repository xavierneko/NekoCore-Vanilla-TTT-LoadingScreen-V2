/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "NekoCore Vanilla TTT Server";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/10.12-Sierra.jpg",
	"backgrounds/images/10c462de63a51a149380ef9c3c69bcda-1.jpg",
	"backgrounds/images/561492.jpg",
	"backgrounds/images/11903612_831406623644381_91250693_o-1.jpg",
	"backgrounds/images/144231810-1.jpg",
	"backgrounds/images/1396290091-563105-3500x2466.jpg",
	"backgrounds/images/Holiday.jpg",
	"backgrounds/images/iceland_mountains_snow_night_lilac_sky_stars_milky_way_82743_3840x2160.jpg",
	"backgrounds/images/iceland_mountains_snow_night_lilac_sky_stars_milky_way_82743_3840x2160.jpg",
	"backgrounds/images/mountain_icelandic4k.jpg",
	"backgrounds/images/mountain_peak_stars_sky_night_light_snow_46057_3840x2400.jpg",
	"backgrounds/images/papers.co-mk78-aurora-star-sky-snow-mountain-winter-nature-36-3840x2400-4k-wallpaper.jpg",
	"backgrounds/images/shutterstock_285081020.jpg",
	"backgrounds/images/wallhaven-339259.jpg",
	"backgrounds/images/wallhaven-353224.jpg",
	"backgrounds/images/116986f833a7c6206fd5572cc3b26000-1.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/meow ", name: "I am Error, Neko Couldn't be bothered to fix this, if you see this, tell him "I FOUND YOUR ERROR IN THE LOADING SCREEN!"},
	{youtube: "t2sxSdqilqQ", name: "Snail's House - Pixel Dream"},
	{youtube: "loTjjsDH2Js", name: "Snail's House - Ma Chouchoute"},
	{youtube: "ks2hGA1yV3Q", name: "Snail's House - Grape Soda"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Enjoy the server",
"Thanks for joining us!",
"Theres more to come! ;)"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;