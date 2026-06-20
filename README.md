# Sistema de Cálculo de IVA, Subtotal y Total en TypeScript

Este proyecto consiste en una aplicación de consola interactiva desarrollada en TypeScript y ejecutada bajo Node.js utilizando el gestor de paquetes pnpm su propósito principal es simular un trabajo en una app de ventas en la que se requiere calcular el subtotal, el Iva, y el total de una compra, cumpliendo con los estándares de diseño modular y separación de responsabilidades.

---

## Estructura del Proyecto y Módulos

El código se encuentra organizado de forma modular para garantizar que la lógica matemática sea completamente independiente de la interfaz de usuario en la terminal:

* **`src/index.ts`**: Actúa como el punto de entrada de la aplicación. Gestiona la interfaz de usuario por consola utilizando el módulo nativo `readline`, capturando las entradas, validando los datos y coordinando el flujo general.
* **`src/modules/calculos/`**: Directorio dedicado exclusivamente a la lógica de negocio matemática (funciones puras):
* **`calculo-subtotal.ts`**: Contiene la función para procesar la lista de precios y acumular el subtotal.
* **`calculo-iva.ts`**: Alberga las funciones para determinar el impuesto, tanto para el IVA estándar del 12% como para tasas personalizadas.
* **`calculo-total.ts`**: Realiza la adición final del subtotal y el impuesto determinado.

---

## Tecnologías y Configuración del Entorno

1. **Entorno de ejecución**: Node.js (v22+)
2. **Lenguaje**: TypeScript
3. **Gestor de paquetes**: pnpm


---

## Instrucciones de Instalación y Ejecución

Siga estos pasos en la terminal para desplegar y probar la aplicación:

1. **Instalar dependencias del entorno:**

    ```bash
    cmd


    PS C:\Tu-carpeta\iva-typescript> pnpm install
    ```

## Datos de Ejemplo Sugeridos para Pruebas

A continuación, se presentan tres conjuntos de datos reales que puede utilizar para probar la precisión matemática y las validaciones del sistema interactivo:

1. **Lista de Compra A (Básica - IVA 12%):** `[150.00, 45.50, 8.25]` Ideal para validar sumas con decimales estándar.
2. **Lista de Compra B (Tecnología - Tasa Especial 5%):** `[1200.00, 350.00]` Ideal para probar impuestos de importación bajos.
3. **Lista de Compra C (Validación de Errores):** `[100.00, -25.00, "texto", 50.00]` Ideal para comprobar que el sistema rechaza datos erróneos.

---

## Guía de Ejecución de un Escenario Real de Prueba

A continuación, se detalla paso a paso cómo interactúa el programa utilizando los datos de la **Lista de Compra A** con la aplicación automática del IVA estándar (12%):

1. Productos a ingresar: Q150.00, Q45.50 y Q8.25.
2. Configuración del Impuesto: No personalizada (Aplica 12% por defecto).

#### Captura del Flujo de Ejecución en Consola:

```bash
Ingrese el monto del producto: 150.00
Q150 agregado
Quiere ingresar otro monto (si/no): si

Ingrese el monto del producto: 45.50
Q45.5 agregado
Quiere ingresar otro monto (si/no): si

Ingrese el monto del producto: 8.25
Q8.25 agregado
Quiere ingresar otro monto (si/no): no

―――――――――――――――――――――――
DETALLE DE LA COMPRA
Montos ingresados: 
- Q150
- Q45.5
- Q8.25
Subtotal: Q203.75
―――――――――――――――――――――――

CONFIGURACIÓN DE IVA
(si decide no ingresar nada se le agregara el 12% de IVA)
Desea ingresar una tasa de impuesto personalizada? (si/no): no

――――――――――――――――――――――――――――――
        RESUMEN FINAL        
――――――――――――――――――――――――――――――
Subtotal:  Q203.75
Impuesto IVA:   Q24.45
――――――――――――――――――――――――――――――
Su total a pagar es:  Q228.20
――――――――――――――――――――――――――――――
```



## Descripción del Diseño, Organización y Conclusiones de las Pruebas

#### 1. Diseño de las Funciones
Las funciones matemáticas (`obtenerSubtotal`, `calcularPorIva`, `calcularPorImpuesto` y `calcularTotal`) fueron diseñadas con la idea de que sean funciones puras, significa que cada una posee una única responsabilidad bien definida, no modifica variables externas y, para un mismo conjunto de parámetros de entrada, siempre retornará exactamente el mismo resultado.

#### 2. Organización por Módulos
Para cumplir con los principios de que sea una aplicacion modular, el proyecto se divide en la capa de presentacion (interfaz de usuario) de la capa de lógica de negocio(operaciones matemáticas):
* **Capa de Presentación (`src/index.ts`):** aqui esta la captura de datos que el usuario escribe en consola, los bucles de preguntas controlados mediante el módulo readline y el control de la consola.
* **Capa de Lógica (`src/modules/calculos/`):** aqui las funciones se separan de forma independiente en archivos que son unica y exclusivamente para eso, funciones (`calculo-subtotal.ts`, `calculo-iva.ts` y `calculo-total.ts`).


#### 3. Conclusiones obtenidas a partir de las Pruebas
Durante las fases de ejecución y pruebas manuales en la terminal de comandos, se obtuvieron las siguientes conclusiones:
1. **Pruebas de datos invalidos:** Al introducir datos que no son validos, el sistema muestra correcciones al usuario, el sistema rechaza datos invalidos y pregunta de forma paulatinamente hasta que se introduce el tipo de dato esperado.

2. **Pruebas de las ecuaciones matematicas:** El comportamiento de cada una de las funciones, es la correcta, procesa los datos y devuelve los valores exactos que se espera. 

3. **Pruebas de cierre de las preguntas:** La implementacion del metodo `rl.close()` empezo dando malos cierres debido a la mala colocacion del metodo en el codigo, pero luego de cambios de posicion el metodo hace que el programa finalice en el momento exacto en el que el usuario obtiene la respuesta visual en la consola, y de esta manera se previene algun tipo de proceso que se quede estatico.
