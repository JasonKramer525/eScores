angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { player: '	FaZe TFUE	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	FaZe Cloakzy	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Typical Gamer	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	SoaR Thief	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	GhostNinja	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Big Foltz	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	iRunYew	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	AgholorTV	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	DJ Akademiks	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Bchillz	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Nick28T	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	BobbyBoJanglles	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Daequan	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	TWG Yanni	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Nick Eh 30	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	ONE_shot_Gurl	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	DolanDark	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Nopeifyaltalt	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	KYR SP33DY	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	SideArms	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Kwebbbelkop	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Idyung	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Jelly	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Svennos	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Aimtbotcalvin	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	King Richard	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	NICKMERCS	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	SypherPK	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Logan Paul	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	MARTIN	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	FaZe Banks	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Tennpo	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Ninja	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Dr Lupo	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Myth	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Hamlinz	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Wroetoshaw	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	TheBurntChip	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Vikkstar123	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Tinnyy	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	TBNRfrags	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Lachy	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Chance	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	JoshOG	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	JoogSquad	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Fnatic Ettnix	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	RLGRIME	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	FaZe Jaomock	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Nadeshot	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Kenith	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Pamaj	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Salty	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	ComedyShortsGamer	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Wizz	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Fousey	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	coL Hogman	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Chica	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	FaZe Spacelyon	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	FaZe Cizzorz	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Valkyrae	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	NoahJ456	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Avxry	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Dakotaz	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
{ player: '	Yelo	', wins: 	0	, losses: 	0	, kills: 	0	, deaths: 	0	},
    
  ];
  
});