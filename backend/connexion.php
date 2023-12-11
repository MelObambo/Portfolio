<?php
require('config.php');

function getConnexion(){
    try {
        return new PDO(DB_TYPE . ':host=' . HOST . ";dbname=" . DB, USER? PASSWORD);
    } catch (PDOException $e) {
        echo "Problème de connexion à la base.";
    }
}
?>