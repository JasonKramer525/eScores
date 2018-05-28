function Streamer (name, link, gameName)
{
	this.name = name;
	this.link = link;
	this.gameName = gameName;
	this.score = 0;

}

Streamer.prototype.getName = function(){
	return this.name;
}

Streamer.prototype.getLink = function(){
	return this.link;
}

Streamer.prototype.getGameName = function(){
	return this.getGameName;
}

Streamer.prototype.getScore = function(){
	return this.score;
}

Streamer.prototype.setScore = function(score){
	this.score = score;
}

Streamer.prototype.scoreInc = function(){
	this.score = this.score + 1;
}

Streamer.prototype.scoreReset = function(){
	this.score = 0;
}