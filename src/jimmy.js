jimmy = 0;
while(jimmy < 25)
{
	jimmy++;
	sleep(1000);
	console.log(jimmy);

	
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

