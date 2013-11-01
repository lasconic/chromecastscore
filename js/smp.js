var ytplayer;

//var scoreId = 28779;
//var scoreId = 111009;
var scoreId = 4214;
//var scoreSecret = '13f88f0709';
//var scoreSecret = 'd825669933';
var scoreSecret = 'b8dbb8aac9';


//var youtubeId = "dckOerDVTa8";
//var youtubeId = "ifZfLUK5Uwc";
var youtubeId = "PAefpyB4DcE";

//var markerData = [{"elid":0,"position":0},{"elid":1,"position":13.236994219653178},{"elid":2,"position":18.8881725211205},{"elid":3,"position":24.997554468652734},{"elid":4,"position":30.24144064028457},{"elid":5,"position":35.68897287683414},{"elid":6,"position":42.05291240551356},{"elid":7,"position":50.40240106714096},{"elid":8,"position":56.206313917296576},{"elid":9,"position":62.366607381058245},{"elid":10,"position":68.37416629613162},{"elid":11,"position":75.34904401956426},{"elid":12,"position":81.66207203201422},{"elid":13,"position":86.44775455758115},{"elid":14,"position":91.38617163183636},{"elid":15,"position":96.68096931969764},{"elid":16,"position":102.58670520231215},{"elid":17,"position":107.52512227656736},{"elid":18,"position":113.68541574032903},{"elid":19,"position":117.40195642507781},{"elid":20,"position":123.40951534015119},{"elid":21,"position":128.65340151178302},{"elid":22,"position":134.66096042685638},{"elid":23,"position":140.92307692307693},{"elid":24,"position":146.2178746109382},{"elid":25,"position":152.276345042241},{"elid":26,"position":160.21854157403288},{"elid":27,"position":166.53156958648287},{"elid":28,"position":172.742774566474},{"elid":29,"position":178.9539795464651},{"elid":30,"position":184.24877723432635},{"elid":31,"position":190.052690084482},{"elid":32,"position":195.8566029346376},{"elid":33,"position":202.22054246331703},{"elid":34,"position":210.87550022232102},{"elid":35,"position":216.27212094264118},{"elid":36,"position":222.68697198755},{"elid":37,"position":228.74544241885283},{"elid":38,"position":235.9239662072032},{"elid":39,"position":242.38972876834148},{"elid":40,"position":247.1754112939084},{"elid":41,"position":252.9284126278346},{"elid":42,"position":258.47776789684303},{"elid":43,"position":264.7398843930636},{"elid":44,"position":269.0673632725656},{"elid":45,"position":274.616718541574},{"elid":46,"position":280.0642507781236},{"elid":47,"position":285.46087149844374},{"elid":48,"position":292.07936860827033},{"elid":49,"position":294.72676745220093},{"elid":50,"position":299.5633614939973},{"elid":51,"position":307.04735437972437},{"elid":52,"position":311.73121387283237},{"elid":53,"position":316.41507336594043},{"elid":54,"position":321.048021342819},{"elid":55,"position":328.68474877723435},{"elid":56,"position":331.1794130724767},{"elid":57,"position":336.93241440640287},{"elid":58,"position":342.5835927078702},{"elid":59,"position":345.38372610048907},{"elid":60,"position":355.3623832814584},{"elid":61,"position":361.0644730991552},{"elid":62,"position":366.9702089817697},{"elid":63,"position":372.9268563806136},{"elid":64,"position":378.62894619831036},{"elid":65,"position":384.89106269453094},{"elid":66,"position":392.0695864828813},{"elid":67,"position":398.8917296576256},{"elid":68,"position":405.5102267674522},{"elid":69,"position":411.67052023121386},{"elid":70,"position":418.7472209871054},{"elid":71,"position":427.2494441974211}];
//var markerData = [{"elid":0,"position":0},{"elid":1,"position":0.20909293019119607},{"elid":2,"position":1.4636505113383727},{"elid":3,"position":2.832258781680747},{"elid":4,"position":4.27690084481992},{"elid":5,"position":5.037238772787905},{"elid":6,"position":6.747999110715873},{"elid":7,"position":8.249666518452646},{"elid":8,"position":9.808359270787017},{"elid":9,"position":11.348043574922187},{"elid":10,"position":13.020787016451758},{"elid":11,"position":14.560471320586927},{"elid":12,"position":16.1001556247221},{"elid":13,"position":17.487772343263675},{"elid":14,"position":19.16051578479324},{"elid":15,"position":20.567140951534014},{"elid":16,"position":22.163850600266787},{"elid":17,"position":23.684526456202757},{"elid":18,"position":25.357269897732326},{"elid":19,"position":26.820920409070695},{"elid":20,"position":28.436638506002666},{"elid":5,"position":30.39450867052023},{"elid":6,"position":31.63005780346821},{"elid":7,"position":33.05569141840818},{"elid":8,"position":34.59537572254335},{"elid":9,"position":36.059026233881724},{"elid":10,"position":37.6937527790129},{"elid":11,"position":39.17641173855047},{"elid":12,"position":40.75411293908404},{"elid":13,"position":42.27478879502001},{"elid":14,"position":43.87149844375278},{"elid":15,"position":45.50622498888395},{"elid":16,"position":46.96987550022232},{"elid":17,"position":48.5475767007559},{"elid":18,"position":50.06825255669187},{"elid":19,"position":51.60793686082704},{"elid":21,"position":53.2046465095598},{"elid":22,"position":54.687305469097375},{"elid":23,"position":56.24599822143175},{"elid":24,"position":57.84270787016452},{"elid":25,"position":59.32536682970209},{"elid":26,"position":60.99811027123166},{"elid":27,"position":62.46176078257003},{"elid":28,"position":64.02045353490439},{"elid":29,"position":65.52212094264118},{"elid":30,"position":67.02378835037794},{"elid":31,"position":68.60148955091152},{"elid":32,"position":70.12216540684749},{"elid":33,"position":71.66184971098265},{"elid":34,"position":73.25855935971543},{"elid":35,"position":74.7602267674522},{"elid":36,"position":76.29991107158737},{"elid":37,"position":77.87761227212094},{"elid":38,"position":79.34126278345931},{"elid":39,"position":81.03301467318808},{"elid":40,"position":82.53468208092485},{"elid":41,"position":84.03634948866163},{"elid":42,"position":85.5380168963984},{"elid":43,"position":87.07770120053357},{"elid":44,"position":88.61738550466875},{"elid":45,"position":90.17607825700311},{"elid":46,"position":91.75377945753668},{"elid":47,"position":93.25544686527346},{"elid":48,"position":94.89017341040461},{"elid":49,"position":96.39184081814139},{"elid":50,"position":97.89350822587816},{"elid":51,"position":99.45220097821255},{"elid":52,"position":101.01089373054691},{"elid":53,"position":102.53156958648289},{"elid":54,"position":104.07125389061804},{"elid":55,"position":105.59192974655403},{"elid":56,"position":107.1316140506892},{"elid":57,"position":108.63328145842597},{"elid":58,"position":110.13494886616273},{"elid":59,"position":111.71265006669631},{"elid":60,"position":113.23332592263228},{"elid":61,"position":114.75400177856825},{"elid":62,"position":116.25566918630503},{"elid":63,"position":117.776345042241},{"elid":64,"position":119.27801244997778},{"elid":65,"position":120.81769675411293},{"elid":66,"position":122.31936416184972},{"elid":67,"position":123.85904846598487},{"elid":68,"position":125.45575811471765},{"elid":69,"position":126.88139172965762},{"elid":70,"position":128.45909293019122},{"elid":71,"position":129.92274344152955},{"elid":72,"position":131.63350377945756},{"elid":73,"position":133.0401289461983},{"elid":74,"position":134.56080480213427},{"elid":75,"position":136.27156514006225},{"elid":76,"position":137.83025789239662},{"elid":77,"position":139.293908403735},{"elid":78,"position":140.87160960426857},{"elid":79,"position":142.37327701200533},{"elid":80,"position":143.8369275233437},{"elid":81,"position":145.37661182747888},{"elid":82,"position":146.87827923521564},{"elid":83,"position":155.0519119608715},{"elid":84,"position":157.35193419297465},{"elid":85,"position":159.68997332147623}];
var markerData = [{"elid":0,"position":0},{"elid":"1","position":8.878612716763005},{"elid":"2","position":15.867052023121387},{"elid":"3","position":20.739884393063583},{"elid":"4","position":25.942196531791907},{"elid":"5","position":31.196531791907514},{"elid":"6","position":34.092485549132945},{"elid":"7","position":36.24277456647399},{"elid":"8","position":41.774566473988436},{"elid":"9","position":45.5028901734104},{"elid":"10","position":48.36416184971098},{"elid":"11","position":51.9364161849711},{"elid":"12","position":55.682080924855484},{"elid":"13","position":59.1849710982659},{"elid":"14","position":65.60115606936417},{"elid":"15","position":70.04046242774567},{"elid":"16","position":73.80346820809248},{"elid":"17","position":78.41618497109826},{"elid":"18","position":83.70520231213872},{"elid":"19","position":87.29479768786128},{"elid":"20","position":91.17919075144509},{"elid":"21","position":94.52601156069365},{"elid":"22","position":97.59537572254335},{"elid":"23","position":100.64739884393065},{"elid":"24","position":103.28323699421966},{"elid":"25","position":107.20231213872832},{"elid":"26","position":110.4971098265896},{"elid":"27","position":113.82658959537572},{"elid":"28","position":117.86705202312139},{"elid":"29","position":125.53179190751446},{"elid":"30","position":130.73410404624278},{"elid":"31","position":135.79768786127167},{"elid":"32","position":139.7514450867052},{"elid":"33","position":144.86705202312137},{"elid":"34","position":148.66473988439307}];
var maxPageWidth;
var pageWidth;
var timeoutId;
var mpager;

