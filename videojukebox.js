const {exec} = require("child_process");

let currentprocess = false;

function killprocess(){
	if(currentprocess){
		console.log("killing");
		currentprocess.stdin.write('q');
//		var result = currentprocess.kill('SIGINT');
//		console.log(result);
		currentprocess = false;
	}
}

function playvideoonce(videofile, callback){
	killprocess();
	currentprocess = exec("omxplayer "+videofile, (error, stdout, stderr) => {
		currentprocess = false;
		if(error){
			console.log(`error: ${error.message}`);
			return;
		}
		if(stderr){
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		if(callback){
			callback();
		}
	});
	console.log(currentprocess.pid);
}

function playvideoloop(videofile){
	killprocess();
	currentprocess = exec("omxplayer --loop "+videofile, (error, stdout, stderr) => {
		currentprocess = false;
		if(error){
			console.log(`error: ${error.message}`);
			return;
		}
		if(stderr){
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
	console.log(currentprocess.pid);
}

playvideoloop("blank.mp4");

setTimeout(function(){
	playvideoonce("video.mp4");
//	killprocess();
}, 3000);

