/**
 * Proposito: Calcula el subtotal de una compra a partir de una lista de montos ingresados.
 * @param montos Es un arreglo de numeros que contiene precios ingresados.
 * @returns Un numero (number) que representa la suma total neta (el subtotal) de la compra.
 */
export function obtenerSubtotal(montos: number[]): number {
    let subtotal = 0;
    
    for (let i = 0; i < montos.length; i++) {
        const montoActual = montos[i];
        if (montoActual !== undefined) {
            subtotal = subtotal + montoActual;
        }
    }
    
    return subtotal;
}
