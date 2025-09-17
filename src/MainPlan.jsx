// RefactorizacionSistemaVida.jsx
// Componente React + Tailwind + lucide-react
// Importar lucide-react en tu proyecto: `npm i lucide-react`
// Uso: importa y renderiza <RefactorizacionSistemaVida /> dentro de tu app

import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {
  Server,
  Zap,
  Database,
  Calendar,
  Book,
  Heart,
  CheckSquare,
  RefreshCw,
  Users,
  Box,
  ClipboardList,
  Target,
} from "lucide-react";

function Section({ title, subtitle, icon: Icon, children }) {
  const [open, setOpen] = useState(true);
  return (
    <article className="bg-gray-900/60 rounded-2xl p-4 md:p-6 shadow-lg border border-gray-800">
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gray-800/60 ring-1 ring-gray-700">
            <Icon className="w-6 h-6 text-gray-100" />
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
          </div>
        </div>
        <button
          onClick={() => setOpen((s) => !s)}
          className="text-sm text-gray-300 px-3 py-1 rounded-lg bg-gray-800/50 hover:bg-gray-800/70"
          aria-expanded={open}
        >
          {open ? "Ocultar" : "Mostrar"}
        </button>
      </header>

      {open && (
        <div className="mt-4 text-gray-200 leading-relaxed space-y-3">
          {children}
        </div>
      )}
    </article>
  );
}

