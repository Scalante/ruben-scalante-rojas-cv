/**
 * i18n.js — Bilingual content (ES / EN)
 *
 * Structure:
 *   TRANSLATIONS[lang][key] = string | array | object
 *
 * Usage (in main.js):
 *   import { TRANSLATIONS } from './i18n.js';
 *   const t = TRANSLATIONS[currentLang];
 */

const TRANSLATIONS = {

  /* ─────────────────────────────────────────────
   * ESPAÑOL
   * ───────────────────────────────────────────── */
  es: {

    /* Navigation */
    nav: {
      about:    'Sobre mí',
      stack:    'Stack',
      exp:      'Experiencia',
      edu:      'Educación',
      projects: 'Proyectos',
      certs:    'Certificaciones',
      contact:  'Contacto',
    },

    /* Hero */
    hero: {
      greeting: 'Hola, soy',
      name:     'Ruben Dario Scalante Rojas',
      role:     'Desarrollador Backend .NET',
      tagline:  'Arquitecturas limpias · Cloud Azure · +4 años de experiencia',
      btnWork:  'Ver experiencia',
      btnCv:    'Descargar CV',
      btnContact: 'Contactar',
    },

    /* About */
    about: {
      title: 'Sobre mí',
      body: `Soy Desarrollador Backend especializado en .NET (C#, .NET Core, .NET 6/8/10), con más de 4 años modernizando sistemas backend de alto rendimiento sobre Azure. Migré una plataforma monolítica completa a .NET 6 y diseñé arquitecturas Clean/Hexagonal para un ecosistema de 7 microservicios que hoy atiende a más de 3.000 usuarios. Como consultor freelance, integro herramientas de IA en flujos de desarrollo reales para acelerar entregas y automatizar procesos; en paralelo, investigo IA aplicada (RAG, agentes) por cuenta propia en proyectos personales. Busco un rol donde combinar ingeniería .NET sólida con esta base de IA aplicada.`,
    },

    /* Skills section */
    skills: {
      title: 'Stack Tecnológico',
      categories: {
        languages:   'Lenguajes',
        frameworks:  'Frameworks',
        databases:   'Bases de datos',
        cloud:       'Nube & DevOps',
        tools:       'Herramientas',
        frontend:    'Frontend',
      },
    },

    /* Experience */
    experience: {
      title: 'Experiencia Laboral',
      present: 'Actual',
      details: 'Ver detalles',
      jobs: [
        {
          id:       'sag',
          company:  'SAG — Soluciones Ambientales y Geográficas S.A.S.',
          role:     'Consultor Freelance — Desarrollo .NET & Automatización con IA',
          period:   'Abr 2026 — Sep 2026',
          location: 'Neiva, Huila (Remoto)',
          bullets: [
            'Como consultor freelance, investigué y construí desde cero el sitio web corporativo con Astro 6, Tailwind CSS 4 y TypeScript estricto (i18n ES/EN, mapas interactivos con Leaflet), desplegado en Cloudflare Pages.',
            'Diseñé y desarrollé, con asistencia de IA, SAG Project Hub para un equipo de 3 líderes de planificación de campo: un gestor tipo kanban construido directamente en React 19 con TypeScript, sin servidor propio e instalable como PWA offline, con su suite de pruebas automatizada en Vitest y Testing Library.',
            'Investigué e integré la API de Google Drive de punta a punta para automatizar la sincronización, la búsqueda por contenido (OCR) y la organización documental del equipo, eliminando tareas manuales de archivo.',
            'Asesoré en la incorporación de herramientas de IA (Claude Code, Antigravity, Open Code) al flujo de trabajo diario, adoptando un flujo de Git basado en ramas develop/feature/fix y pull requests.',
          ],
        },
        {
          id:       'inteia',
          company:  'INTEIA',
          role:     'Desarrollador Backend .NET',
          period:   'Feb 2023 — Mar 2026',
          location: 'Medellín, Antioquia (Remoto)',
          bullets: [
            'Migré un sistema monolítico completo de .NET Core 3.1 a .NET 6. El cambio de versión rompió toda la funcionalidad por dependencias directas del framework anterior: adapté el 100% del código y validé cada cambio con pruebas unitarias y de integración antes de cada despliegue a producción.',
            'Refactoricé la arquitectura monolítica (N-capas) e implementé arquitecturas modernas en .NET 8 (Clean Architecture y Hexagonal) con CQRS, Mediator y una capa de servicios organizada por casos de uso (Use Cases), en un ecosistema de 7 microservicios con un API Gateway como punto de entrada centralizado, desplegado en Azure junto con el equipo de DevOps.',
            'Implementé autenticación JWT y autorización basada en roles y políticas, middlewares centralizados de excepciones y logging, inyección de dependencias, patrón Repository/UnitOfWork y proxies para servicios externos; automaticé tareas en segundo plano con Hangfire (monitoreo y reintentos ante fallos), asegurando la calidad con XUnit y Fluent Validation.',
            'Implementé comunicación en tiempo real con SignalR integrado con Firebase Cloud Messaging, entregando notificaciones push personalizadas por empresa a bases de hasta 3.000 usuarios simultáneos.',
            'Configuré pipelines CI/CD en Azure DevOps con despliegues al cierre de cada sprint (ciclos de 2 semanas) y liberaciones adicionales ante bugs críticos, logrando despliegues reproducibles, monitoreados y confiables.',
            'Identifiqué y corregí vulnerabilidades de seguridad de severidad alta y media con SonarQube y Snyk, aplicando OWASP Top 10 y reforzando autenticación y autorización.',
            'Lideré la migración de una instancia autoadministrada de MongoDB en máquina virtual hacia Azure Cosmos DB for MongoDB (completamente administrado), preservando el 100% de la funcionalidad existente. Optimicé índices e integré Redis Cache, reduciendo tiempos de respuesta a un rango de 500 ms – 1 s.',
            'Diseñé y gestioné contenedores Docker, e integré servicios de Azure (Key Vault, Communication Services, Application Insights, Entra ID B2C) y SendGrid para comunicaciones, monitoreo y gestión segura de identidades.',
          ],
        },
        {
          id:       'indigo',
          company:  'INDIGO TECHNOLOGIES',
          role:     'Desarrollador Backend Junior II',
          period:   'Feb 2022 — Ene 2023',
          location: 'Neiva, Huila (Presencial)',
          bullets: [
            'Diseñé y desarrollé 3 APIs RESTful en .NET Framework (migradas y optimizadas a .NET 6, enfoque Database First), implementando un mecanismo propio de autenticación JWT para centralizar la seguridad — foco principal de mi rol en el equipo.',
            'Documenté las APIs con Swagger (OpenAPI) y realicé pruebas exhaustivas con Postman, facilitando la integración con equipos multidisciplinarios.',
            'Gestioné el ciclo de vida de proyectos en Azure DevOps y Git (ramas, pull requests, resolución de conflictos y despliegues).',
            'Diseñé microservicios serverless desacoplados y participé en la configuración de pipelines CI/CD y estrategias de despliegue automatizado en Azure.',
          ],
        },
        {
          id:       'soaint',
          company:  'SOAINT SOFTWARE',
          role:     'Desarrollador Backend',
          period:   'Jun 2021 — Ene 2022',
          location: 'Bogotá D.C. (Remoto)',
          bullets: [
            'Diseñé y desarrollé 10 microservicios escalables con Java y Spring Boot (lectura y procesamiento de JSON), exponiendo y consumiendo APIs REST documentadas con Swagger (OpenAPI) y validadas con Postman.',
            'Gestioné y desplegué contenedores en OpenShift, realizando ajustes en Pods.',
            'Desarrollé procedimientos almacenados, vistas, triggers y cursores en SQL Server para la optimización de bases de datos.',
            'Integré almacenamiento de archivos en la nube para gestión de objetos y versionamiento.',
          ],
        },
      ],
    },

    /* Education */
    education: {
      title: 'Formación Académica',
      items: [
        {
          degree:   'Máster Universitario en Ingeniería de Software y Sistemas Informáticos',
          school:   'UNIR — La Universidad en Internet',
          location: 'Logroño, España',
          year:     '2023 — 2024',
        },
        {
          degree:   'Ingeniero de Sistemas',
          school:   'Corporación Universitaria del Huila "CORHUILA"',
          location: 'Neiva, Huila',
          year:     '2016 — 2021',
        },
        {
          degree:   'Bachillerato Académico',
          school:   'Institución Educativa "Antonio Ricaurte"',
          location: 'Maito, Tarqui',
          year:     '2010 — 2015',
        },
      ],
    },

    /* Projects */
    projects: {
      title: 'Proyectos',
      note: 'Dado mi rol corporativo, la gran mayoría de los sistemas backend que he desarrollado son privados (sujetos a NDA), alojados en repositorios restringidos y desplegados en nubes empresariales. A continuación, destaco conceptos clave de arquitecturas que he construido:',
      items: [
        {
          name:  'Ecosistema Microservicios (Privado)',
          desc:  'Ecosistema de microservicios transaccionales de alto rendimiento en .NET 8, con Clean Architecture, Hexagonal, CQRS y patrón Mediator. Enrutamiento y balanceo de carga entre servicios con YARP como API Gateway, autenticación y autorización centralizada con JWT y Azure Entra ID B2C, caché distribuida con Redis y automatización de tareas en segundo plano con Hangfire. Desplegado en contenedores Docker con pipelines CI/CD en Azure DevOps.',
          tags:  ['.NET 8', 'CQRS', 'YARP', 'Entra ID B2C', 'Redis', 'Docker'],
          links: { private: true },
        },
        {
          name:  'API Gateway & Serverless (Privado)',
          desc:  'Modernización y desacoplamiento de monolitos migrando flujos a Azure Functions, con control de acceso vía Azure API Management e indexación en Cosmos DB.',
          tags:  ['Azure Functions', 'Cosmos DB', 'Microservicios'],
          links: { private: true },
        },
        {
          name:  'drive-rag-agent — Asistente RAG sobre Google Drive (Privado)',
          desc:  'Proyecto personal: asistente conversacional (RAG) en .NET 10 con arquitectura hexagonal y Microsoft Agent Framework. Extracción multimodal de PDF con PdfPig (OCR vía modelo de visión local con Ollama) y búsqueda híbrida de embeddings en PostgreSQL con pgvector, protegido con Polly y trazas OpenTelemetry, expuesto vía OpenAPI/Scalar con streaming (SSE).',
          tags:  ['.NET 10', 'RAG', 'Ollama', 'pgvector'],
          links: { private: true },
        }
      ],
    },

    /* Certifications */
    certs: {
      title: 'Certificaciones y Cursos',
      items: [
        {
          name:   'IA Aplicada — Resuelve Retos Reales con Claude',
          issuer: 'Smart4AI & Ruta N · Bootcamp intensivo (12 h)',
          year:   'Jul 2026',
        },
      ],
      note: 'Cursos en formación (Udemy): Arquitectura de Aplicaciones Empresariales con .NET 10 · Observabilidad de Microservicios .NET con OpenTelemetry · Docker y Kubernetes para .NET · Dapper con .NET 8 y Minimal APIs.',
    },

    /* Contact */
    contact: {
      title:    'Contacto',
      phone:    '+57 311 875 2745',
      email:    'rubendarioscalante@gmail.com',
      location: 'Maito, Tarqui, Huila — Colombia',
      available: 'Disponible para trabajo remoto.',
      footer: 'Diseñado & desarrollado por',
    },

    /* Achievements sidebar */
    achievements: {
      title: 'Logros',
      items: [
        'Referente técnico de un equipo de 5 desarrolladores en INTEIA para AppiMotion Plus (plataforma de movilidad sostenible): contribuí a la definición de la arquitectura de datos y software, gestioné la documentación técnica y coordiné con DevOps el pipeline CI/CD en Azure/Docker (despliegues de 3–5 min).',
        '+4 años de experiencia backend en entornos reales de producción.',
        'Máster universitario en Ingeniería de Software (UNIR, España).',
      ],
    },

    /* Hobbies */
    hobbies: {
      title: 'Hobbies',
      items: ['Lectura', 'Programación', 'Cine', 'Música', 'Ciclismo', 'Fútbol'],
    },

    /* Languages spoken */
    langs: {
      title: 'Idiomas',
      items: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés',  level: 'Básico (A2)' },
      ],
    },
  },

  /* ─────────────────────────────────────────────
   * ENGLISH
   * ───────────────────────────────────────────── */
  en: {

    nav: {
      about:    'About',
      stack:    'Stack',
      exp:      'Experience',
      edu:      'Education',
      projects: 'Projects',
      certs:    'Certifications',
      contact:  'Contact',
    },

    hero: {
      greeting: "Hi, I'm",
      name:     'Ruben Dario Scalante Rojas',
      role:     '.NET Backend Developer',
      tagline:  'Clean Architecture · Azure Cloud · 4+ years of experience',
      btnWork:  'View experience',
      btnCv:    'Download CV',
      btnContact: 'Get in touch',
    },

    about: {
      title: 'About me',
      body: `I'm a Backend Developer specializing in .NET (C#, .NET Core, .NET 6/8/10), with 4+ years modernizing high-performance backend systems on Azure. I migrated a full monolithic platform to .NET 6 and designed Clean/Hexagonal architectures for a 7-microservice ecosystem serving 3,000+ users today. As a freelance consultant, I integrate AI tools into real development workflows to speed up delivery and automate processes; in parallel, I research applied AI (RAG, agents) on my own in personal projects. I'm looking for a role where I can combine solid .NET engineering with this applied AI foundation.`,
    },

    skills: {
      title: 'Tech Stack',
      categories: {
        languages:  'Languages',
        frameworks: 'Frameworks',
        databases:  'Databases',
        cloud:      'Cloud & DevOps',
        tools:      'Tools',
        frontend:   'Frontend',
      },
    },

    experience: {
      title: 'Work Experience',
      present: 'Present',
      details: 'View details',
      jobs: [
        {
          id:       'sag',
          company:  'SAG — Soluciones Ambientales y Geográficas S.A.S.',
          role:     'Freelance Consultant — .NET Development & AI Automation',
          period:   'Apr 2026 — Sep 2026',
          location: 'Neiva, Huila (Remote)',
          bullets: [
            'As a freelance consultant, I researched and built the corporate website from the ground up with Astro 6, Tailwind CSS 4, and strict TypeScript (ES/EN i18n, interactive maps with Leaflet), deployed on Cloudflare Pages.',
            'Designed and built, with AI assistance, SAG Project Hub for a team of 3 field planning leads: a kanban-style manager built directly in React 19 with TypeScript, serverless and installable as an offline PWA, with its automated test suite in Vitest and Testing Library.',
            'Researched and integrated the Google Drive API end to end to automate document sync, content search (OCR), and organization for the team, removing manual filing work.',
            'Advised on introducing AI tools (Claude Code, Antigravity, Open Code) into the daily workflow, adopting a Git workflow based on develop/feature/fix branches and pull requests.',
          ],
        },
        {
          id:       'inteia',
          company:  'INTEIA',
          role:     '.NET Backend Developer',
          period:   'Feb 2023 — Mar 2026',
          location: 'Medellín, Antioquia (Remote)',
          bullets: [
            'Migrated a full monolithic system from .NET Core 3.1 to .NET 6. The version change broke all functionality due to direct dependencies on the previous framework: I adapted 100% of the codebase and validated every change with unit and integration tests before each production deployment.',
            'Refactored the monolithic (N-layer) architecture and implemented modern .NET 8 architectures (Clean Architecture and Hexagonal) with CQRS, Mediator, and a Services layer organized by Use Cases, across an ecosystem of 7 microservices with an API Gateway as the centralized entry point, deployed on Azure together with the DevOps team.',
            'Implemented JWT authentication and role/policy-based authorization, centralized exception-handling and logging middlewares, dependency injection, the Repository/UnitOfWork pattern, and proxies for external services; automated background tasks with Hangfire (execution monitoring and fault retries), ensuring quality with XUnit and Fluent Validation.',
            'Implemented real-time communication with SignalR integrated with Firebase Cloud Messaging, delivering personalized push notifications per company to bases of up to 3,000 simultaneous users.',
            'Configured CI/CD pipelines in Azure DevOps with deployments at the close of each sprint (2-week cycles) plus additional releases for critical bugs, achieving reproducible, monitored, and reliable deployments.',
            'Identified and remediated high- and medium-severity security vulnerabilities with SonarQube and Snyk, applying OWASP Top 10 and strengthening authentication and authorization.',
            'Led the migration of a self-managed MongoDB instance on a virtual machine to Azure Cosmos DB for MongoDB (fully managed), preserving 100% of existing functionality. Optimized indexes and integrated Redis Cache, reducing response times to a 500ms–1s range.',
            'Designed and managed Docker containers, and integrated Azure services (Key Vault, Communication Services, Application Insights, Entra ID B2C) and SendGrid for communications, monitoring, and secure identity management.',
          ],
        },
        {
          id:       'indigo',
          company:  'INDIGO TECHNOLOGIES',
          role:     'Technical Junior Developer LII',
          period:   'Feb 2022 — Jan 2023',
          location: 'Neiva, Huila (On-site)',
          bullets: [
            'Designed and developed 3 RESTful APIs in .NET Framework (migrated and optimized to .NET 6, Database First approach), implementing a custom JWT authentication mechanism to centralize security — the primary focus of my role on the team.',
            'Documented APIs with Swagger (OpenAPI) and ran thorough testing with Postman, facilitating integration with cross-functional teams.',
            'Managed project lifecycle in Azure DevOps and Git (branches, pull requests, conflict resolution, and deployments).',
            'Designed decoupled serverless microservices and participated in CI/CD pipeline configuration and automated deployment strategies on Azure.',
          ],
        },
        {
          id:       'soaint',
          company:  'SOAINT SOFTWARE',
          role:     'Backend Developer',
          period:   'Jun 2021 — Jan 2022',
          location: 'Bogotá D.C. (Remote)',
          bullets: [
            'Designed and developed 10 scalable microservices with Java and Spring Boot (JSON reading and processing), exposing and consuming REST APIs documented with Swagger (OpenAPI) and validated with Postman.',
            'Managed and deployed containers in OpenShift, making basic adjustments to Pods.',
            'Developed stored procedures, views, triggers, and cursors in SQL Server for database optimization.',
            'Integrated cloud file storage for object management and content versioning.',
          ],
        },
      ],
    },

    education: {
      title: 'Education',
      items: [
        {
          degree:   "Master's Degree in Software Engineering and Computer Systems",
          school:   'UNIR — La Universidad en Internet',
          location: 'Logroño, Spain',
          year:     '2023 — 2024',
        },
        {
          degree:   'Systems Engineer (B.Sc.)',
          school:   'Corporación Universitaria del Huila "CORHUILA"',
          location: 'Neiva, Huila',
          year:     '2016 — 2021',
        },
        {
          degree:   'High School Diploma',
          school:   'Institución Educativa "Antonio Ricaurte"',
          location: 'Maito, Tarqui',
          year:     '2010 — 2015',
        },
      ],
    },

    projects: {
      title: 'Projects',
      note: 'Given my corporate role, the vast majority of backend systems I have developed are private (under NDA), hosted in restricted repositories, and deployed in enterprise clouds. Below, I highlight key architectural concepts I have built:',
      items: [
        {
          name:  'Microservices Ecosystem (Private)',
          desc:  'High-performance transactional microservices ecosystem on .NET 8, with Clean Architecture, Hexagonal design, CQRS, and Mediator pattern. Service routing and load balancing via YARP as an API Gateway, centralized authentication and authorization with JWT and Azure Entra ID B2C, distributed caching with Redis, and background job automation with Hangfire. Deployed in Docker containers with CI/CD pipelines on Azure DevOps.',
          tags:  ['.NET 8', 'CQRS', 'YARP', 'Entra ID B2C', 'Redis', 'Docker'],
          links: { private: true },
        },
        {
          name:  'API Gateway & Serverless (Private)',
          desc:  'Monolith modernization and decoupling by migrating flows to Azure Functions, with access control via Azure API Management and indexing in Cosmos DB.',
          tags:  ['Azure Functions', 'Cosmos DB', 'Microservices'],
          links: { private: true },
        },
        {
          name:  'drive-rag-agent — RAG Assistant over Google Drive (Private)',
          desc:  'Personal project: a conversational RAG assistant in .NET 10 with hexagonal architecture and Microsoft Agent Framework. Multimodal PDF extraction with PdfPig (OCR via a local vision model with Ollama) and hybrid embedding search in PostgreSQL with pgvector, backed by Polly resilience and end-to-end OpenTelemetry tracing, exposed via OpenAPI/Scalar with streaming (SSE).',
          tags:  ['.NET 10', 'RAG', 'Ollama', 'pgvector'],
          links: { private: true },
        }
      ],
    },

    certs: {
      title: 'Certifications & Courses',
      items: [
        {
          name:   'Applied AI — Solving Real Challenges with Claude',
          issuer: 'Smart4AI & Ruta N · Intensive bootcamp (12h)',
          year:   'Jul 2026',
        },
      ],
      note: 'Courses in progress (Udemy): Enterprise Application Architecture with .NET 10 · .NET Microservices Observability with OpenTelemetry · Docker and Kubernetes for .NET · Dapper with .NET 8 and Minimal APIs.',
    },

    contact: {
      title:    'Contact',
      phone:    '+57 311 875 2745',
      email:    'rubendarioscalante@gmail.com',
      location: 'Maito, Tarqui, Huila — Colombia',
      available: 'Open to remote work.',
      footer: 'Designed & built by',
    },

    achievements: {
      title: 'Achievements',
      items: [
        'Technical reference for a 5-developer team at INTEIA on AppiMotion Plus (a sustainable mobility platform): contributed to defining the data and software architecture, managed technical documentation, and coordinated with DevOps on the Azure/Docker CI/CD pipeline (3–5 min deployments).',
        '4+ years of backend experience in real production environments.',
        "Master's degree in Software Engineering (UNIR, Spain).",
      ],
    },

    hobbies: {
      title: 'Hobbies',
      items: ['Reading', 'Coding', 'Movies', 'Music', 'Cycling', 'Football'],
    },

    langs: {
      title: 'Languages',
      items: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Basic (A2)' },
      ],
    },
  },
};
