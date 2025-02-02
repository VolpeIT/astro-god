---
path: "como-hacer"
h1: "Cómo Hacer Todo lo Que Quieras LOL"
h2: "Una Guía para Alcanzar tus Sueños"
---

# Cómo Hacer Todo lo Que Quieras LOL

## Una Guía para Alcanzar tus Sueños

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

**Texto en negrita**  
_Texto en cursiva_  
~~Texto tachado~~

> Ejemplo de cita.

1. Elemento ordenado 1
2. Elemento ordenado 2
3. Elemento ordenado 3

- Elemento no ordenado 1
- Elemento no ordenado 2
- Elemento no ordenado 3

<abbr title="Abbreviation">Abbr.</abbr>
<strong>Negrita (strong)</strong> <b>Negrita (b)</b>
<i>Cursiva (i)</i> <em>Cursiva enfatizada (em)</em> <cite>Cita (cite)</cite>
<del>Eliminado (del)</del>
<ins>Insertado (ins)</ins>
<kbd>Ctrl + S</kbd>
<mark>Resaltado (mark)</mark>
<s>Tachado (s)</s>
<small>Pequeño (small)</small>
H<sub>2</sub>O
x<sup>2</sup>
<u>Subrayado (u)</u>

- [ ] tal
- [x] tal

`Ejemplo de código en línea`

```c
#include <stdlib.h>
#include <raylib.h>
#include <flecs.h>


typedef struct {
    int x,y;
} Position;

int main() {
    ecs_world_t *world = ecs_new();

    ecs_entity_t e = ecs_entity(world);
    ecs_add(world, e, Position);

    float delta_time;
    while (!WindowShouldClose()) {
        delta_time = GetFrameTime();
        BeginDrawing();
        ecs_progress(world, delta_time);
        EndDrawing();
    }

    ecs_fini(world);
    CloseWindow();
    return 0;
}
```

[Ejemplo de enlace](https://example.com)

<a href="https://example.com" target="_blank">Target blank!</a>

![Ejemplo de imagen](https://imgs.search.brave.com/A1g3HIVyF53pk_YrZz0qOisvTPAwV07XS1GJtghqV5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3ZpdGUvYXNz/ZXRzL3Bob3RvLUM4/cTBLUUhHLndlYnA)

[<img src="http://www.google.com.au/images/nav_logo7.png"/>](http://google.com.au/)

<a href="https://example.com" target="_blank"><img src="http://www.google.com.au/images/nav_logo7.png"/></a>
