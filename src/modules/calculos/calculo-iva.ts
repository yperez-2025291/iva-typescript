
//resultadoIva va a ser la variable en la que se meta el resultado
//cuando los datos interactuen con esta funcion

/**
 * Calcula el valor del impuesto personalizado a partir del subtotal y una tasa de impuesto.
 * @param tasaImpuesto Un número (number) que representa el porcentaje del impuesto (ej. 12 para el 12%).
 * @param subtotal Un numero (number) con el valor base acumulado de la compra.
 * @returns Un numero (number) con el valor exacto en dinero del impuesto calculado.
 */
export function calcularPorImpuesto (tasaImpuesto: number, subtotal: number): number {
    return (subtotal*(tasaImpuesto/100))
}

/**
 * Proposito: Calcula el valor del IVA estandar en Guatemala (12%) a partir de un subtotal.
 * @param subtotal Un numero (number) que corresponde al precio base total de los productos.
 * @returns Un numero (number) que equivale únicamente al valor del dinero del IVA (12%).
 */
export function calcularPorIva (subtotal: number): number {
    return subtotal * 0.12
}