var mmToPixel = (827/210);

var isMobile;

var	cast, cast_api, cv_activity, receivers;
var castPosition = 0;
var castTimer;

$(document).ready(function() {
	isMobile = (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod');
	maxPageWidth = $('#smp-pages').width();
  	

  	$.getJSON("http://api.musescore.com/services/rest/score/" + scoreId + ".jsonp?secret=" + scoreSecret + "&oauth_consumer_key=musichackday&callback=?", function(data) {
		console.log(data);
		var dimensions = data.metadata.dimensions;
		var pages = parseInt(data.metadata.pages);
		var pageWidth = parseInt(dimensions.split('x')[0]) * mmToPixel;
	
		mpager = $("#smp-pages").mpager({
			api		: true,
			pages 	: pages,
			scoreId : scoreId,
			scoreSecret: scoreSecret,
			apiServer : "http://musescore.com",
			staticBucket : "static.musescore.com",
			measureClickCallback : measureClick,
			measureChangeCallback: measureChange,
			pageWidth: pageWidth,
			defaultMeasure: -1,
			bottomPadding: 10,
			consumerKey: "musichackday"
		});
	}); 

	var bottomPadding = $("#smp-control").height();
	//stick the footer at the bottom of the page if we're on an iPad/iPhone due to viewport/page bugs in mobile webkit
	if(isMobile)
	{
	     $("#smp-control").css("position", "static");
	};
		
	var tag = document.createElement('script'),
	firstScriptTag = document.getElementsByTagName('script')[0];
	tag.src = "https://www.youtube.com/iframe_api";
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$("#smp-control-measure-goto").val(1);
	$("#smp-control-page-goto").val(1);
	
	$('#smp-control-measure-prev').click(function() {
		var m = mpager.cMeasure - 1;
		if(mpager.goTo(m))
			seekToMeasureId(m);
		return false;
	});

	$('#smp-control-measure-next').click(function() {
		var m = mpager.cMeasure + 1;
		if(mpager.goTo(m))
			seekToMeasureId(m);
		return false;
	});
	
	$('#smp-control-measure-goto').keypress(function(event) {
		if (event.keyCode == '13') {
			var measureId = $("#smp-control-measure-goto").val();
			if(mpager.goTo(measureId-1))
				seekToMeasureId(measureId-1);
			return false;
		}
	});
	
	$('#smp-control-page-prev').click(function() {
		if(mpager.prevPage(true))
			seekToMeasureId(mpager.cMeasure);
		return false;
	});

	$('#smp-control-page-next').click(function() {
		if(mpager.nextPage(true))
			seekToMeasureId(mpager.cMeasure);
		return false;
	});
	
	$('#smp-control-page-goto').keypress(function(event) {
		if (event.keyCode == '13') {
			var pageNumber = $("#smp-control-page-goto").val();
			if(mpager.goToPage(pageNumber-1, true))
				seekToMeasureId(mpager.cMeasure);
			return false;
		}
	});

	function getVideoLeft() { 
	  return $('#smp-pages').offset().left + 650 + 10;
	}
	
	$('#smp-control-video-toggle').toggle(
    function() {
		  $('#smp-video').animate( {
			left : 9999
			}, 0);
			$('#smp-control-video-toggle').removeClass('smp-control-video-off');
			$('#smp-control-video-toggle').addClass('smp-control-video-on');
			$('#smp-pages').width(950);
			mpager.refreshPages();
		}, 
    function() {
			$('#smp-video').animate( {
				left : getVideoLeft()
			}, 0);
			$('#smp-control-video-toggle').removeClass('smp-control-video-on');
			$('#smp-control-video-toggle').addClass('smp-control-video-off');
			$('#smp-pages').width(650);
			mpager.refreshPages();
	  }
  );
  
  
  $('#smp-control-score-toggle').toggle(
    function() {
		  $('#smp-pages').hide();
			$('#smp-control-score-toggle').removeClass('smp-control-score-off');
			$('#smp-control-score-toggle').addClass('smp-control-score-on');
			$('#smp-video').animate({
			 left : '0px'
			});
			
			$('.smp-video-element').css({float:'left'});
			
			mpager.refreshPages();
		}, 
    function() {
			$('#smp-pages').show();
			$('#smp-control-score-toggle').removeClass('smp-control-score-on');
			$('#smp-control-score-toggle').addClass('smp-control-score-off');
			
			$('#smp-video').animate({
			 left : '658px'
			});
			$('.smp-video-element').css({float:'none'});
			mpager.refreshPages();
	  }
  );
  
	
	$('#smp-control-replay').click(function() {
		if(ytplayer) {
			ytplayer.seekTo(0);
			ytplayer.playVideo();
		}
    return false;
	});
	
	$('#smp-control-play').click(function() {
		if($('#smp-control-play').hasClass('smp-control-play-mode')){
			ytplayer.playVideo();
			$('#smp-control-play').removeClass('smp-control-play-mode');
			$('#smp-control-play').addClass('smp-control-pauze-mode');
		}
    else{
			ytplayer.pauseVideo();
			$('#smp-control-play').addClass('smp-control-play-mode');
			$('#smp-control-play').removeClass('smp-control-pauze-mode');
		}
    return false;
	});
		
	if(!isMobile)
	{	
		$('#smp-video').css('left', getVideoLeft());
		$(window).scroll(function() {
		    var windowBottom = $(window).scrollTop() + $(window).height();
		    var toolbarLimit = $('#smp-pages').height() + $('#smp-pages').offset().top;
		    if (windowBottom > toolbarLimit) {
		      $('#smp-control').css('position', 'static');
		    }
		    else {
		      $('#smp-control').css('position', 'fixed');
		    }
		});
	}else{
		$('#smp-video').css('left', 700);
		$(window).scroll(function() {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

		    var elemTop = $('#smp-video').offset().top;
		    var elemBottom = elemTop + $('#smp-video').height();
			
	        if (elemTop < docViewTop || elemBottom > docViewBottom) {
	        	$('#smp-video').css('top', 195 + docViewTop);
	        }
		});
	}
});


function measureChange(element, id) {
	$("#smp-control-measure-goto").val(parseInt(id)+1);
	smpInputResizer("#smp-control-measure-goto");
	$("#smp-control-page-goto").val(parseInt(mpager.elements[id].page)+1);
	smpInputResizer("#smp-control-page-goto");
	if(isMobile) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $('#smp-video').offset().top;
	    var elemBottom = elemTop + $('#smp-video').height();
		
        if (elemTop < docViewTop || elemBottom > docViewBottom) {
        	$('#smp-video').css('top', 195 + docViewTop);
        }
	}
}

