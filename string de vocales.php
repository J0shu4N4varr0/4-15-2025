<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Asignar un string
let palabra = "programacion";

// Contar cuántas vocales tiene
let cantidadVocales = (palabra.match(/[aeiou]/gi) || []).length;
console.log("Cantidad de vocales:", cantidadVocales);

// Reemplazar vocales por números
let palabraModificada = palabra.replace(/a|e|i|o|u/gi, function(vocal) {
    switch (vocal.toLowerCase()) {
        case 'a': return '1';
        case 'e': return '2';
        case 'i': return '3';
        case 'o': return '4';
        case 'u': return '5';
    }
});

console.log("Palabra modificada:", palabraModiada);
    </script>
</body>
</html>
