<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab8/1</title>
</head>
<style>
    form {
        display: flex;
        justify-content: center;
        margin-top: 20%;
    }

    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    .text-box {
        display: inline-block;
        position: relative;
        border: 1px solid rgb(118, 118, 118);
        /* padding: 9px 165px 9px 0px; */
        border-radius: 2px;
        max-width: 165px;
        min-width: 165px;
        min-height: 20px;
        max-height: 20px;
        top: 7px;
    }

    button {
        margin-top: 10px;
    }

    button:hover {
        cursor: pointer;
    }
</style>

<body>
    <form action="index.php" method="POST">
        <div>
            <div class="topp">
                <label>From :</label>
                <select id="from" name="from">
                    <option value="THB">THB</option>
                    <option value="JPY">JPY</option>
                    <option value="CNY">CNY</option>
                    <option value="SGD">SGD</option>
                    <option value="USD">USD</option>
                </select>
                <input type="number" name="money" id="money"><br>
            </div>
            <div class="bottom" id="bottom"><label id="to_text">To : </label>
                <select id="to" name="to">
                    <option value="THB">THB</option>
                    <option value="JPY">JPY</option>
                    <option value="CNY">CNY</option>
                    <option value="SGD">SGD</option>
                    <option value="USD">USD</option>
                </select>
                <div class="text-box" name="ans" id="ans"></div>
            </div>
            <button type="submit" id="button">Convert</button>
        </div>
    </form>
    <?php
    $url = "http://10.0.15.20/lab8/restapis/currencyrate";
    $response = file_get_contents($url);
    $result = json_decode($response);
    $rate = $result->rates;

    if (isset($_POST['from'])) {
        $money_from = $_POST['from'];
        $from = $rate->$money_from;

        $money = $_POST['money'];

        $money_to = $_POST['to'];
        $to = $rate->$money_to;
    }

    ?>
    <script>
        document.getElementById("ans").innerHTML = "<?php echo round($money / $from * $to, 2) ?>";
        document.getElementById("from").value = "<?php echo $money_from ?>"
        document.getElementById("to").value = "<?php echo $money_to ?>"
        document.getElementById("money").value = "<?php echo $money ?>"
        document.getElementById("to").style = "position:relative;top:7px;height:18.5px;"
        document.getElementById("to_text").style = "position:relative;top:7px;"
        document.getElementById("button").style = "position:relative;top:5px"
    </script>
</body>

</html>