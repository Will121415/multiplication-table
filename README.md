# Notas:

Aplicación que crea una tabla de multiplicar y la guarda en un archivo .txt

## Pasos:

```
pnpm install 
```

## Ejemplo:

```
node app -b=5 -h=10 -l
```
 > Este ejemplo crea la tabla de multiplicar del 5, desde el 1 hasta el 10 y la muestra en consola.

## Ayuda:

Pudes correr el comando: `node app --help` para ver la ayuda.
 ```
 Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Este es el numero base en la creación de la tabla
                                                             [number] [required]
  -l, --listar   Muestra la tabla en consola          [boolean] [default: false]
  -h, --hasta    Hasta donde irá la tabla                 [number] [default: 12]
  
 ```