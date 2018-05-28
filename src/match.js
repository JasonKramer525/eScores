function Match (game1, game2)
{
	this.game1 = game1;
	this.game2 = game2;
	this.team1Total = game1.team1FinalScore + game2.team1FinalScore;
	this.team2Total = game1.team2FinalScore + game2.team2FinalScore;

}

Match.prototype.getTeam1Total = function(){
	return this.team1Total;
}


Match.prototype.getTeam2Total = function(){
	return this.team2Total;
}