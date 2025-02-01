---
path: "como-hacer"
h1: "Cómo Hacer Todo lo Que Quieras LOL"
h2: "Una Guía para Alcanzar tus Sueños"
---

# Cómo Hacer Todo lo Que Quieras LOL

## Una Guía para Alcanzar tus Sueños

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

![Ejemplo de imagen](https://imgs.search.brave.com/A1g3HIVyF53pk_YrZz0qOisvTPAwV07XS1GJtghqV5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3ZpdGUvYXNz/ZXRzL3Bob3RvLUM4/cTBLUUhHLndlYnA)
