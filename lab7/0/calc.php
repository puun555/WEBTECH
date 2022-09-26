<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if (isset($_POST['inpvalue'])) {
            $number = $_POST['inpvalue'];
            $v = intval($number);
            for ($i = 1; $i <= 12; $i++) {
                $multi = ($v * $i);
                echo "$v x $i = $multi <br>";
            }
        }
    ?>
</body>
</html>