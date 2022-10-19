<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab9/2</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>
<style>
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    form label,
    input {
        margin: 10px;
    }

    .form-control {
        display: inline-block;
    }
</style>

<body>
    <div class="container-fluid">
        <h1>Employee Form</h1>
        <form method="POST">
            <label>ID : </label><input name="ID" type="number" class="form-control" style="width: 10%;"><br>
            <label>Name : </label><input name="Name" type="text" class="form-control" style="width: 20%;"><br>
            <label>Age : </label><input name="Age" type="number" class="form-control" style="width: 5%;"><br>
            <label>Salary : </label><input name="Salary" type="number" class="form-control" style="width: 10%;"><br>
            <label>Address : </label><textarea name="Address" rows="4" class="form-control" style="width: 20%;"></textarea><br>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <h1>List of Employees</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <?php
            class MyDB extends SQLite3
            {
                function __construct()
                {
                    $this->open('company.db');
                }
            }
            $db = new MyDB();
            $sql = <<<EOF
      CREATE TABLE COMPANY
      (ID INT PRIMARY KEY     NOT NULL,
      NAME           TEXT    NOT NULL,
      AGE            INT     NOT NULL,
      ADDRESS        CHAR(50),
      SALARY         REAL);
    EOF;
            if (isset($_POST['ID'])) {
                $id = $_POST['ID'];
            }
            if (isset($_POST['Name'])) {
                $name = $_POST['Name'];
            }
            if (isset($_POST['Age'])) {
                $age = $_POST['Age'];
            }
            if (isset($_POST['Salary'])) {
                $salary = $_POST['Salary'];
            }
            if (isset($_POST['Address'])) {
                $address = $_POST['Address'];
                $sql = <<<EOF
                INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
                VALUES ($id,'$name',$age,'$address',$salary);
                EOF;
                $ret = $db->exec($sql);
            }
            
            $sql = "SELECT * from COMPANY";

            $ret = $db->query($sql);
            while ($row = $ret->fetchArray(SQLITE3_ASSOC)) {
                echo "
                <tr>
                <td>" . $row['ID'] . "</td>
                <td>" . $row['NAME'] . "</td>
                <td>" . $row['AGE'] . "</td>
                <td>" . $row['ADDRESS'] . "</td>
                <td>" . $row['SALARY'] . "</td>
                </tr>
                ";
            }
            // $sql = "DELETE from COMPANY where ID = 3";
            // $ret = $db->exec($sql);
            ?>
        </table>
    </div>
</body>

</html>