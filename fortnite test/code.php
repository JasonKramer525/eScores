<?php
$data = json_decode(file_get_contents("stats.json"));
$solo = $data->stats->p2;//solos data
$duos = $data->stats->p10;//duos data
$squads = $data->stats->p9;//squads data
$solo_wins = $solo->top1->valueInt;
$duos_wins = $duos->top1->valueInt;
$squads_wins = $squads->top1->valueInt;
$solo_matches = $solo->matches->valueInt;
$duos_matches = $duos->matches->valueInt;
$squads_matches = $squads->matches->valueInt;
$solo_kd = $solo->kd->valueDec;
$duos_kd = $duos->kd->valueDec;
$squads_kd = $squads->kd->valueDec;
$solo_games = $solo->matches->valueInt;
$duos_games = $duos->matches->valueInt;
$squads_games = $squads->matches->valueInt;
$solo_kills = $solo->kills->valueInt;
$duos_kills = $duos->kills->valueInt;
$squads_kills = $squads->kills->valueInt;

$newest_kills = $data->recentMatches[0]->id;//duos data

echo $newest_kills;
?>