function measureClick(element, id) {
	mpager.highlightMeasure(element, id);
	seekToMeasureId(id);
}

function seekToMeasureId(id) {
	if(ytplayer){
	  	var playerId = ytplayer.id;
	 	var marker = markerData[parseInt(id)];
		if(marker)
			if (cv_activity)
				castSeek(marker.position);
		    else
		    	ytplayer.seekTo(marker.position, true);
	}
}

//special iframe
function onYouTubePlayerAPIReady() {
    ytplayer = new YT.Player('smp-ytapiplayer', {
		height: '220',
		width: '290',
		videoId: youtubeId,
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onytplayerStateChange,
			'onError': onytplayerError
		},
		playerVars: {
			controls: 0,
			showinfo: 0 ,
			modestbranding: 1
		}
    });
}

function onPlayerReady(event){
	// CHROMECAST no need to listen for the message if the isAvailable attribute  has already been set
	if (cast && cast.isAvailable) { 	
    	initializeApi();
	}
	else {
  		window.addEventListener("message", function(event) {
            if (event.source == window && event.data && event.data.source == "CastApi" && event.data.event == "Hello") {
               initializeApi();
            }
  		});
	}

	// normal videscore
	timeoutId = setInterval(updateytplayerInfo, 10);
	updateytplayerInfo();
	ytplayer.setVolume(100);
}

