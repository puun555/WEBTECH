<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab8/3</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap" rel="stylesheet">
</head>

<style>
    * {
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #202020;
        height: 100vh;
    }

    .card {
        background: #eee;
        border-radius: 10px;
        height: 90vh;
        width: 60vh;
    }

    .card div {
        display: flex;
        justify-content: center;
    }

    img {
        margin-top: 10%;
        width: 70%;
        border-radius: 10px;
        border: 3px solid black;
    }
    h2{
        margin: 4% 0;
    }
    .underline{
        border-bottom: 2px solid #585858;
        width: 90%;
        margin-left: 5%;
    }
    .instruction{
        margin: 4% 6%;
    }
    p{
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;   
    }
    .bottom{
        margin-top: 2%;
    }
    button{
        padding: 0 1%;
        border: 0px;
        background-color: #323232;
        color: #eee;
        border-radius: 10px;
        transition: 0.2s linear;
    }
    button:hover{
        cursor: pointer;
        background-color: #464646;
    }
    #refresh:hover{
        cursor: pointer;
        opacity: 60%;
    }
    #refresh{
        width: 10%;
        transition: 0.2s linear;
    }
    a{
        display: flex;
        text-decoration: none;
    }
</style>

<body>
    <div class="card">
        <div>


            <?php
            $url = "https://www.themealdb.com/api/json/v1/1/random.php";
            $response = file_get_contents($url);
            $result = json_decode($response);
            $meal = $result->meals[0];

            echo "
            <img src=\"$meal->strMealThumb\">
        </div>
        <div>
            <h2>$meal->strMeal</h2>
        </div>
        <div class=\"underline\">
        </div>
        <div class=\"instruction\">
            <p>$meal->strInstructions</p>
        </div>
        <div class=\"bottom\">
            <a href=\"index.php\" id=\"refresh\">
                <img src=\"https://cdn.discordapp.com/attachments/884472367210967072/1027530965347737640/unknown.png\">
            </a>
            <a href=\"$meal->strSource\">
                <button>Learn more</button>
            </a>
        </div>
    </div>";
        ?>
        </body>
        
        </html>