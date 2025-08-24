import React, { useState, useEffect } from 'react';

export const PixelCodexLanding: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showCursor, setShowCursor] = useState(true);
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true, 
      hour: 'numeric', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  const formatUptime = () => {
    const startTime = new Date('2024-01-01T00:00:00');
    const diff = Date.now() - startTime.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${days}d ${hours}h ${minutes}m`;
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative">
      {/* Scanline Effect */}
      <div className="scanline"></div>
      
      {/* Terminal Window Frame */}
      <div className="min-h-screen border-4 border-green-400 bg-terminal pixel-border-glow">
        {/* Window Controls */}
        <div className="flex items-center justify-between p-4 border-b-2 border-green-400">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-green-400 text-sm text-glow-green">
            root@yunzhe-portfolio:~$
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors">
              REF
            </button>
            <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors">
              ×
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Title Section */}
          <div className="text-center border-2 border-green-400 p-6 pixel-border-glow">
            <div className="text-green-400 text-4xl font-bold mb-2 text-glow-green">
              YUNZHE PORTFOLIO v1.0.0
            </div>
            <div className="text-green-400 text-lg text-glow-green">
              [PIXEL & CODEX MODE]
            </div>
            <div className="text-gray-400 text-sm mt-2">
              THREE_JS_PIPELINE_READY
            </div>
          </div>

          {/* System Status */}
          <div className="border border-green-400 p-4 pixel-border">
            <div className="text-green-400 text-lg mb-3 text-glow-green">
              $ system_status
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span className="text-gray-300">TIMESTAMP: <span className="text-green-400 text-glow-green">{formatTime(currentTime)}</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span className="text-gray-300">STATUS: <span className="text-green-400 text-glow-green">ACTIVE</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span className="text-gray-300">UPTIME: <span className="text-green-400 text-glow-green">{formatUptime()}</span></span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span className="text-gray-300">MEMORY: <span className="text-green-400 text-glow-green">2.1GB / 8GB</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span className="text-gray-300">CPU: <span className="text-green-400 text-glow-green">12%</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span className="text-gray-300">NETWORK: <span className="text-green-400 text-glow-green">ONLINE</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="border border-green-400 p-4 pixel-border">
            <div className="text-green-400 text-lg mb-3 text-glow-green">
              █ NAVIGATION_MENU [INTERACTIVE]
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 'main', label: 'MAIN_SYSTEM', icon: '🏠' },
                { id: 'projects', label: 'PROJECTS', icon: '🚀' },
                { id: 'skills', label: 'SKILLS', icon: '⚡' },
                { id: 'about', label: 'ABOUT_ME', icon: '👤' },
                { id: 'contact', label: 'CONTACT', icon: '📧' },
                { id: 'threejs', label: 'THREE_JS', icon: '🎮' },
                { id: 'blog', label: 'BLOG', icon: '📝' },
                { id: 'terminal', label: 'TERMINAL', icon: '💻' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`p-3 border border-gray-600 hover:border-green-400 transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'border-green-400 bg-green-400 bg-opacity-10 pixel-border-glow' 
                      : 'hover:pixel-border'
                  }`}
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-green-400 text-sm font-bold">{item.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="border border-green-400 p-4 min-h-64 pixel-border">
            <div className="text-green-400 text-lg mb-3 text-glow-green">
              █ CONTENT_AREA [{activeSection.toUpperCase()}]
            </div>
            <div className="text-gray-300 text-center py-16">
              <div className="text-6xl mb-4">🎯</div>
              <div className="text-xl text-green-400 mb-2 text-glow-green">SECTION: {activeSection.toUpperCase()}</div>
              <div className="text-gray-400">
                Content for this section will be displayed here.
                <br />
                Three.js elements and interactive features coming soon!
              </div>
            </div>
          </div>

          {/* System Statistics */}
          <div className="border border-green-400 p-4 pixel-border">
            <div className="text-green-400 text-lg mb-3 text-glow-green">
              █ SYSTEM_STATISTICS [REAL_TIME]
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'TOTAL_PROJECTS', value: '12', color: 'text-green-400' },
                { label: 'SKILLS_MASTERED', value: '8', color: 'text-blue-400' },
                { label: 'THREE_JS_EXPERIENCE', value: '2y', color: 'text-purple-400' },
                { label: 'CODING_HOURS', value: '1000+', color: 'text-yellow-400' }
              ].map((stat, index) => (
                <div key={index} className="border border-gray-600 p-3 text-center hover:pixel-border transition-all duration-300">
                  <div className="text-green-400 text-sm font-bold">{stat.label}</div>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="w-full bg-gray-800 border border-gray-600 h-2 mt-2">
                    <div className="bg-green-400 h-full progress-glow" style={{ width: `${Math.random() * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Command Line */}
          <div className="border-t-2 border-green-400 pt-4">
            <div className="text-green-400 text-glow-green">
              <span className="text-green-400">$</span> navigate --section {activeSection}
              <span className={`ml-1 ${showCursor ? 'text-green-400' : 'text-transparent'} cursor-blink`}>█</span>
            </div>
            <div className="text-gray-500 text-sm mt-1">
              Commands: navigate, status, help, clear, threejs --demo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