function onytplayerStateChange (newState) {
    	if((newState == 1) && $('#smp-control-play').hasClass('smp-control-play-mode')){     
    		$('#smp-control-play').removeClass('smp-control-play-mode');
    		$('#smp-control-play').addClass('smp-control-pauze-mode');
    	}
}

function updateytplayerInfo() {
	if (ytplayer && ytplayer.getPlayerState() == 1) { //playing
		var time = getCurrentTime();
		var playerId = ytplayer.id;
		var event = findEvent(markerData , time);
		mpager.goTo(event.elid);
	} else if (cv_activity) {
		var castDelay = parseFloat($("#cast-delay").val());
		if (isNaN(castDelay))
			castDelay = 0;
		var time = castPosition + castDelay;
		var playerId = ytplayer.id;
		var event = findEvent(markerData , time);
		mpager.goTo(event.elid);
	}
}

function onytplayerError(errorCode) {
	clearTimeout(timeoutId);
	switch (errorCode) {
		case 2:
			//bad request : todo replace the video with a message?
			$('#smp-video').html('<div style="color:red;padding-top:50px;padding-left:20px">Bad request</div>');
			break;
		case 100:
			//not found, made private or removed for any reason (copyright)
			$('#smp-video').html('<div style="color:red;padding-top:50px;padding-left:20px">Video not found (private or copyright issue)</div>');
			break;
		case 101:
		case 150:
			//not embedabble : todo replace the video with a message?
			$('#smp-video').html('<div style="color:red;padding-top:50px;padding-left:20px">Video not embeddable</div>');
			break;
		default:
			break;
	}
}


