<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu - Food HUB</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Food HUB</h1>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="order.php">Order</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Our Menu</h2>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Order</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Connect to the database
                $conn = mysqli_connect('localhost', 'username', 'password', 'database_name');

                // Query the menu items
                $query = "SELECT * FROM menu";
                $result = mysqli_query($conn, $query);

                // Display each menu item
                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<tr>";
                    echo "<td>" . $row['item'] . "</td>";
                    echo "<td>" . $row['description'] . "</td>";
                    echo "<td>" . $row['price'] . "</td>";
                    echo "<td><a href='order.php?item=" . urlencode($row['item']) . "' class='button'>Order</a></td>";
                    echo "</tr>";
                }

                // Close the database connection
                mysqli_close($conn);
                ?>
            </tbody>
        </table>
    </main>
    <footer>
        <p>&copy; 2023 Food HUB</p>
    </footer>
</body>
</html>