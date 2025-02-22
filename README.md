# Petstore API CRUD

## Índice
1. [Descripción](#descripción)
2. [Características Principales](#características-principales)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Decisiones de Diseño](#decisiones-de-diseño)
8. [Contribuciones](#contribuciones)
9. [Licencia](#licencia)

---

## Descripción

**Petstore API CRUD** es una aplicación web desarrollada con **Next.js** y **Tailwind CSS** que permite gestionar una lista de mascotas mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar). La aplicación consume la API de Petstore y ofrece una interfaz intuitiva y visualmente atractiva para interactuar con los datos de las mascotas.

El diseño está personalizado con una paleta de colores moderna (`#3d348b`, `#7678ed`, `#f7b801`, `#f18701`, `#f35b04`) y cuenta con animaciones suaves para mejorar la experiencia del usuario.

---

## Características Principales

- **Gestión de Mascotas:** Agregar, editar, eliminar y filtrar mascotas según su estado.
- **Interfaz Responsiva:** Compatible con dispositivos móviles, tablets y escritorios.
- **Diseño Personalizado:** Paleta de colores única y elementos destacados como nombres en negrita.
- **Animaciones Interactivas:** Hover en botones y filas de tabla para mejorar la interacción.
- **Carga Dinámica:** Datos cargados desde la API de Petstore con SWR para actualizaciones en tiempo real.

---

## Tecnologías Utilizadas

- **Frontend:**
  - **Next.js:** Framework de React para renderizado del lado del servidor y optimización de rendimiento.
  - **Tailwind CSS:** Biblioteca de utilidades CSS para estilizar rápidamente la aplicación.
  - **SWR:** Hook de React para caché y sincronización de datos desde APIs.
  - **React:** Biblioteca JavaScript para construir interfaces de usuario interactivas.

- **Backend:**
  - **Petstore API:** Servicio externo utilizado para obtener, crear, actualizar y eliminar datos de mascotas.

- **Otras Herramientas:**
  - **TypeScript:** Tipado estático para mejorar la seguridad del código.
  - **npm:** Gestor de paquetes para instalar dependencias.

---

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. **Clona el Repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/petstore-crud.git
   cd petstore-crud