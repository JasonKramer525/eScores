function Match (game1, game2)
{
	this.game1 = game1;
	this.game2 = game2;
	this.team1Total = game1.team1.score + game2.team1.score;
	this.team2Total = game1.team2.score + game2.team2.score;

}

Match.prototype.getTeam1Total = function(){
	return this.team1Total;
}


Match.prototype.getTeam2Total = function(){
	return this.team2Total;
}