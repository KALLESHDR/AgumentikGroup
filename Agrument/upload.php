<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
// Rest of the PHP code...

// File upload directory
$uploadDir = 'Agrument/**
 * 
 */';

// Check if a file was uploaded
if(isset($_FILES['file-upload'])) {
    $file = $_FILES['file-upload'];

    // Extract file details
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileError = $file['error'];
    $fileType = $file['type'];

    // Handle file errors
    if ($fileError !== UPLOAD_ERR_OK) {
        $response = array(
            'success' => false,
            'message' => 'Error uploading photo'
        );
        echo json_encode($response);
        exit();
    }

    // Generate a unique filename
    $uniqueName = uniqid() . '_' . $fileName;

    // Construct the file path
    $filePath = $uploadDir . $uniqueName;

    // Move the uploaded file to the desired location
    if (move_uploaded_file($fileTmpName, $filePath)) {
        $response = array(
            'success' => true,
            'filePath' => $filePath
        );
        echo json_encode($response);
    } else {
        $response = array(
            'success' => false,
            'message' => 'Error uploading photo'
        );
        echo json_encode($response);
    }
} else {
    $response = array(
        'success' => false,
        'message' => 'No file uploaded'
    );
    echo json_encode($response);
}
?>
