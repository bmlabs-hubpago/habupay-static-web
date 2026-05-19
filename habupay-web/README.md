# HabuPay Project

Este repositorio contiene el Frontend y el Backend del proyecto HabuPay.

## Estructura
- `/habupay-web`: Frontend desarrollado en React + Vite.
- `/bmsoluciones-api2`: Backend (API) en Node.js corriendo en Docker.

## Pasos para iniciar
1. **Backend**: 
   - Entra a `cd bmsoluciones-api2`.
   - Crea tu `.env` basado en `.env.example`.
   - Ejecuta `docker build -t bmsoluciones-api .` y luego levanta el contenedor.
2. **Frontend**:
   - Entra a `cd habupay-web`.
   - Crea tu `.env` basado en `.env.example`.
   - Ejecuta `npm install` y `npm run dev`.