/**
 * The 'getCurrentTime' function returns the elapsed time in seconds from the
 * beginning of the video. It calls player.getCurrentTime().
 * 
 * @return {number} The elapsed time, in seconds, of the playing video.
 */
function getCurrentTime() {
   var currentTime = 0;
   if (ytplayer)
       currentTime = ytplayer.getCurrentTime();
   return currentTime;
 } 

function decodeMarkerData(jsonEncoded) {
	if (!jsonEncoded)
		return;
	return $.secureEvalJSON(jsonEncoded);
}

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function findEvent(evts, time) {
	var l = evts.length;
	if (l <= 1) {
		return evts[0];
	}
	var i = Math.floor(l / 2);
	var ev = evts[i];
	if (time < ev.position) {
		return findEvent(evts.slice(0, i), time);
	} else if (time > ev.position) {
		return findEvent(evts.slice(i), time);
	} else {
		return ev;
	}
}

function smpInputResizer(element) {
  $(element).css('width', $(element).val().length * 15); 
}


/*-------------- CHROME CAST --------------*/

initializeApi = function() {
		  cast_api = new cast.Api();
		  cast_api.addReceiverListener("YouTube", onReceiverList);
		};

onReceiverList = function(list) {
  receivers = list;
  castlist = document.getElementById('castlist');
  while (castlist.hasChildNodes()) {
    castlist.removeChild(castlist.lastChild);
  }
  for (i=0; i < list.length; i++) {
        receivernode = document.createElement("li");
        receivernode.innerHTML = '<a href="#" onclick="doLaunch('+i+');">' + list[i].name+'</a>';
        castlist.appendChild(receivernode);

  }
};

