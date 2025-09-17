import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Trophy, Star, Zap, Target, Calendar, Brain } from 
'lucide-react';
import {Link} from 'react-router-dom'

const LifeRefactorDashboard = () => {
  // 1. Cargar estado desde localStorage al inicializar
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('completedTasks');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const [expandedPhases, setExpandedPhases] = useState(() => {
    const saved = localStorage.getItem('expandedPhases');
    // Por defecto, expandimos la primera fase si no hay nada guardado
    return saved ? new Set(JSON.parse(saved)) : new Set([0]);
  });

  const [unlockedProtocols, setUnlockedProtocols] = useState(() => {
    const saved = localStorage.getItem('unlockedProtocols');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const [currentWeek, setCurrentWeek] = useState(() => {
    const saved = localStorage.getItem('currentWeek');
    return saved ? JSON.parse(saved) : 1;
  });

  const [celebrationAnimation, setCelebrationAnimation] = useState('');

  // 2. Guardar estado en localStorage cada vez que cambie
  useEffect(() => {
    try {
      localStorage.setItem('completedTasks', JSON.stringify(Array.from(completedTasks)));
      localStorage.setItem('unlockedProtocols', JSON.stringify(Array.from(unlockedProtocols)));
      localStorage.setItem('expandedPhases', JSON.stringify(Array.from(expandedPhases)));
      localStorage.setItem('currentWeek', JSON.stringify(currentWeek));
    } catch (error) {
      console.error("Error al guardar en localStorage", error);
    }
  }, [completedTasks, unlockedProtocols, expandedPhases, currentWeek]);

  const phases = [
    {
      id: 0,
      title: "FASE 1: Core System Stabilization",
      weeks: "Semanas 1-2",
      color: "from-red-500 to-orange-500",
      tasks: [
        { id: 'phone-config', text: 'Configurar Circuit Breaker del teléfono', protocol: 'friction-protocol' },
        { id: 'calendar-setup', text: 'Setup completo de Google Calendar', protocol: 'memory-external' },
        { id: 'workspace-profiles', text: 'Crear profiles de escritorio con tela/funda', protocol: 'context-switching' },
        { id: 'energy-logging', text: 'Comenzar daily energy logging', protocol: 'state-management' },
        { id: 'prayer-routine', text: 'Implementar Minimum Viable Prayer', protocol: 'spiritual-api' },
        { id: 'bible-reading', text: 'Bible Reading as Code Review (5 min)', protocol: 'spiritual-api' }
      ]
    },
    {
      id: 1,
      title: "FASE 2: Service Integration",
      weeks: "Semanas 3-4",
      color: "from-blue-500 to-cyan-500",
      tasks: [
        { id: 'sleep-optimization', text: 'Sleep feedback loop funcionando', protocol: 'health-service' },
        { id: 'programming-pipeline', text: 'Pipeline de estudio diario (1 pomodoro mín)', protocol: 'learning-pipeline' },
        { id: 'preparatoria-automation', text: 'Automatización de tareas preparatoria', protocol: 'task-automation' },
        { id: 'social-practice', text: 'Social skills practice en iglesia', protocol: 'social-module' },
        { id: 'movement-service', text: 'Movement background service activo', protocol: 'health-service' }
      ]
    },
    {
      id: 2,
      title: "FASE 3: Advanced Features",
      weeks: "Semanas 5-8",
      color: "from-purple-500 to-pink-500",
      tasks: [
        { id: 'business-research', text: 'Market research para servicios digitales', protocol: 'financial-service' },
        { id: 'social-advanced', text: 'Advanced social skills en volleyball', protocol: 'social-advanced' },
        { id: 'community-planning', text: 'Plan de soporte a comunidad', protocol: 'community-service' },
        { id: 'system-optimization', text: 'Performance optimization del sistema', protocol: 'system-tuning' }
      ]
    }
  ];

  const protocols = {
    'friction-protocol': {
      title: '🔧 Friction Protocol',
      description: 'Sistema para romper bucles infinitos de distracción',
      details: 'Opciones desarrollador > Escalas animación 0.5x > Apps de fricción'
    },
    'memory-external': {
      title: '💾 External Memory System',
      description: 'Compensación para RAM biológica con issues',
      details: 'Calendar como scheduler + Notes como state logger'
    },
    'context-switching': {
      title: '🔄 Context Switching Optimization',
      description: 'Profiles de workspace para cambios de contexto eficientes',
      details: 'Spiritual/Code/Projects layers con visual cues'
    },
    'state-management': {
      title: '📊 State Management',
      description: 'Sistema de logging para tracking de energía y progreso',
      details: 'Morning energy check + Evening retrospective'
    },
    'spiritual-api': {
      title: '🙏 Spiritual API Interface',
      description: 'Bootstrap method para conexión con Dios sin performance anxiety',
      details: 'MVP Prayer template + Bible as code review'
    },
    'health-service': {
      title: '⚡ Health/Energy Microservice',
      description: 'Resource pool management para energía física',
      details: 'Sleep auto-tuning + Movement background processes'
    },
    'learning-pipeline': {
      title: '📚 Learning CI/CD Pipeline',
      description: 'Automated continuous learning system',
      details: 'Pomodoro microservices + Queue management'
    },
    'task-automation': {
      title: '🤖 Task Automation',
      description: 'Sprint planning y distribution para preparatoria',
      details: 'Sunday reviews + Deadline notifications'
    },
    'social-module': {
      title: '💬 Social Skills Module',
      description: 'Practice environment usando infrastructure existente',
      details: 'Iglesia staging + Volleyball production testing'
    },
    'financial-service': {
      title: '💰 Financial Bootstrap Service',
      description: 'MVP development para generación de ingresos',
      details: 'Market research + Reputation database building'
    },
    'social-advanced': {
      title: '🎯 Advanced Social Features',
      description: 'Production-level social interaction optimization',
      details: 'Conflict resolution + Leadership practice'
    },
    'community-service': {
      title: '🤝 Community Support System',
      description: 'Scaling personal growth to community impact',
      details: 'Resource sharing + Educational programs'
    },
    'system-tuning': {
      title: '⚙️ System Performance Tuning',
      description: 'Optimization y fine-tuning del sistema completo',
      details: 'Metrics analysis + Parameter adjustment'
    }
  };

  const weeklyReminders = {
    1: [
      "🎯 Focus: Romper patrones destructivos con friction systems",
      "📱 Phone setup es CRÍTICO - hace todo lo demás más fácil",
      "⏰ Calendar = external brain, úsalo religiosamente",
      "🔋 Energy logging te dará datos reales para optimizar"
    ],
    2: [
      "🏗️ Building habits como building software - iterativo",
      "🙏 Prayer no es performance, es debug session con Dios", 
      "📖 Bible reading: 5 min > 0 min, consistency > perfection",
      "💪 Workspace profiles reducen mental overhead"
    ],
    3: [
      "🔄 Services working together - integration challenges normal",
      "😴 Sleep feedback loop = most important performance optimization",
      "💻 Programming study antes de entretenimiento, no negociable",
      "👥 Social practice en iglesia = low stakes environment"
    ],
    4: [
      "📈 Sistema funcionando? Great! Time to level up",
      "🎯 Preparatoria automation should be seamless now",
      "🏐 Volleyball = production testing for social skills",
      "⚡ Movement service running in background = energy boost"
    ],
    5: [
      "💼 Business research phase - usar programming skills",
      "🔍 Market opportunity en tu comunidad local",
      "📊 Track todo - reputation es tu primera currency",
      "🎨 Advanced social skills = leadership development"
    ],
    6: [
      "🚀 MVP testing - start micro, think big",
      "💡 Electrónica + programming = unique value proposition",
      "🎯 Community planning - cómo escalar tu impact",
      "⚙️ System running smooth? Time for optimization"
    ],
    7: [
      "📈 Performance metrics - qué funciona, qué no",
      "🔧 Fine-tuning parameters based on data",
      "🌟 Community impact starting to show",
      "💰 Financial service generating first returns?"
    ],
    8: [
      "🏆 System performance review - celebrate progress!",
      "📊 Metrics analysis - consistency > perfection",
      "🔄 Continuous improvement - never stop iterating",
      "🌍 Ready for next major release - life 2.0?"
    ]
  };

  const handleTaskComplete = (taskId) => {
    if (completedTasks.has(taskId)) {
      setCompletedTasks(prev => {
        const newSet = new Set(prev);
        newSet.delete(taskId);
        return newSet;
      });
    } else {
      setCompletedTasks(prev => new Set([...prev, taskId]));
      
      // Find the protocol to unlock
      const task = phases.flatMap(p => p.tasks).find(t => t.id === taskId);
      if (task && task.protocol) {
        setUnlockedProtocols(prev => new Set([...prev, task.protocol]));
      }
      
      // Trigger celebration
      const celebrations = ['🎉', '⭐', '🚀', '💫', '🔥', '⚡', '🎆'];
      setCelebrationAnimation(celebrations[Math.floor(Math.random() * celebrations.length)]);
      setTimeout(() => setCelebrationAnimation(''), 2000);
    }
  };

  const togglePhase = (phaseId) => {
    setExpandedPhases(prev => {
      const newSet = new Set(prev);
      if (newSet.has(phaseId)) {
        newSet.delete(phaseId);
      } else {
        newSet.add(phaseId);
      }
      return newSet;
    });
  };

  const getPhaseProgress = (phase) => {
    const completed = phase.tasks.filter(task => completedTasks.has(task.id)).length;
    return Math.round((completed / phase.tasks.length) * 100);
  };

  const getCurrentPhase = () => {
    if (currentWeek <= 2) return 0;
    if (currentWeek <= 4) return 1;
    return 2;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-4">
      {/* Celebration Animation */}
      {celebrationAnimation && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="text-9xl animate-bounce">
            {celebrationAnimation}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Life Refactor Dashboard
        </h1>
        <p className="text-gray-300">Sistema de Progreso Gamificado - De Monolito Caótico a Microservicios Optimizados</p>
        <Link to='/mainplan' className='text-white bg-sky-700 rounded-full'>Ver plan</Link>
      </div>

      {/* Week Selector */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-800 rounded-lg p-1">
          {[1,2,3,4,5,6,7,8].map(week => (
            <button
              key={week}
              onClick={() => setCurrentWeek(week)}
              className={`px-4 py-2 rounded-md transition-all ${
                currentWeek === week 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              W{week}
            </button>
          ))}
        </div>
      </div>

      {/* Weekly Reminders Dashboard */}
      <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-purple-500/30">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-purple-400" size={24} />
          <h2 className="text-2xl font-bold">Week {currentWeek} - Key Reminders</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {weeklyReminders[currentWeek]?.map((reminder, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-4 border border-purple-400/30"
            >
              <p className="text-sm">{reminder}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Phase Indicator */}
      <div className="bg-gray-800 rounded-xl p-4 mb-6 border-l-4 border-cyan-400">
        <div className="flex items-center gap-3">
          <Target className="text-cyan-400" size={20} />
          <span className="font-semibold">Current Phase: {phases[getCurrentPhase()].title}</span>
          <div className="ml-auto bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
            {getPhaseProgress(phases[getCurrentPhase()])}% Complete
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Phases Panel */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="text-yellow-400" />
              Implementation Phases
            </h2>
            
            {phases.map((phase) => (
              <div key={phase.id} className="mb-4">
                <button
                  onClick={() => togglePhase(phase.id)}
                  className={`w-full text-left p-4 rounded-lg bg-gradient-to-r ${phase.color} bg-opacity-20 border border-opacity-30 hover:bg-opacity-30 transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">{phase.title}</h3>
                      <p className="text-gray-300">{phase.weeks}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                        {getPhaseProgress(phase)}%
                      </div>
                      <div className={`transform transition-transform ${expandedPhases.has(phase.id) ? 'rotate-180' : ''}`}>
                        ▼
                      </div>
                    </div>
                  </div>
                </button>
                
                {expandedPhases.has(phase.id) && (
                  <div className="mt-3 space-y-2 bg-gray-700/30 rounded-lg p-4">
                    {phase.tasks.map((task) => (
                      <div 
                        key={task.id}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${
                          completedTasks.has(task.id) 
                            ? 'bg-green-600/20 border border-green-500/30' 
                            : 'bg-gray-600/20 hover:bg-gray-600/40'
                        }`}
                        onClick={() => handleTaskComplete(task.id)}
                      >
                        {completedTasks.has(task.id) ? (
                          <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                        ) : (
                          <Circle className="text-gray-400 flex-shrink-0" size={20} />
                        )}
                        <span className={completedTasks.has(task.id) ? 'line-through text-gray-400' : ''}>
                          {task.text}
                        </span>
                        {completedTasks.has(task.id) && (
                          <Star className="text-yellow-400 ml-auto animate-pulse" size={16} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Protocols Panel */}
        <div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Trophy className="text-yellow-400" />
              Unlocked Protocols
            </h2>
            
            <div className="space-y-3">
              {Object.entries(protocols).map(([key, protocol]) => (
                <div 
                  key={key}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    unlockedProtocols.has(key)
                      ? 'bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/50 shadow-lg'
                      : 'bg-gray-700/30 border-gray-600 opacity-50'
                  }`}
                >
                  <h3 className="font-bold text-sm mb-1">{protocol.title}</h3>
                  <p className="text-xs text-gray-400 mb-2">{protocol.description}</p>
                  {unlockedProtocols.has(key) && (
                    <div className="text-xs bg-gray-600/50 rounded p-2">
                      <strong>Implementation:</strong> {protocol.details}
                    </div>
                  )}
                  {!unlockedProtocols.has(key) && (
                    <div className="text-xs text-gray-500">
                      🔒 Complete related tasks to unlock
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress Stats */}
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg">
              <h3 className="font-bold mb-3">Progress Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Tasks Completed:</span>
                  <span className="font-bold text-green-400">{completedTasks.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Protocols Unlocked:</span>
                  <span className="font-bold text-yellow-400">{unlockedProtocols.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Overall Progress:</span>
                  <span className="font-bold text-cyan-400">
                    {Math.round((completedTasks.size / phases.flatMap(p => p.tasks).length) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 p-4 bg-gray-800/50 rounded-lg">
        <p className="text-sm text-gray-400">
          💡 Remember: Bugs son parte del development process. Consistency beats Perfection. 
          <br />
          System designed to work WITH your limitations, not against them.
        </p>
      </div>
    </div>
  );
};

export default LifeRefactorDashboard;