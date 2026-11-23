# El Motor del Barrio - Domicilios
Programa que guarda registros de domicilios, saca reportes, encuentra clientes frecuentes y explica el costo de cada operación.

# CELULA : UBUNTU
## Julian Guanume
## Valentia Garcia
## Felipe Bedoya

## TABLA DE COSTOS
| Función | Big O | Por qué |
| --- | --- | --- |
| `totalGeneral` | O(n) | Recorre los registros una sola vez |
| `promedio` | O(n) | Llama a `totalGeneral` y luego divide |
| `registroMayor` | O(n) | Un recorrido comparando contra el mayor actual |
| `filtrarPorCategoria` | O(n) | Un recorrido guardando los que coinciden |
| `totalesPorCategoria` | O(n) | Un recorrido; sumar en el objeto es directo |
| `personasUnicas` | O(n) | Un recorrido; agregar a un Set es directo |
| `recurrentesLento` | O(n²) | Por cada registro recorre todos los demás |
| `recurrentesRapido` | O(n) | Un recorrido; el Set responde "¿ya lo vi?" sin recorrer |
| `categoriaEstrella` | O(n) | Un recorrido contando con un Map |
| `parQueSuma` | O(n²) | Por cada registro prueba con los que le siguen |