<?php
date_default_timezone_set('America/Sao_Paulo');
$datax = json_decode(file_get_contents('php://input'), true);
$token = $datax['token'];
if (isset($token)) {
    if (!empty($token)) {
        if ($token == 'Q!W@ee344%%R') {
            //$response = array('success' => true, 'message' => 'ok');
            // echo json_encode($response);

            // Conectar ao banco de dados		
            //require '../bancocasa.php';
            require '../mydb.php';
            try {
                $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                // Receber os dados do aplicativo
                $data = json_decode(file_get_contents('php://input'), true);
                $email = $data['email'];
                $nome = $data['nome'];
                $senha = $data['senha'];
                $imagem = $data['imagem'];
                // Inserir os dados na tabela 'usuario'
                $sql = "INSERT INTO usuario (email, nome, senha, imagem) VALUES (:email, :nome, :senha, :imagem)";
                $stmt = $pdo->prepare($sql);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':nome', $nome);
                $stmt->bindParam(':senha', $senha);
                $stmt->bindParam(':imagem', $imagem);
                $stmt->execute();
                // Retornar uma resposta ao aplicativo
                $response = array('success' => true, 'message' => 'bom dia');
                echo json_encode($response);
            } catch (PDOException $e) {
                // Em caso de erro, retornar uma mensagem de erro
                $response = array('success' => false, 'message' => 'Erro ao salvar: ' . $e->getMessage());
                echo json_encode($response);
            }

            // Fecha a conexão com o banco de dados
            $conn->close();
        } else {
            $response = array('success' => true, 'message' => 'Nok_1');
            echo json_encode($response);
        }
    }
} else {
    $response = array('success' => false, 'message' => 'Nok_2');
    echo json_encode($response);
}
