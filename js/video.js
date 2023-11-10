var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	
	console.log(video.volume);
	console.log(video.paused);
	if(!video.paused){
		console.log("in loop should be false", video.paused);
		document.querySelector("#slider").value = video.volume;
		
		console.log("test");

	}
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
	// video.paused = false;



});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("before",video.paused);
	video.pause();
	// video.paused = true;
	console.log("after", video.paused);


})
document.querySelector("#slower").addEventListener("click", function(){
	console.log("og playbackrate before slower",video.playbackRate)
	video.playbackRate = video.playbackRate * 0.9;
	console.log("new playbackrate after slower",video.playbackRate);

})
document.querySelector("#faster").addEventListener("click", function(){
	console.log("og playbackrate before faster",video.playbackRate);
	video.playbackRate = video.playbackRate * 1.1;
	console.log("new playbackrate after faster",video.playbackRate);

})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("before skip", video.currentTime);
	if (video.ended | video.currentTime == video.duration){
		video.currentTime = 0;
		console.log("at end of video so back to start");
	}
	else{
		video.currentTime += 10;

	}
	console.log("after skip", video.currentTime)
	
})

document.querySelector("#slider").addEventListener("change", function(){
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log("orginal volume", video.volume);
	video.volume = document.querySelector("#slider").value / 100;
	console.log("after change volume", video.volume);
	
})
document.getElementById("vintage").addEventListener("click", function(){
	video.className = "oldSchool";

})
document.getElementById("orig").addEventListener("click", function(){
	video.className = "video";

})


// mute
document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"

	}
	


})

