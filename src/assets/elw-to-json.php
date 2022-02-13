<?php

// parsed a csv I created from a list on hymnary.org and convert to json

$file = fopen("elw-hymns.csv","r");

$i = 0;

$lines = [];

while(! feof($file))
{
  $parts = fgetcsv($file);

  $line = ['id'=> $parts[0], 'name'=>$parts[1], 'source'=>$parts[2]];
  $lines[] = $line;

  $i++;
  //if($i > 5)
  //break;
}

$json = json_encode($lines);
//echo $json;
$of = fopen("elw-hymns.json", "w");
fwrite($of, $json);

fclose($of);
fclose($file);
