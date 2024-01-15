# Documentación de la Aplicación

## Estructura del Proyecto

El proyecto está organizado en una estructura de carpetas que separa claramente la parte del cliente y del servidor. A continuación, se describen las principales carpetas y archivos:

### Estructura del Cliente (`client`)

- **`index.html`**: Página principal del cliente.
- **`package.json`**: Archivo de configuración de npm que contiene las dependencias y scripts del cliente.
- **`public`**: Carpeta que contiene archivos estáticos accesibles directamente desde el navegador, como imágenes o iconos.
- **`src`**: Carpeta que contiene el código fuente del cliente.
  - **`App.css`**: Estilos principales de la aplicación.
  - **`App.jsx`**: Componente principal de la aplicación.
  - **`assets`**: Carpeta que almacena recursos estáticos como imágenes.
  - **`components`**: Carpeta que contiene componentes reutilizables.
    - **`ProjectCard.jsx`**: Componente que muestra la información de un proyecto.
    - **`ProjectForm.jsx`**: Formulario para crear o editar proyectos.
    - **`ProjectList.jsx`**: Lista de proyectos.
    - **`tasks`**: Carpeta que contiene componentes relacionados con tareas.
      - **`TaskCard.jsx`**: Componente que muestra la información de una tarea.
      - **`TaskForm.jsx`**: Formulario para crear o editar tareas.
      - **`TasksList.jsx`**: Lista de tareas.
    - **`ui`**: Carpeta que contiene componentes de interfaz de usuario.
      - **`ButtonIcon.jsx`**: Componente de botón con icono.
  - **`graphql`**: Carpeta que contiene archivos relacionados con GraphQL.
    - **`projects.js`**: Definición de consultas y mutaciones relacionadas con proyectos.
    - **`tasks.js`**: Definición de consultas y mutaciones relacionadas con tareas.
  - **`index.css`**: Estilos globales.
  - **`main.jsx`**: Archivo principal que renderiza la aplicación.
  - **`pages`**: Carpeta que contiene los componentes de las páginas de la aplicación.
    - **`ProjectDetails.jsx`**: Página de detalles de un proyecto.
    - **`Projects.jsx`**: Página principal que muestra la lista de proyectos.
- **`tailwind.config.cjs`**: Configuración de Tailwind CSS.
- **`vite.config.js`**: Configuración de Vite, un bundler y servidor de desarrollo para proyectos de JavaScript.

### Estructura de Datos (`db_data`)

- **Archivos de Colección (`collection-X-Y.wt`)**: Archivos de colección de la base de datos.
- **`diagnostic.data`**: Directorio que podría contener información de diagnóstico relacionada con la base de datos (error al abrir el directorio).
- **`index-X-Y.wt`**: Archivos de índice de la base de datos.
- **`journal`**: Directorio que podría contener información relacionada con el registro de la base de datos (error al abrir el directorio).
- **`_mdb_catalog.wt`**: Archivo relacionado con el catálogo de MongoDB.
- **`mongod.lock`**: Archivo que indica si el servidor de MongoDB está en ejecución.
- **`storage.bson`**: Archivo BSON que podría contener información de almacenamiento.
- **`WiredTiger`**: Directorio que contiene archivos relacionados con el motor de almacenamiento WiredTiger.
- Otros archivos relacionados con la base de datos.

### Configuración del Contenedor (`docker-compose.yml`)

- **`docker-compose.yml`**: Archivo de configuración de Docker Compose para orquestar contenedores.

### Estructura del Servidor (`server`)

- **`app.js`**: Configuración principal del servidor.
- **`config.js`**: Archivo de configuración del servidor.
- **`db.js`**: Configuración y conexión a la base de datos.
- **`graphql`**: Carpeta que contiene archivos relacionados con GraphQL en el servidor.
  - **`resolvers.js`**: Resolvedores de las consultas y mutaciones de GraphQL.
  - **`typeDefs.js`**: Definiciones de tipos y esquemas de GraphQL.
- **`index.js`**: Punto de entrada principal del servidor.
- **`models`**: Carpeta que contiene los modelos de datos de la base de datos.
  - **`Project.js`**: Modelo de datos para los proyectos.
  - **`Task.js`**: Modelo de datos para las tareas.

## Descripción General

La aplicación es una plataforma de gestión de proyectos con un cliente construido en React utilizando Vite como bundler y Tailwind CSS para estilos. La parte del servidor está implementada en Node.js y utiliza GraphQL para la comunicación con la base de datos MongoDB.

### Funcionalidades Principales

1. **Gestión de Proyectos**: Permite crear, editar y eliminar proyectos.
2. **Gestión de Tareas**: Posibilita la creación, edición y eliminación de tareas asociadas a proyectos.
3. **Detalles de Proyecto**: Proporciona una página de detalles para cada proyecto con la lista de tareas asociadas.
4. **Interfaz de Usuario Intuitiva**: Utiliza componentes reutilizables y una interfaz clara para mejorar la experiencia del usuario.
5. **Persistencia de Datos**: La información se almacena en una base de datos MongoDB.

## Instrucciones de Ejecución

### Requisitos Previos

- Docker y Docker Compose instalados.

### Pasos para Ejecutar la Aplicación

1. Clonar el repositorio desde GitHub.
2. Navegar al directorio raíz del proyecto.
3. Ejecutar el siguiente comando para iniciar los contenedores:

   ```bash
   docker-compose up
   ```

4. Acceder a la aplicación desde un navegador web en [http://localhost:3000](http://localhost:3000).

## Colaboradores

- Nombre del Desarrollador 1
- Nombre del Desarrollador 2

## Notas Adicionales

- Cualquier información adicional o detalles específicos sobre configuraciones, dependencias, etc.

---

Este documento proporciona una visión general de la estructura y funcionalidades de la aplicación, así como instrucciones básicas para su ejecución. Asegúrate de consultar la documentación detallada de cada tecnología utilizada para obtener información más específica.


