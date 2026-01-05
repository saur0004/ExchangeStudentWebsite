<?php
try {
    $dbPath = __DIR__ . '/database/database.sqlite';
    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // List all tables
    $tables = $pdo->query("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")->fetchAll(PDO::FETCH_COLUMN);

    if (empty($tables)) {
        echo "No tables found in the database.\n";
    } else {
        echo "Tables found:\n";
        foreach ($tables as $table) {
            $count = $pdo->query("SELECT COUNT(*) FROM \"$table\"")->fetchColumn();
            echo "- $table: $count rows\n";
        }
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
