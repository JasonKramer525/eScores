<?php
$fp = fopen("dashboard.txt", "w");
file_put_contents("text.txt", "");

$names = array("ninja", "KingRichard15", "TSM_Daequan", "Tramear", "Mr. Smile More", "CDNThe3rd", "TheDoritoKilla", "coL%20Hogman", "DolanDark_", "ItsCizzorz", "ValkyraeXD", "xd McCreamy", "xd Zuckles", "ChicaLive", "FaZe%20SpaceLyon ", "KYRSP33DY", "sidearmsbruh", "Ninja", "CourageJD ", " 2xChampion ", " Kraftyyz ", " XxGhostNinja187 ", " DooM%20Bigfoltz ", " Dark ", " Yelo. ", " ImKeithCozart ", " KennySoom ", " OpTic Baldy ", " OpTic Dramas ", " Niick28T ", " NepentehZ ", " 100T%20Nadeshot ", " Kenith ", " ChancesFrost ", " TheJoshOG ", " Typical%20Gamer ", " thiefs ", " BobbyBoJanglles ", " bchillz ", " NotNoahJ456 ", " Avxry ", " FaZe%20Tfue ", " FaZe%20cLoak ", " Nick%20Eh%2030 ", " ONE_shot_gurl ", " ItsMeVikkstar123 ", " TwitchTinny ", " haroldbog17 ", " theburntchipp ", " fazey_banks ", " BOT%20Tênnp0 ", " drlupo ", " imtimthetatman ", " JoogSquad69 ", " Fnatic_Ettnix ", " NICKMERCS ", " SypherPK ", " TheTBNRfrags ", " LachyDachy ", " ComedyShortsDeji ", " Wizzite ", " TSM_Myth ", " TSM_Hamlinz ");

for($i=0;$i<count($names);$i++){
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.fortnitetracker.com/v1/profile/pc/".$names[$i]."/");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'TRN-Api-Key: 8d06d9a4-2e55-45ac-a3aa-dc49e7797ee6'
));
$response = curl_exec($ch);
curl_close($ch);
$fp = fopen("stats.json", "w");
fwrite($fp, $response);
fclose($fp);

$data = json_decode(file_get_contents("stats.json"));
$name = $data->epicUserHandle;
$newest_kills = $data->recentMatches[0]->kills;
$newest_id = $data->recentMatches[0]->id; 
$newest_time = $data->recentMatches[0]->dateCollected; 

echo $newest_id;
file_put_contents("text.txt", "name: ".$name . ", kills: " .$newest_kills .", id: ". $newest_id . ", time: ".$newest_time."\n",FILE_APPEND);


sleep(4);
}
fclose($fp);

?>