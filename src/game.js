function Game (team1, team2)
{
	this.team1 = team1;
	this.team2 = team2;
	team1FinalScore = 0;
	team2FinalScore = 0;

}

Game.prototype.getTeam1 = function(){
	return this.team1;
}

Game.prototype.getTeam2 = function(){
	return this.team2;
}

Game.prototype.finalizeScores = function(){
	this.team1FinalScore = this.team1.score;
	this.team2FinalScore = this.team2.score;
}
