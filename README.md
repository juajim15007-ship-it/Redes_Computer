# Redes Computer - Seguridad Informática

## Descripción del Proyecto
Página web profesional para **Redes Computer**, empresa especializada en instalación y mantenimiento de sistemas de seguridad informática.

## 🌐 Características Principales

### Servicios Ofrecidos
1. **Instalación de Firewalls** - Protección perimetral de redes
2. **Sistemas de Encriptación** - VPN y cifrado de datos
3. **Vigilancia y CCTV** - Videovigilancia IP con acceso remoto
4. **Protección Antivirus** - Soluciones corporativas anti-malware
5. **Mantenimiento Preventivo** - Auditorías y actualizaciones
6. **Control de Accesos** - Sistemas biométricos y RFID

### Equipo de Trabajo
- **Carlos Rodríguez** - Director Técnico (CISSP, CEH, CISA)
- **María González** - Especialista en Redes (CCNP Security, CCNA)
- **Javier Martínez** - Técnico Senior (Instalación y mantenimiento)

## 🛠️ Tecnologías Utilizadas
- **Framework**: Hono + TypeScript
- **Frontend**: TailwindCSS + Font Awesome
- **Deployment**: Cloudflare Pages
- **Runtime**: Cloudflare Workers

## 📦 Estructura del Proyecto
```
webapp/
├── src/
│   └── index.tsx           # Aplicación principal Hono
├── ecosystem.config.cjs    # Configuración PM2
├── package.json            # Dependencies y scripts
└── README.md              # Este archivo
```

## 🚀 Desarrollo Local

### Instalar dependencias (si es necesario)
```bash
cd /home/user/webapp
npm install
```

### Construir el proyecto
```bash
npm run build
```

### Iniciar servidor de desarrollo
```bash
# Limpiar puerto 3000
npm run clean-port

# Iniciar con PM2
pm2 start ecosystem.config.cjs

# Verificar estado
pm2 list

# Ver logs
pm2 logs redes-computer --nostream
```

### Probar la aplicación
```bash
npm run test
# o
curl http://localhost:3000
```

## 📝 Estado Actual

### ✅ Funcionalidades Completadas
- [x] Diseño responsive con TailwindCSS
- [x] Sección Hero con llamado a la acción
- [x] Catálogo de 6 servicios principales
- [x] Presentación del equipo (3 miembros)
- [x] Información de contacto completa
- [x] Formulario de contacto funcional
- [x] Navegación suave (smooth scrolling)
- [x] Efectos hover en tarjetas y elementos
- [x] Footer con redes sociales
- [x] Diseño gradient corporativo (púrpura)

### 🔄 Próximas Mejoras Sugeridas
- [ ] Integrar backend real para formulario de contacto
- [ ] Añadir galería de proyectos realizados
- [ ] Implementar sistema de testimonios de clientes
- [ ] Añadir blog o sección de noticias de seguridad
- [ ] Integrar chat en vivo
- [ ] Añadir calculadora de cotizaciones
- [ ] Multiidioma (español/inglés)

## 🌍 URLs del Proyecto

### Desarrollo Local
- **Sandbox**: http://localhost:3000
- **Público**: https://3000-ixm8kfn6gnodd0i37t9bm-18e660f9.sandbox.novita.ai

### Producción (después de deployment)
- **Cloudflare Pages**: https://redes-computer.pages.dev (pendiente)
- **GitHub**: https://github.com/juajim15007-ship-it/Redes_Computer

## 📞 Información de Contacto (de la empresa)
- **Teléfono**: +34 900 123 456
- **Email**: info@redescomputer.com
- **Horario**: Lunes - Viernes: 9:00 - 18:00

## 🔒 Seguridad
- Todas las dependencias CDN son de fuentes verificadas
- Sin almacenamiento de datos sensibles en el frontend
- Formulario con validación básica

## 📄 Licencia
© 2024 Redes Computer. Todos los derechos reservados.

---

**Última actualización**: 2026-01-28
**Versión**: 1.0.0
**Estado**: ✅ Activo en desarrollo
