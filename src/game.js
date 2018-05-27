function Game (team1, team2)
{
	this.team1 = team1;
	this.team2 = team2;

}

Game.prototype.getTeam1Score = function(){
	return this.team1.score;
}


Game.prototype.getTeam2Score = function(){
	return this.team2.score;
}