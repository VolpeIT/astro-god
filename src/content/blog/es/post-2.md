---
path: "ciencia-de-computadoras"
h1: "Conceptos de ciencia de computadoras"
h2: "a"
---

# Ciencia de computadoras REAL

## Prólogo

A lo largo de este ensayo vamos a usar de ejemplo a C y, en algunos casos, a Rust.
<br>
La idea es ver todo aplicado a código real y no con números en el aire como se hace en las instituciones convencionales.<br>

Voy a intentar ser lo más conciso y preciso posible. No es un blog dirigido a personas que no hayan tenido previamente ningún acercamiento al mundo IT, por lo que aconsejo discreción.

## Bytes

1 byte son 8 bits.<br>
Las siguientes son las medidas que más vamos a utilizar:

<table border="1" style="max-width: 50%;">
  <thead>
    <tr>
      <th>Bits</th>
      <th>Bytes</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>8</td><td>1</td></tr>
    <tr><td>16</td><td>2</td></tr>
    <tr><td>32</td><td>4</td></tr>
    <tr><td>64</td><td>8</td></tr>
  </tbody>
</table>

## Tipos

Para poder usar estos bytes, los distintos lenguajes de programación nos proveen con tipos que, si bien pueden variar de nombre, la idea detrás es la misma.

`signed / i = con signo (positivos y negativos)`<br>
`unsigned / u = sin signo (solo positivos)`

<table border="1">
  <thead>
    <tr>
      <th>Bytes</th>
      <th>C</th>
      <th>C (sin signo)</th>
      <th>Rust</th>
      <th>Rust (sin signo)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>1</td>
        <td>char</td>
        <td>unsigned char</td>
        <td>i8</td>
        <td>u8</td>
    </tr>
    <tr>
        <td>2</td>
        <td>short</td>
        <td>unsigned short</td>
        <td>i16</td>
        <td>u16</td>
    </tr>
    <tr>
        <td>4</td>
        <td>int</td>
        <td>unsigned int</td>
        <td>i32</td>
        <td>u32</td>
    </tr>
    <tr>
        <td>8</td>
        <td>long</td>
        <td>unsigned long</td>
        <td>i64</td>
        <td>u64</td>
    </tr>
  </tbody>
</table>

## Representación

Para indicarle al lenguaje que estamos representando un binario, lo indicamos con un 0b delante.<br>
"B" significa binario.

Por ejemplo:

```c
// C
char ocho_bits = 0b00000000;   // 0
```

```rs
// Rust
i8 ocho_bits = 0b0000_0000; // algunos lenguajes permiten el uso de "_" para mejor legibilidad
```

El primer bit en los números con signo indica que el valor será positivo (0) o negativo (1).
<br>
Nótese que, con la misma lógica en la que los números positivos empiezan en 0 y el 1 indica los valores que se "cuentan", en los negativos funciona de la manera opuesta.
<br>
También se debe considerar que, como el -0 no existe (comúnmente), el límite positivo (número máximo) será siempre 1 menos que el límite negativo (número mínimo).

```rs
// Rust
i8 max_i8    = 0b0111_1111; // 127
i8 dos       = 0b0000_0010; // 2
i8 uno       = 0b0000_0001; // 1
i8 cero      = 0b0000_0000; // 0
i8 menos_uno = 0b1111_1111; // -1
i8 menos_dos = 0b1111_1110; // -2
i8 min       = 0b1000_0000; // -128

u8 max_u8 = 0b1111_1111; // 255
u8 min_u8 = 0b0000_0000; // 0
```

La cantidad de números posibles a representar es 2n, siendo "n" la cantidad de bits.
<br>
Como son 8 bits, sería: 28 -> 256.
<br>
En el caso de los unsigned, es 255 + el cero.
<br>
En el caso de los signed, es 128 + 127 + el cero.
