<?php
// Conectar ao banco de dados
//date_default_timezone_set('America/Sao_Paulo');
$datax = json_decode(file_get_contents('php://input'), true);
$token = $datax['token'];
if (isset($token)) {
    if (!empty($token)) {
        if ($token === 'Q!W@ee344%%R') {
            require '../mydb.php';
            $conn = new mysqli($host, $username, $password, $dbname);
            // Verifica se a conexão foi estabelecida com sucesso
            if ($conn->connect_error) {
                die("Conexão falhou: " . $conn->connect_error);
            }
            // Receber os dados do aplicativo
            $data = json_decode(file_get_contents('php://input'), true);
            $usuario = $data['usuario'];
            $senha = $data['senha'];

            // Inserir os dados na tabela 'usuario'
            $sql = " SELECT * FROM usuario WHERE `nome` = '" . $usuario . "' OR `email` = '" . $usuario . "' and `senha` = '" . $senha . "' ";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                // Array para armazenar os resultados da consulta
                $usuarios = array();
                // Loop pelos resultados da consulta
                while ($row = $result->fetch_assoc()) {
                    //print_r($row);
                    // $usuarios[] = $row;
                    // Converter o valor da coluna 'id' para inteiro
                    $row['id'] = intval($row['id']);
                    // Adicionar os dados do usuário ao array
                    $usuarios[] = $row;
                }
                //print_r($usuarios);
                // $json_data = json_encode($data, JSON_PRETTY_PRINT);
                // Retorna os resultados como JSON
                header('Content-Type: application/json');
                echo  json_encode($usuarios, JSON_PRETTY_PRINT);
            } else {
                // Se não houver resultados, retorna uma mensagem de erro
                echo "Nenhum usuário encontrado.";
                echo  json_encode($usuarios, JSON_PRETTY_PRINT);
            }
            // Fecha a conexão com o banco de dados
            $conn->close();
        } else {
            $response = array('success' => true, 'message' => 'Nok_1');
            echo json_encode($response);
        }
    }
} else {
    $response = array('success' => true, 'message' => 'Nok_2');
    echo json_encode($response);
}
