<?php
// Read tasks from the text file and display them in the HTML list
$file = "tasks.txt";
if (file_exists($file)) {
    $tasks = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($tasks as $task) {
        echo "<li>$task <button class='delete-button' onclick='removeTask(this)'>Delete</button></li>";
    }
}
?>
