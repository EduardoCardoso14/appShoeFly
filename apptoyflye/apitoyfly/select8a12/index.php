<?php
require '../mydb.php';
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
$sql = "SELECT * FROM produtos where idade='8a12' order by id desc";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $produtos = array();
    while ($row = $result->fetch_assoc()) {
        $row['id'] = intval($row['id']);
        $produtos[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($produtos, JSON_PRETTY_PRINT);
} else {
    echo "Nenhum produto encontrado.";
}
$conn->close();
