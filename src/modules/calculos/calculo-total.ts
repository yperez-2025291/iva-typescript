/**
 * Proposito: Calcula el monto final exacto de la compra sumando de forma combinada el subtotal y el iva.
 * @param subtotal Un numero (number) con el valor base de la compra sin impuestos.
 * @param iva Un numero (number) con el valor del impuesto previamente calculado.
 * @returns Un numero (number) que representa el total definitivo que el cliente debe pagar.
 */
export function calcularTotal (subtotal: number, iva: number): number {
    return subtotal + iva
}
