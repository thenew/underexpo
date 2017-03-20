<?php
function l($letter) {
    $_GET['letter'] = $letter;
    include 'assets/svg/letter.php';
}