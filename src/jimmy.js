var ninja = new Streamer("Ninja", "Ninja.com");
var brendan = new Streamer("Brendan", "Brendino.com");
var brup = new Streamer("Brupis", "Brupis.gov")
var jason = new Streamer("Jason", "Brupis.gov")


console.log(ninja.getName());
console.log(brendan.getName());

var teamWinners = new Team(ninja, brendan);

console.log(teamWinners.getStreamer1());
console.log(brendan.getScore());