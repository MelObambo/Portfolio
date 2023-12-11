<?php
require('../connexion.php');

public function getProjects(){
    $connexion = getConnexion();
    $req = $connexion->prepare("SELECT * FROM Project");
    $req->execute();
    $res = $req->fetchAll;

    return $res;
}
?>