# 🌟 Node + Express + TypeScript + Clean Architecture 

[![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

✨ Una plantilla moderna para proyectos backend con arquitectura limpia y mejores prácticas

<div align="center">
  <img src="https://skillicons.dev/icons?i=ts,nodejs,express,git,vscode,github" alt="Tech Stack" />
</div>

## 🚀 Características Principales

- ✅ Arquitectura limpia y escalable
- ✅ TypeScript como lenguaje principal
- ✅ Express con tipado seguro
- ✅ Estructura de proyecto organizada
- ✅ Hot Reloading con TSX
- ✅ ESLint y Prettier preconfigurados

## 📦 Instalación Rápida


1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/ValentinZoia/plantilla-ts-clean-architecture.git .

   ```
> 🟡 ¡Importante! El punto final (.) significa "clonar el contenido del repositorio en el directorio actual".

2. **Instalar dependencias**:
   ```bash
   npm install

   ```


2. **Iniciar servidor en desarrollo**:
   ```bash
   npm run dev

   ```

## 🏗 Estructura del Proyecto
Hay muchas formas de organizar un proyecto usando Clean Architecture. La mejor para mi es en un primer nivel separar por Dominio (quien eres: User, Product, Order, etc). Y por dentro de cada una separar por capas (Domain, Application, Infrastructure, Presentation). Esta forma de estructurar aporta mucha mas semantica de negocio y hace que todo escale mucho mejor y sea mas facil de mantener. Tendremos tantas carpetas a primer nivel, como entidades, como conceptos tengamos en nuestro negocio. Si queremos hacer una nueva feature para algo de usuarios por ejemplo, sabemos que todo lo que tenemos que tocar está dentro de la carpeta User, sin estropear o marearme con otros archivos. Por otro lado , una mala practica seria tener todo separado por las capas(Domain, Application, Infrastructure, Presentation) y dentro de ellas lo que corresponde para User, Product, etc. Seria mas engorrozo trabajar sobre eso, y tendriamos muchos archivos dentro de cada carpeta que podrian marearnos.


## Tecnologías Utilizadas
### 💡Sugerencias de uso
- Usá este proyecto como entorno para probar funciones, algoritmos o conceptos de TypeScript sin tener que configurar un proyecto grande.
- Si querés ejecutar múltiples archivos, simplemente agregalos dentro del directorio src/ y ejecutalos con npx tsx.

