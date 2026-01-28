import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())

// Página principal
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redes Computer - Seguridad Informática</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            .gradient-bg {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            .service-card {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .service-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            }
            .team-member {
                transition: transform 0.3s ease;
            }
            .team-member:hover {
                transform: scale(1.05);
            }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Header/Navbar -->
        <nav class="gradient-bg text-white shadow-lg">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-shield-alt text-3xl"></i>
                        <div>
                            <h1 class="text-2xl font-bold">Redes Computer</h1>
                            <p class="text-sm text-purple-200">Seguridad Informática Profesional</p>
                        </div>
                    </div>
                    <div class="hidden md:flex space-x-6">
                        <a href="#servicios" class="hover:text-purple-200 transition">Servicios</a>
                        <a href="#equipo" class="hover:text-purple-200 transition">Equipo</a>
                        <a href="#contacto" class="hover:text-purple-200 transition">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="gradient-bg text-white py-20">
            <div class="container mx-auto px-6 text-center">
                <i class="fas fa-network-wired text-6xl mb-6"></i>
                <h2 class="text-5xl font-bold mb-4">Protegemos tu Infraestructura Digital</h2>
                <p class="text-xl mb-8 text-purple-100">Instalación y mantenimiento de sistemas de seguridad informática de alta calidad</p>
                <a href="#contacto" class="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition inline-block">
                    Solicitar Cotización
                </a>
            </div>
        </section>

        <!-- Servicios Section -->
        <section id="servicios" class="py-16 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
                    <p class="text-gray-600 text-lg">Soluciones integrales de seguridad informática para tu empresa</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Servicio 1 -->
                    <div class="service-card bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                        <div class="text-purple-600 text-4xl mb-4">
                            <i class="fas fa-firewall"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">Instalación de Firewalls</h3>
                        <p class="text-gray-600 mb-4">Configuración e implementación de firewalls de hardware y software para proteger tu red contra amenazas externas e internas.</p>
                        <ul class="text-gray-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Firewall perimetral</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Filtrado de contenido</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Monitoreo 24/7</li>
                        </ul>
                    </div>

                    <!-- Servicio 2 -->
                    <div class="service-card bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                        <div class="text-purple-600 text-4xl mb-4">
                            <i class="fas fa-lock"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">Sistemas de Encriptación</h3>
                        <p class="text-gray-600 mb-4">Protección de datos sensibles mediante tecnologías de encriptación avanzadas para comunicaciones y almacenamiento.</p>
                        <ul class="text-gray-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>VPN empresarial</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Cifrado de discos</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>SSL/TLS certificados</li>
                        </ul>
                    </div>

                    <!-- Servicio 3 -->
                    <div class="service-card bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                        <div class="text-purple-600 text-4xl mb-4">
                            <i class="fas fa-video"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">Vigilancia y CCTV</h3>
                        <p class="text-gray-600 mb-4">Instalación de sistemas de videovigilancia IP con acceso remoto y almacenamiento seguro en la nube.</p>
                        <ul class="text-gray-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Cámaras IP HD/4K</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Acceso remoto</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Respaldo en nube</li>
                        </ul>
                    </div>

                    <!-- Servicio 4 -->
                    <div class="service-card bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                        <div class="text-purple-600 text-4xl mb-4">
                            <i class="fas fa-shield-virus"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">Protección Antivirus</h3>
                        <p class="text-gray-600 mb-4">Soluciones antivirus empresariales con gestión centralizada y protección en tiempo real contra malware.</p>
                        <ul class="text-gray-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Antivirus corporativo</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Anti-ransomware</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Actualizaciones automáticas</li>
                        </ul>
                    </div>

                    <!-- Servicio 5 -->
                    <div class="service-card bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                        <div class="text-purple-600 text-4xl mb-4">
                            <i class="fas fa-tools"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">Mantenimiento Preventivo</h3>
                        <p class="text-gray-600 mb-4">Revisiones periódicas y actualizaciones de sistemas de seguridad para garantizar protección continua.</p>
                        <ul class="text-gray-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Auditorías mensuales</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Parches de seguridad</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Optimización de sistemas</li>
                        </ul>
                    </div>

                    <!-- Servicio 6 -->
                    <div class="service-card bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                        <div class="text-purple-600 text-4xl mb-4">
                            <i class="fas fa-user-shield"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">Control de Accesos</h3>
                        <p class="text-gray-600 mb-4">Sistemas de autenticación y control de accesos físicos y lógicos para proteger áreas sensibles.</p>
                        <ul class="text-gray-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Biometría</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Tarjetas RFID</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>Registro de accesos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Equipo Section -->
        <section id="equipo" class="py-16 bg-gray-100">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4">Nuestro Equipo</h2>
                    <p class="text-gray-600 text-lg">Profesionales certificados con amplia experiencia en seguridad informática</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <!-- Miembro 1 -->
                    <div class="team-member bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="gradient-bg h-32 flex items-center justify-center">
                            <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white">
                                <i class="fas fa-user-tie text-5xl text-purple-600"></i>
                            </div>
                        </div>
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Carlos Rodríguez</h3>
                            <p class="text-purple-600 font-semibold mb-3">Director Técnico</p>
                            <p class="text-gray-600 text-sm mb-4">Ingeniero en Sistemas con 15+ años de experiencia. Certificaciones CISSP, CEH y CISA.</p>
                            <div class="flex justify-center space-x-3">
                                <a href="#" class="text-gray-500 hover:text-purple-600"><i class="fab fa-linkedin text-xl"></i></a>
                                <a href="#" class="text-gray-500 hover:text-purple-600"><i class="fas fa-envelope text-xl"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Miembro 2 -->
                    <div class="team-member bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="gradient-bg h-32 flex items-center justify-center">
                            <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white">
                                <i class="fas fa-user-graduate text-5xl text-purple-600"></i>
                            </div>
                        </div>
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">María González</h3>
                            <p class="text-purple-600 font-semibold mb-3">Especialista en Redes</p>
                            <p class="text-gray-600 text-sm mb-4">Experta en infraestructura de red y seguridad perimetral. Certificaciones CCNP Security y CCNA.</p>
                            <div class="flex justify-center space-x-3">
                                <a href="#" class="text-gray-500 hover:text-purple-600"><i class="fab fa-linkedin text-xl"></i></a>
                                <a href="#" class="text-gray-500 hover:text-purple-600"><i class="fas fa-envelope text-xl"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Miembro 3 -->
                    <div class="team-member bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="gradient-bg h-32 flex items-center justify-center">
                            <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white">
                                <i class="fas fa-user-cog text-5xl text-purple-600"></i>
                            </div>
                        </div>
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">Javier Martínez</h3>
                            <p class="text-purple-600 font-semibold mb-3">Técnico Senior</p>
                            <p class="text-gray-600 text-sm mb-4">Especialista en instalación y mantenimiento. Más de 10 años implementando soluciones de seguridad.</p>
                            <div class="flex justify-center space-x-3">
                                <a href="#" class="text-gray-500 hover:text-purple-600"><i class="fab fa-linkedin text-xl"></i></a>
                                <a href="#" class="text-gray-500 hover:text-purple-600"><i class="fas fa-envelope text-xl"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contacto Section -->
        <section id="contacto" class="py-16 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h2>
                    <p class="text-gray-600 text-lg">Estamos listos para proteger tu empresa</p>
                </div>

                <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    <!-- Información de contacto -->
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="text-purple-600 text-2xl mt-1">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-800 mb-1">Dirección</h3>
                                <p class="text-gray-600">Av. Tecnología 123, Oficina 456<br>Ciudad, País</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="text-purple-600 text-2xl mt-1">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-800 mb-1">Teléfono</h3>
                                <p class="text-gray-600">+34 900 123 456<br>+34 600 789 012</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="text-purple-600 text-2xl mt-1">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-800 mb-1">Email</h3>
                                <p class="text-gray-600">info@redescomputer.com<br>soporte@redescomputer.com</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="text-purple-600 text-2xl mt-1">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-800 mb-1">Horario</h3>
                                <p class="text-gray-600">Lunes - Viernes: 9:00 - 18:00<br>Sábados: 10:00 - 14:00</p>
                            </div>
                        </div>
                    </div>

                    <!-- Formulario de contacto -->
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <form id="contactForm" class="space-y-4">
                            <div>
                                <label class="block text-gray-700 font-semibold mb-2">Nombre</label>
                                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" placeholder="Tu nombre" required>
                            </div>
                            <div>
                                <label class="block text-gray-700 font-semibold mb-2">Email</label>
                                <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" placeholder="tu@email.com" required>
                            </div>
                            <div>
                                <label class="block text-gray-700 font-semibold mb-2">Teléfono</label>
                                <input type="tel" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" placeholder="+34 600 000 000">
                            </div>
                            <div>
                                <label class="block text-gray-700 font-semibold mb-2">Mensaje</label>
                                <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" rows="4" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
                            </div>
                            <button type="submit" class="w-full gradient-bg text-white font-semibold py-3 rounded-lg hover:opacity-90 transition">
                                <i class="fas fa-paper-plane mr-2"></i>Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="gradient-bg text-white py-8">
            <div class="container mx-auto px-6 text-center">
                <div class="flex items-center justify-center space-x-3 mb-4">
                    <i class="fas fa-shield-alt text-2xl"></i>
                    <h3 class="text-xl font-bold">Redes Computer</h3>
                </div>
                <p class="text-purple-200 mb-4">Protegiendo tu infraestructura digital desde 2010</p>
                <div class="flex justify-center space-x-6 mb-4">
                    <a href="#" class="hover:text-purple-200 transition"><i class="fab fa-facebook text-2xl"></i></a>
                    <a href="#" class="hover:text-purple-200 transition"><i class="fab fa-twitter text-2xl"></i></a>
                    <a href="#" class="hover:text-purple-200 transition"><i class="fab fa-linkedin text-2xl"></i></a>
                    <a href="#" class="hover:text-purple-200 transition"><i class="fab fa-instagram text-2xl"></i></a>
                </div>
                <p class="text-sm text-purple-200">© 2024 Redes Computer. Todos los derechos reservados.</p>
            </div>
        </footer>

        <script>
            // Smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });

            // Form submission
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
                this.reset();
            });
        </script>
    </body>
    </html>
  `)
})

// API de contacto (para futuras implementaciones)
app.post('/api/contact', async (c) => {
  const data = await c.req.json()
  return c.json({ 
    success: true, 
    message: 'Mensaje recibido correctamente' 
  })
})

export default app
