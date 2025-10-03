# 🔧 Guía de Solución de Problemas - Amor Estelar

## ⚡ Problemas Comunes y Soluciones

### 🚨 Error: "Failed to load resource: 504 (Outdated Optimize Dep)"

**Solución:**
```bash
# Detener el servidor
Ctrl+C (en la terminal donde corre npm run dev)

# Limpiar caché y reiniciar
npm run clean
```

### 🚨 Error: "PostCSS @import must precede all other statements"

**Solución:** Ya está solucionado en el proyecto. El `@import` de Google Fonts está correctamente ubicado al inicio del archivo `src/index.css`.

### 🚨 Error: "tailwindcss directly as a PostCSS plugin"

**Solución:** Ya está configurado con `@tailwindcss/postcss` en `postcss.config.js`.

### 🚨 Servidor no inicia o puerto ocupado

**Solución:**
```bash
# Matar procesos de Node.js
taskkill /F /IM node.exe

# Reiniciar servidor
npm run dev
```

### 🚨 Estilos de Tailwind no se aplican

**Solución:**
```bash
# Verificar que TailwindCSS esté instalado
npm list tailwindcss

# Reinstalar si es necesario
npm install @tailwindcss/postcss tailwindcss autoprefixer

# Reiniciar servidor
npm run dev
```

## 🛠️ Scripts Útiles

- `npm run dev` - Servidor de desarrollo (con optimizaciones)
- `npm run build` - Build de producción
- `npm run clean` - Limpia caché y reinicia servidor
- `npm run preview` - Preview de la build de producción

## 📱 Verificar que Todo Funciona

1. **Abrir navegador** en `http://localhost:5173`
2. **Verificar animaciones** - Deben verse elementos animados
3. **Probar responsive** - Cambiar tamaño de ventana
4. **Testear botones** - CTAs deben funcionar
5. **Revisar scroll** - Animaciones on-scroll activas

## 🎨 Personalización Rápida

### Cambiar Colores
Editar `tailwind.config.js`:
```js
colors: {
  primary: {
    purple: '#TU_COLOR',
    pink: '#TU_COLOR',
    // ... más colores
  }
}
```

### Actualizar Contacto
Editar `src/components/ContactSection.tsx`:
```js
const whatsappNumber = "TU_NUMERO";
const emailAddress = "TU_EMAIL";
```

### Cambiar Redes Sociales
Editar `src/components/Footer.tsx`:
```js
const socialLinks = [
  {
    name: 'Instagram',
    url: 'TU_URL_INSTAGRAM',
    // ...
  }
];
```

## 🆘 Si Nada Funciona

**Reseteo Completo:**
```bash
# Eliminar node_modules
Remove-Item -Recurse -Force node_modules

# Reinstalar todo
npm install

# Iniciar servidor
npm run dev
```

---

💜 **Amor Estelar** - Hecho con amor en Bahía Blanca
