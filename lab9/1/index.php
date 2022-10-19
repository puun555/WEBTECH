<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab9/1</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">
</head>
<style>
    * {
        font-family: 'Kanit', sans-serif;
    }
</style>

<body>
    <div class="container-fluid mt-5">
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>

            <?php
            class MyDB extends SQLite3
            {
                function __construct()
                {
                    $this->open('customers.db');
                }
            }

            $db = new MyDB();

            $sql = "SELECT * from customers";

            $ret = $db->query($sql);
            while ($row = $ret->fetchArray(SQLITE3_ASSOC)) {
                echo "
            <tr>
            <td>" . $row['CustomerId'] . "</td>
            <td>" . $row['FirstName'] . " " . $row['LastName'] . "</td>
            <td>" . $row['Address'] . "</td>
            <td>" . $row['Phone'] . "</td>
            <td>" . $row['Email'] . "</td>
            </tr>";
            }
            while ($row = $ret->fetchArray(SQLITE3_ASSOC)) {
                $last = $row['CustomerId'];
            }
            $sql = "DELETE from customers where CustomerId = $last";
            $ret = $db->exec($sql);
            ?>
        </table>
        <form action="index.php">
            <button type="submit" class="btn btn-primary mb-5">Delete last row</button>
        </form>
    </div>
</body>

</html>