<?php
try {
    $dbPath = __DIR__ . '/database/database.sqlite';
    if (!file_exists($dbPath)) {
        echo "Error: Database file not found at $dbPath\n";
        exit(1);
    }
    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully to SQLite database!\n";
    $result = $pdo->query("SELECT name FROM sqlite_master WHERE type='table'")->fetchAll();
    echo "Tables found: " . count($result) . "\n";
    foreach ($result as $row) {
        echo "- " . $row['name'] . "\n";
    }
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage() . "\n";
    exit(1);
}
