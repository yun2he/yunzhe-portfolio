import React, { useState, useEffect } from 'react';

export const LoadingScreen: React.FC = () => {
  const [loadingText, setLoadingText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const loadingSteps = [
    'INITIALIZING SYSTEM...',
    'LOADING PIXEL_ENGINE...',
    'CONNECTING TO CODEX_NETWORK...',
    'ESTABLISHING THREE_JS_PIPELINE...',
    'SYSTEM READY...',
    'ACCESS GRANTED'
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep]);
        setCurrentStep(prev => prev + 1);
      }
    }, 800);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(textInterval);
      clearInterval(cursorInterval);
    };
  }, [currentStep, loadingSteps]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Scanline Effect */}
      <div className="scanline"></div>
      
      <div className="w-full max-w-4xl mx-4">
        {/* Terminal Window Frame */}
        <div className="bg-terminal border-2 border-green-400 rounded-lg p-6 shadow-2xl pixel-border-glow">
          {/* Window Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-green-400 text-sm font-mono text-glow-green">
              root@yunzhe-portfolio:~$
            </div>
          </div>

          {/* Loading Content */}
          <div className="space-y-4">
            {/* Title */}
            <div className="text-center border-2 border-green-400 p-4 mb-6 pixel-border-glow">
              <div className="text-green-400 text-2xl font-mono font-bold text-glow-green">
                YUNZHE PORTFOLIO v1.0.0
              </div>
              <div className="text-green-400 text-sm font-mono text-glow-green">
                [PIXEL & CODEX MODE]
              </div>
            </div>

            {/* Loading Status */}
            <div className="border border-green-400 p-4 pixel-border">
              <div className="text-green-400 font-mono text-glow-green">
                <span className="text-green-400">$</span> system_status
              </div>
              <div className="mt-2 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span className="text-gray-300 font-mono">STATUS: <span className="text-green-400 text-glow-green">LOADING</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span className="text-gray-300 font-mono">PROGRESS: <span className="text-green-400 text-glow-green">{currentStep}/{loadingSteps.length}</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">▶</span>
                  <span className="text-gray-300 font-mono">CURRENT: <span className="text-green-400 text-glow-green">{loadingText}</span></span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="border border-green-400 p-4 pixel-border">
              <div className="text-green-400 font-mono mb-2 text-glow-green">
                █ PROGRESS_BAR [LIVE]
              </div>
              <div className="w-full bg-gray-800 border border-green-400 h-4">
                <div 
                  className="bg-green-400 h-full transition-all duration-500 ease-out progress-glow"
                  style={{ width: `${(currentStep / loadingSteps.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-gray-400 text-sm font-mono mt-2">
                {Math.round((currentStep / loadingSteps.length) * 100)}% COMPLETE
              </div>
            </div>

            {/* System Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-600 p-3 hover:pixel-border transition-all duration-300">
                <div className="text-green-400 font-mono text-sm">TOTAL_STEPS</div>
                <div className="text-gray-300 font-mono">{loadingSteps.length}</div>
              </div>
              <div className="border border-gray-600 p-3 hover:pixel-border transition-all duration-300">
                <div className="text-green-400 font-mono text-sm">CURRENT_STEP</div>
                <div className="text-gray-300 font-mono">{currentStep}</div>
              </div>
            </div>
          </div>

          {/* Command Line */}
          <div className="mt-6 border-t border-green-400 pt-4">
            <div className="text-green-400 font-mono text-glow-green">
              <span className="text-green-400">$</span> loading --status
              <span className={`ml-1 ${showCursor ? 'text-green-400' : 'text-transparent'} cursor-blink`}>█</span>
            </div>
            <div className="text-gray-500 text-sm font-mono mt-1">
              Commands: refresh, exit, help
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
