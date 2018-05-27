function Team (streamer1, streamer2)
{
	this.streamer1 = streamer1;
	this.streamer2 = streamer2;
	this.score = streamer1.score + streamer2.score;

}

Team.prototype.getScore = function(){
	return this.score;
}


Team.prototype.updateScore = function(){
	this.score = streamer1.score + streamer2.score;
}