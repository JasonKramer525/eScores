function Team (streamer1, streamer2)
{
	this.streamer1 = streamer1;
	this.streamer2 = streamer2;
	this.score = streamer1.score + streamer2.score;

}

Team.prototype.getStreamer1 = function(){
	return this.streamer1;
}

Team.prototype.getStreamer2 = function(){
	return this.streamer2;
}

Team.prototype.getScore = function(){
	return this.score;
}


Team.prototype.updateScore = function(){
	this.score = streamer1.score + streamer2.score;
}