<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.fortnitetracker.com/v1/profile/pc/Ninja/");
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
?>