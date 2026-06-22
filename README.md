# 🎮 GamingHub - Tu Sitio Web de Videojuegos

¡Bienvenido a GamingHub! Este es tu proyecto web completo y listo para funcionar.

---

## 📁 Archivos del Proyecto

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Página de inicio (la principal) |
| `resenas.html` | Página con reseñas de juegos |
| `contacto.html` | Página de contacto con formulario |
| `styles.css` | Estilos (colores, animaciones, responsive) |
| `script.js` | Funcionalidad (modo oscuro, efectos, etc.) |

---

## 🚀 ¿Cómo Usar Este Proyecto?

### Opción 1: Abrir en VS Code (RECOMENDADO)

1. Abre VS Code
2. Ve a Extensiones (Ctrl + Shift + X)
3. Busca "Live Server" e instala
4. Click derecho en `index.html` → "Open with Live Server"
5. ¡Listo! Tu sitio se abrirá en el navegador

### Opción 2: Abrir Directamente

1. Busca el archivo `index.html` en tu carpeta
2. Dale doble click
3. Se abrirá en tu navegador predeterminado

---

## 📱 Características del Sitio

### ✅ Lo que Ya está Hecho:

1. **3 Páginas:**
   - Inicio (con hero section, juegos destacados, noticias, etc.)
   - Reseñas (con reseñas detalladas de 4 juegos)
   - Contacto (con formulario funcional)

2. **Diseño Responsive:**
   - Se ve bien en celulares (📱)
   - Se ve bien en tablets (📲)
   - Se ve bien en computadoras (💻)

3. **Modo Oscuro/Claro:** 🌙☀️
   - Click el botón de la luna/sol en la esquina superior
   - Se guarda tu preferencia

4. **Animaciones:**
   - Fade In (las cosas aparecen suavemente)
   - Hover (los botones cambian al pasar el mouse)
   - Scroll (efectos al bajar la página)

5. **Colores Bonitos:**
   - Azul brillante
   - Morado elegante
   - Fondo oscuro por defecto
   - Gris neutro para texto secundario

---

## 🎨 ¿Cómo Cambiar Colores?

Abre el archivo `styles.css` y busca esto al inicio:

```css
:root {
    --bg-dark: #0F172A;      /* Fondo oscuro */
    --primary-blue: #3B82F6; /* Azul principal */
    --primary-purple: #8B5CF6; /* Morado */
    --text-white: #FFFFFF;   /* Blanco */
    --text-gray: #94A3B8;    /* Gris */
}
```

Cambia los códigos de color (ej: `#3B82F6`) por los que quieras.

**Herramienta útil:** Usa [color-picker.com](https://color-picker.com) para encontrar colores.

---

## 📝 ¿Cómo Cambiar Texto?

Abre cualquiera de los archivos HTML y busca el texto que quieras cambiar. Por ejemplo:

En `index.html`, línea 40:
```html
<h1 class="hero-title">Descubre el futuro de los videojuegos</h1>
```

Cambia "Descubre el futuro de los videojuegos" por lo que quieras.

---

## 🎯 Próximos Pasos (Para Mejorar Tu Proyecto)

### 1. Agregar Más Juegos
En `index.html`, busca esta sección:
```html
<!-- Tarjeta 1 -->
<div class="game-card">
```

Copia una tarjeta completa y pégala debajo, cambiando:
- El nombre del juego
- El género
- La calificación
- El color del gradiente

### 2. Cambiar Imágenes
Actualmente usamos colores, pero puedes agregar imágenes reales:

En `index.html`, busca:
```html
<div class="game-image" style="background: linear-gradient(...)">
```

Reemplázalo con:
```html
<div class="game-image" style="background-image: url('tu-imagen.jpg'); background-size: cover;">
```

### 3. Conectar Formulario a Email
Actualmente, el formulario simula enviar. Para que funcione de verdad, necesitarás:
- Una base de datos (Firebase, MongoDB, etc.)
- O un servicio como Formspree o Netlify Forms

---

## 🐛 Si Algo No Funciona

### El sitio no se ve correctamente:
1. Recarga la página (F5)
2. Limpia el caché (Ctrl + Shift + Delete)
3. Cierra y abre el navegador

### El modo oscuro no funciona:
- Abre la consola (F12) y verifica que no haya errores rojos
- Intenta en otro navegador

### El formulario no funciona:
- Verifica que `script.js` esté en la misma carpeta
- Revisa la consola (F12) por mensajes de error

---

## 📚 Conceptos Importantes para Aprender

### HTML (Estructura)
- Tags como `<div>`, `<h1>`, `<button>`, etc.
- El archivo `index.html` muestra la estructura

### CSS (Estilos)
- Colores, tamaños, posiciones
- Archivo `styles.css` tiene todos los estilos
- Media queries para responsive design

### JavaScript (Interactividad)
- El archivo `script.js` agrega funcionalidad
- Modo oscuro/claro
- Efectos de hover
- Validación de formulario

---

## 🎓 Cosas Que Aprendiste en Este Proyecto

✅ Estructura HTML  
✅ Estilos CSS (Flexbox, Grid)  
✅ Animaciones CSS  
✅ Variables CSS  
✅ Responsive Design (Mobile First)  
✅ JavaScript básico (DOM, Event Listeners)  
✅ LocalStorage (guardar datos)  
✅ Formularios HTML  

---

## 🚀 Para Publicar Tu Sitio Online

**Opciones fáciles:**

1. **Netlify** (Recomendado)
   - Ve a netlify.com
   - Arrastra tu carpeta del proyecto
   - Listo, ¡está en internet!

2. **GitHub Pages**
   - Sube tu proyecto a GitHub
   - Activa GitHub Pages en los settings
   - Tu sitio estará en: `tuusuario.github.io/proyecto-final-koo`

3. **Vercel**
   - Ve a vercel.com
   - Conecta tu GitHub
   - Automáticamente sube cambios

---

## 💡 Tips Importantes

1. **Siempre guarda tu trabajo** (Ctrl + S)
2. **Prueba en diferentes navegadores** (Chrome, Firefox, Safari)
3. **Prueba en tu celular** (sirve abrir con Live Server y escribir tu IP en el celular)
4. **Lee los comentarios en el código** (dicen qué hace cada parte)
5. **No tengas miedo de experimentar** (puedes deshacer todo con Ctrl + Z)

---

## 📞 Si Tienes Dudas

1. Busca en Google: "HTML CSS JavaScript [tu pregunta]"
2. Ve a [W3Schools.com](https://www.w3schools.com) - Muy útil para aprender
3. Pregunta a tu profesor/a
4. Busca en [Stack Overflow](https://stackoverflow.com)

---

## ¡Felicidades! 🎉

Ya tienes un sitio web profesional hecho por ti. Esto es solo el comienzo.

**Próximas metas:**
- Aprender React o Vue
- Agregar una base de datos real
- Publicar tu sitio online
- ¡Hacer más proyectos!

---

## 📄 Licencia

Este proyecto es tuyo. Puedes usarlo, modificarlo y compartirlo sin restricciones.

**Made with ❤️ for Learning Web Development**
