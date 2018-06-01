angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { player: 'Ninja', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'King Richard', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Dr Lupo', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Timthetatman', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Logan Paul', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'MARTIN', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Romanatwood', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'FaZe Jaomock', wins: 0, losses: 0, kills: 0, deaths: 0 },
    
    { player: 'DJ Akademiks', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Bchillz', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Tory Lanez', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'WrittenByRay', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Nadeshot', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Big T', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Kwebbbelkop', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Idyung', wins: 0, losses: 0, kills: 0, deaths: 0 },
    
    { player: 'Ricegum', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'FaZe Spacelyon', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Chance', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'JoshOG', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Summit1g', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Minikerr', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Dr Disrespect', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Krafty', wins: 0, losses: 0, kills: 0, deaths: 0 },
    
    { player: 'NICKMERCS', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'SypherPK', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Daequan', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'TWG Yanni', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Myth', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Hamlinz', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'FaZe TFUE', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'FaZe Cloakzy', wins: 0, losses: 0, kills: 0, deaths: 0 },
    
       { player: 'Jelly', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Slogoman', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Wroetoshaw', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'TheBurntChip', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'FaZe Banks', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Tempo', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Ice Poseidon', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Mitch Jones', wins: 0, losses: 0, kills: 0, deaths: 0 },
    
       { player: 'Vikkstar123', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Tinnyy', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Muselk', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Lachy', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Nick Eh 30', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'ONE_shot_Gurl', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'GhostNinja', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Chica', wins: 0, losses: 0, kills: 0, deaths: 0 },
    
       { player: 'Fousey', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'coL Hogman', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'ComedyShortsGamer', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Wizz', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Dakotaz', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'CDNThe3rd', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'OpTic Courage', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'TeeP', wins: 0, losses: 0, kills: 0, deaths: 0 },
    
       { player: 'Nick28T', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'NepentheZ', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'KYR SP33DY', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'SideArms', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Typical Gamer', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'SoaR Thief', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'NoahJ456', wins: 0, losses: 0, kills: 0, deaths: 0 },
    { player: 'Avxry', wins: 0, losses: 0, kills: 0, deaths: 0 },
    
    
  ];
  
});