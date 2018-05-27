let ninja = new Streamer("Ninja", "Ninja.com");
let brendan = new Streamer("Brendan", "Brendino.com");
console.log(ninja.getName());
console.log(brendan.getName());

let teamWinners = new Team(ninja, brendan);

console.log(teamWinners.getStreamer1());
console.log(brendan.getScore());