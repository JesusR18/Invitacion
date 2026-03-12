# Invitación de Bodas

Este repositorio contiene la página estática de la invitación (`invitacion.html`) junto con un servidor Express mínimo para que pueda desplegarse fácilmente en plataformas como Railway.

## Archivos clave

- `invitacion.html` – contenido principal de la invitación.
- `index.js` – servidor Node/Express que sirve el HTML y cualquier recurso estático en la carpeta.
- `package.json` – define las dependencias y el comando de inicio (`npm start`).
- `.gitignore` – excluye `node_modules` y otros archivos innecesarios.

## Uso local

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta el servidor:
   ```bash
   npm start
   ```
3. Abre `http://localhost:3000` en tu navegador para ver la invitación.

## Despliegue en Railway

1. Inicializa un repositorio Git, haz commit y sube a un proveedor remoto (GitHub, GitLab, etc.).
2. En Railway, crea un nuevo proyecto conectado a tu repositorio:
   - Usa la interfaz web (`New Project` → `Deploy from GitHub`).
   - O usa la CLI (`railway login`, `railway init`, `railway up`).
3. Railway detectará `package.json` y ejecutará `npm start`. La URL pública se mostrará tras finalizar el despliegue.

Después de desplegar, comparte la URL que proporciona Railway para que otros puedan ver la invitación.
