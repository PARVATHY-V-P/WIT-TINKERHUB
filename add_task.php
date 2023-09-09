<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the task text from the form
    $taskText = $_POST["taskText"];

    // Prevent empty tasks from being added
    if (!empty($taskText)) {
        // Add the task to a text file (you can use a database for better scalability)
        $file = "tasks.txt";
        file_put_contents($file, $taskText . PHP_EOL, FILE_APPEND);
    }
}

// Include PHP code to display tasks and return the updated task list
include "display_tasks.php";
?>
