import { obtenerSubtotal } from './modules/calculos/calculo-subtotal.js'
import { calcularPorImpuesto, calcularPorIva } from './modules/calculos/calculo-iva.js'
import { calcularTotal } from './modules/calculos/calculo-total.js'

import * as readline from 'readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calculosIva(): void {
    const montos: number[] = []

    function preguntarMonto(): void {
        rl.question('Ingrese el monto del producto: ', (montoProducto) => {
            const monto = parseFloat(montoProducto)

            if (isNaN(monto)) {
                console.log('Monto no valido');
                preguntarMonto();
                return
            } else if (monto <= 0) {
                console.log('Debes ingresar un numero positivo')
                preguntarMonto();
                return
            } else {
                montos.push(monto)
                console.log(`Q${monto} agregado`)
            }

            rl.question('Quiere ingresar otro monto (si/no): ', (respuesta) => {
                const respuestaOtroMonto = respuesta.toLowerCase().trim()

                if (respuestaOtroMonto === "si") {
                    preguntarMonto()
                } else if (respuestaOtroMonto === "no") {
                    
                    const subtotal = obtenerSubtotal(montos)
                    
                    console.log('―――――――――――――――――――――――')
                    console.log('DETALLE DE LA COMPRA')
                    console.log('Montos ingresados: ')
                    montos.forEach(m => console.log(`- Q${m}`))
                    console.log(`Subtotal: Q${subtotal}`)
                    console.log('―――――――――――――――――――――――')


                    preguntarImpuesto(subtotal)

                } else {
                    console.log('Debe ingresar una respuesta valida (si/no).`');
                    preguntarMonto();
                }
            })
        })
    }

    function preguntarImpuesto(subtotal: number): void {
        let resultadoIva = 0
        
        console.log('CONFIGURACIÓN DE IVA');
        rl.question('(si decide no ingresar nada se le agregara el 12% de IVA)\nDesea ingresar una tasa de impuesto personalizada? (si/no):', (respuesta2) => {
            const respuestaTasa = respuesta2.toLowerCase().trim()

            if (respuestaTasa === "si") {
                rl.question('Ingrese la tasa de impuesto (ej. 8 para el 8%): ', (tasaIva) => {
                    const tasaImpuesto = parseFloat(tasaIva)

                    if (isNaN(tasaImpuesto) || tasaImpuesto < 0) {
                        console.log('Su tasa no es valida, se cancela el calculo.');
                        rl.close();
                        return;
                    }

                    resultadoIva = calcularPorImpuesto(tasaImpuesto, subtotal)
                    mostrarReporteFinal(subtotal, resultadoIva)
                })
            } else if (respuestaTasa === "no") {
                
                resultadoIva = calcularPorIva(subtotal)
                mostrarReporteFinal(subtotal, resultadoIva)
            } else {
                console.log('Su respuesta no es valida, por favor intentelo de nuevo.');
                preguntarImpuesto(subtotal);
            }
        })
    }

    function mostrarReporteFinal(subtotal: number, iva: number): void {
        const totalFinal = calcularTotal(subtotal, iva)

        console.log('\n――――――――――――――――――――――――――――――')
        console.log('        RESUMEN FINAL        ')
        console.log('――――――――――――――――――――――――――――――')
        console.log(`Subtotal:  Q${subtotal.toFixed(2)}`)
        console.log(`Impuesto IVA:   Q${iva.toFixed(2)}`)
        console.log('――――――――――――――――――――――――――――――')
        console.log(`Su total a pagar es:  Q${totalFinal.toFixed(2)}`)
        console.log('――――――――――――――――――――――――――――――\n')
        
        rl.close()
    }

    preguntarMonto();
}

calculosIva();
