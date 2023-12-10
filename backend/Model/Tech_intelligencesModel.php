<?php 
require('../connexion.php');

public function getTechIntelligences(){
    $connexion = getConnexion();
    $req = $connexion->prepare("SELECT * FROM Technology_Intelligence");
    $req->execute();
    $res = $req->fetchAll;

    return $res;
}
?>