<?php 
require('../config.php');

namespace TI;
use App/Config;

$req = $connexion->prepare("SELECT * FROM Technology_Intelligence");
$req->execute();
$res = $req->fetchAll;
?>