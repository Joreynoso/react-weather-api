# ☀️ App del Clima con React

Aplicación desarrollada para practicar React, consumo de APIs externas, manejo de estado global con Context API, diseño modular, visualización dinámica de datos y control de errores. Utiliza la API de OpenWeather para consultar el clima actual de cualquier ciudad ingresada por el usuario.

---

## 🛠 Tecnologías utilizadas

- ⚛️ **React (Vite)** — Framework moderno para construir interfaces reactivas y rápidas.
- 💨 **Tailwind CSS** — Framework de utilidades para estilos rápidos y responsivos.
- 🔄 **Hooks personalizados y Context API** — Para manejo de estado global y lógica centralizada.
- 🌐 **OpenWeather API** — Fuente externa de datos climáticos en tiempo real.
- 🚦 **Estados UI controlados** — Para manejar `loading`, `error` y `data` desde un componente controlador.
- 🧩 **Arquitectura modular** — Componentes organizados por responsabilidad.
- 📦 **fetch / axios** — Para realizar peticiones HTTP externas.

---

## 🌈 Funcionalidades principales

🔍 **Búsqueda de ciudad**  
El usuario puede ingresar cualquier ciudad (principalmente de Argentina) para consultar su clima actual.

☁️ **Consumo de API externa**  
Se utiliza `fetch` o `axios` para obtener los datos desde OpenWeather en tiempo real.

📊 **Visualización del clima**  
Muestra información meteorológica como:
- Temperatura actual
- Temperatura mínima y máxima
- Humedad
- Velocidad del viento
- Nubosidad
- Ícono representativo del estado del clima

⚙️ **Manejo de estados**  
- `loading`: muestra un spinner o animación mientras se cargan los datos.  
- `error`: renderiza mensajes de error personalizados (ciudad no encontrada, campo vacío, etc.).  
- `data`: muestra los datos correctamente formateados.

🧠 **Diseño modular y escalable**  
Los componentes están divididos según su responsabilidad:
- `SearchForm`: campo de búsqueda.
- `DisplayController`: determina qué vista mostrar (clima, error o carga).
- `WeatherCard`: visualización del clima.
- `ErrorCard`: manejo de errores.
- `LoadingCard`: animación de carga.
- `WeatherContext`: lógica de negocio, estado global y fetch centralizado.
- `useWeather`: hook personalizado para manejar la lógica del clima.

---

## 🔗 Links

- 🌐 **Live Link (Netlify / Vercel / etc.)**: [Ver proyecto en línea](#)
- 📁 **Vista previa (local)**: Ejecutar el proyecto con `npm run dev`

---

## 📸 Capturas (opcional)

![Aplicación](./screenshots/screen_app.png)
![Diagrama](./screenshots/screen_diagrama.png)

---

## 🧑‍💻 Autor

Desarrollado por **José Reynoso**

---

## 📄 Licencia
Este proyecto se distribuye bajo la Licencia MIT.