export default function RefactorizacionSistemaVida() {
  return (
    <div className="bg-slate-900">
      <section className="max-w-4xl mx-auto p-6 md:p-10 space-y-6 bg-black">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-black to-gray-900/80 ring-1 ring-gray-700">
            <Server className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Refactorización del Sistema de Vida
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Plan de Implementación — lectura completa con pasos detallados
            </p>
          </div>
          <Link to='/' className="text-white bg-slate-800 p-5 rounded-full">
          Volver a dashboard</Link>
        </div>

        {/* Diagnóstico */}
        <Section
          title="Diagnóstico del Sistema Actual"
          subtitle="Análisis y bugs críticos"
          icon={Zap}
        >
          <h4 className="font-semibold text-white">
            Bugs Críticos Identificados:
          </h4>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
            <li>
              <strong className="text-white">Memory Leak:</strong> Ciclos de
              contenido destructivo sin garbage collection, como scroll infinito
              en redes sociales o procrastinación sin fin.
            </li>
            <li>
              <strong className="text-white">Race Conditions:</strong> Múltiples
              tareas compitiendo por recursos limitados (tiempo, energía,
              concentración).
            </li>
            <li>
              <strong className="text-white">Lack of State Management:</strong>{" "}
              Hábitos no persistentes por problemas de memoria a corto plazo y
              falta de sistemas externos de registro.
            </li>
            <li>
              <strong className="text-white">Resource Starvation:</strong>{" "}
              Infraestructura insuficiente limita throughput del sistema
              (ejemplo: workspace desorganizado o falta de horarios claros).
            </li>
          </ul>

          <h4 className="mt-3 font-semibold text-white">
            Arquitectura Actual: Monolito Caótico
          </h4>
          <p className="text-gray-300">
            Todo está acoplado, un fallo cascadea al resto del sistema. Ejemplo:
            falta de sueño → baja energía → bajo rendimiento → desorganización.
          </p>
        </Section>

        {/* Solución */}
        <Section
          title="Solución: Migración a Microservicios con CI/CD"
          subtitle="Visión general"
          icon={Box}
        >
          <p className="text-gray-300">
            El plan propone dividir responsabilidades en microservicios, crear
            ciclos de feedback, y establecer CI/CD personal (evaluación continua
            + ajustes rápidos).
          </p>
          <div className="mt-3 grid gap-3">
            <p className="text-sm text-gray-400">FASES principales:</p>
            <p className="text-sm">
              <strong>Fase 1:</strong> Stabilización del Core System (Semanas
              1-2).
            </p>
            <p className="text-sm">
              <strong>Fase 2:</strong> Service Decomposition (Semanas 3-4).
            </p>
            <p className="text-sm">
              <strong>Fase 3:</strong> Advanced Features (Semanas 5-8).
            </p>
          </div>
        </Section>

        {/* FASE 1 */}
        <Section
          title="FASE 1: Stabilización del Core System"
          subtitle="Semanas 1-2"
          icon={Database}
        >
          <h4 className="text-white font-semibold">
            1.1 Implementar Circuit Breaker para Addictions
          </h4>
          <p className="text-gray-300">
            Objetivo: Romper los bucles infinitos de consumo digital.
          </p>
          <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1">
            <li>
              Configurar teléfono en modo desarrollador: desactivar “Stay awake
              while charging”, limitar procesos de segundo plano a 1, reducir
              escala de animación a 0.5x.
            </li>
            <li>
              Instalar app de fricción (ejemplo: One Sec) que intercepte
              aperturas de redes sociales y añada retraso.
            </li>
            <li>
              Establecer regla: máximo 15 minutos por app. Pasado ese tiempo,
              activar fricción automática con delay de 10 segundos y mensaje de
              confirmación.
            </li>
          </ul>

          <pre className="mt-3 bg-gray-900/50 rounded-lg p-3 text-xs text-gray-200 overflow-x-auto">
            {`IF (tiempo_en_app > 15_minutos) THEN
    activar_friction_mode()
    mostrar_counter("Llevas X minutos, ¿continuar?")
    delay(10_segundos)
END IF`}
          </pre>

          <h4 className="text-white font-semibold mt-5">
            1.2 Database Optimization - Memoria Externa
          </h4>
          <p className="text-gray-300">
            Problema: RAM biológica limitada. Solución: sistemas externos de
            logging.
          </p>
          <ul className="list-disc ml-5 text-gray-300 text-sm space-y-1">
            <li>
              <strong>Google Calendar:</strong> Programar TODOS los eventos
              fijos con alarmas (ejemplo: miércoles 4:45 PM preparar equipo
              iglesia, 4:50 PM salir, etc.).
            </li>
            <li>
              <strong>Notas del teléfono:</strong> Log diario de energía (1-10),
              plan del día, y retroalimentación antes de dormir.
            </li>
          </ul>

          <h4 className="text-white font-semibold mt-5">
            1.3 Resource Management - Optimización del workspace
          </h4>
          <p className="text-gray-300">
            Tu escritorio (0.5m²) debe funcionar como un IDE modular:
          </p>
          <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
            <li>
              Capa 1: Biblia + libreta siempre visibles (spiritual/learning
              layer).
            </li>
            <li>Capa 2: Laptop + proyectos activos (work layer).</li>
            <li>Capa 3: Electrónica organizada y accesible (project layer).</li>
          </ul>
          <p className="mt-2 text-gray-300">
            Optimización de context switching: usar fundas o telas para cambiar
            perfiles visibles (Spiritual, Code, Projects).
          </p>
        </Section>

        {/* FASE 2 */}
        <Section
          title="FASE 2: Service Decomposition"
          subtitle="Semanas 3-4"
          icon={Book}
        >
          <h4 className="text-white font-semibold">
            2.1 Spiritual Microservice - API Design
          </h4>
          <p className="text-gray-300">
            Problema: no sabes cómo interactuar con la API de Dios. Solución:
            prácticas mínimas viables.
          </p>
          <ul className="list-disc ml-5 text-gray-300 text-sm">
            <li>
              <strong>Minimum Viable Prayer:</strong> 2 minutos al despertar.
              Plantilla: “Buenos días Dios, ayúdame con [problema], gracias por
              [cosa buena ayer]”.
            </li>
            <li>
              <strong>Bible Reading as Code Review:</strong> Proverbios =
              funciones modulares. Lee 5 min como si revisarás código legacy:
              “¿Qué problema resolvía en su contexto?”.
            </li>
          </ul>

          <h4 className="text-white font-semibold mt-4">
            2.2 Health/Energy Microservice
          </h4>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            <li>Registro: anotar hora de dormir, despertar, energía 1-10.</li>
            <li>
              Algoritmo: si energía &lt; 6 por 3 días, dormir 30 min antes.
            </li>
            <li>
              Ejercicio mínimo viable: 10 flexiones o sentadillas entre cambios
              de contexto. Volleyball como ejercicio principal.
            </li>
          </ul>

          <h4 className="text-white font-semibold mt-4">
            2.3 Learning Pipeline Optimization
          </h4>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            <li>
              Pomodoro de 25 min: al menos 1 diario antes de entretenimiento.
            </li>
            <li>
              Domingo: sprint planning de tareas escolares, distribuir en
              semana.
            </li>
            <li>Notificaciones 2 días antes de cada deadline.</li>
          </ul>
        </Section>

        {/* FASE 3 */}
        <Section
          title="FASE 3: Advanced Features"
          subtitle="Semanas 5-8"
          icon={Heart}
        >
          <h4 className="text-white font-semibold">3.1 Social Skills Module</h4>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            <li>
              <strong>Iglesia como Staging Environment:</strong> small talk con
              1 persona nueva cada servicio. Log de conversaciones: qué funcionó
              y qué no.
            </li>
            <li>
              <strong>Volleyball como Production Testing:</strong> practicar
              feedback positivo, resolución de conflictos.
            </li>
          </ul>

          <h4 className="text-white font-semibold mt-4">
            3.2 Financial Microservice - Bootstrap Mode
          </h4>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            <li>Capital inicial: 500 pesos.</li>
            <li>
              Fase de research: investigar necesidades digitales de la comunidad
              local (ej. reparación de celulares/PCs).
            </li>
            <li>
              MVP: ofrecer tech support básico a conocidos, documentar clientes
              satisfechos.
            </li>
          </ul>
        </Section>

        {/* Implementation Schedule */}
        <Section
          title="Implementation Schedule"
          subtitle="Checklist detallado"
          icon={ClipboardList}
        >
          <h4 className="text-white font-semibold">Week 1-2: Core Stability</h4>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            <li>Configurar sistemas de fricción en el teléfono.</li>
            <li>Agregar TODOS los compromisos fijos al calendario.</li>
            <li>Diseñar perfiles de workspace (Spiritual, Code, Projects).</li>
            <li>Iniciar logging diario de energía.</li>
            <li>Establecer rutina mínima de oración y lectura bíblica.</li>
          </ul>

          <h4 className="text-white font-semibold mt-4">
            Week 3-4: Service Integration
          </h4>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            <li>Optimizar sueño con feedback loop de energía.</li>
            <li>Pipeline de estudios con Pomodoro (mínimo 1 diario).</li>
            <li>Automatizar tareas escolares en calendario.</li>
            <li>Práctica social en iglesia con log de interacciones.</li>
          </ul>

          <h4 className="text-white font-semibold mt-4">
            Week 5-8: Advanced Features
          </h4>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            <li>Research de negocios + MVP testing.</li>
            <li>Práctica avanzada de habilidades sociales.</li>
            <li>Plan de soporte comunitario.</li>
            <li>Optimización continua del sistema completo.</li>
          </ul>
        </Section>

        {/* Error Handling */}
        <Section
          title="Error Handling & Rollback Strategy"
          subtitle="Cómo manejar fallos"
          icon={RefreshCw}
        >
          <p className="text-gray-300">Si fallas en algo:</p>
          <ol className="list-decimal ml-5 text-sm text-gray-300 space-y-1">
            <li>
              No hagas rollback completo, solo reinicia ese microservicio.
            </li>
            <li>Loguea el fallo: qué lo causó, en qué contexto.</li>
            <li>Ajusta parámetros. No abandones la arquitectura.</li>
            <li>
              Recuerda: los bugs son parte natural del development process.
            </li>
          </ol>

          <h4 className="text-white font-semibold mt-3">Success Metrics:</h4>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            <li>Consistency rate &gt; 70% en 4 semanas.</li>
            <li>Energía en tendencia ascendente.</li>
            <li>Reducción de ciclos de desperdicio de tiempo.</li>
            <li>Progreso en metas de aprendizaje y espirituales.</li>
          </ul>
        </Section>

        {/* Notas TDAH */}
        <Section
          title="Notas sobre TDAH Suspected"
          subtitle="Ajustes arquitectónicos"
          icon={Target}
        >
          <ul className="list-disc ml-5 text-sm text-gray-300">
            <li>Hyper-focus periods: agrupar tareas similares en batch.</li>
            <li>
              Interest-driven development: usar motivación natural como motor.
            </li>
            <li>Memoria externa (calendario/notes) es crítica, no opcional.</li>
            <li>Feedback loops más cortos para wins frecuentes.</li>
            <li>
              Diseño del entorno más importante que la fuerza de voluntad.
            </li>
          </ul>
        </Section>
      </section>
    </div>
  );
}
