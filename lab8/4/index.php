<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab8/4</title>
</head>

<style>
    body{
        background-color: #eee;
    }
    img{
        width: 150px;
    }
</style>

<body>
    <?php
    $url = "http://10.0.15.20/lab8/restapis/10countries";
    $response = file_get_contents($url);
    $result = json_decode($response);
    
    foreach ($result as $country){
        $location = $country->latlng;
        $border = $country->borders;
        echo "<div style=\"display:flex\"><div style=\"flex:17%\">
        Name : $country->name<br>
        Capital : $country->capital<br>
        Population : $country->population<br>
        Region : $country->region<br>
        Location : ";
        foreach ($location as $location){
            echo " $location";
        }
        echo "<br>Borders : ";
        foreach ($border as $border){
            echo " $border";
        }
        echo "</div><div style=\"flex:83%\"><img src=\"$country->flag\"></div></div><br><br>";
    }
    ?>
</body>
</html>