doLaunch = function(receiverIndex) {
  var request = new cast.LaunchRequest("YouTube", receivers[receiverIndex]); // tell the clicked-on receiver that we want it to retrieve data from the 'YouTube' receiver app
  request.parameters = "v="+youtubeId; // the parameters that the receiver is to pass to the receiver app.
  request.description = new cast.LaunchDescription();
  request.description.text = "A Chromecasted Youtube Video"; // this can be anything you want; it will be used by the extension so users can see on their desktop what has currently been cast. You'll likely want to pull this from the YouTube Data API
  request.description.url = ytplayer.getVideoUrl(); // this, too, is used as contextual info for the extension, but we can actually retrieve it from the player API since we loaded the video on our browser-based page first
  cast_api.launch(request, onLaunch); // trigger the Chromecast to actually get the video
};

onLaunch = function(activity) {
	console.log(activity);
	if (activity.status == "running") {
		cv_activity = activity;
		document.getElementById('status').innerHTML = "Chromecast Successful!";
		cast_api.addMediaStatusListener(activity.activityId, onMediaStatus);
		cast_api.addMessageListener(activity.activityId, "yt", onMessageReceived);
		document.getElementById('position').innerHTML = castPosition.toFixed(3); 
	}
	else if (activity.status == "error") {
		cv_activity = null;
	}
};

onMediaStatus = function(status) {
	
	if(status.timeProgress) {
		castPosition = status.position;
		document.getElementById('position').innerHTML = castPosition.toFixed(3);
		clearInterval(castTimer);
		castTimer = setInterval(updatePosition, 50);
		}
	else {
		clearInterval(castTimer);
	}

	console.log(status.position);
	console.log(status);
}

onMessageReceived = function(message) {
	console.log(message);
}

stopPlayback = function() {
  if (cv_activity) {
    cast_api.stopActivity(cv_activity.activityId);
  }
};

updatePosition = function() {
	castPosition += 0.050;
	document.getElementById('position').innerHTML = castPosition.toFixed(3);; 

}

castSeek = function (time) { // second
	cast_api.playMedia(cv_activity.activityId, new cast.MediaPlayRequest(time), 0);
}