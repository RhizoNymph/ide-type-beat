import React, { useState, useEffect } from 'react';
import Split from '@uiw/react-split';
import './App.css';

function App() {
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(true);
  const [isBottomPanelVisible, setIsBottomPanelVisible] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
        return;
      }

      switch (event.key.toUpperCase()) {
        case 'L':
          setIsLeftSidebarVisible(prev => !prev);
          break;
        case 'R':
          setIsRightSidebarVisible(prev => !prev);
          break;
        case 'B':
          setIsBottomPanelVisible(prev => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="app">
      <div className="toolbar" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <button onClick={() => setIsLeftSidebarVisible(!isLeftSidebarVisible)}>L</button>
        <button onClick={() => setIsRightSidebarVisible(!isRightSidebarVisible)}>R</button>
        <button onClick={() => setIsBottomPanelVisible(!isBottomPanelVisible)}>B</button>
      </div>
      <Split mode="horizontal" style={{ height: 'calc(100vh - 40px)', width: '100%', backgroundColor: '#A890D3' }}>
        <div className="left-sidebar" style={{ display: isLeftSidebarVisible ? 'block' : 'none' }}>Left Sidebar Content</div>
        <Split mode="vertical" style={{ flexGrow: 1, backgroundColor: '#A890D3' }}>
          <div className="main-content">Main Content</div>
          <div className="bottom-panel" style={{ display: isBottomPanelVisible ? 'block' : 'none' }}>Bottom Panel Content</div>
        </Split>
        <div className="right-sidebar" style={{ display: isRightSidebarVisible ? 'block' : 'none' }}>Right Sidebar Content</div>
      </Split>
    </div>
  );
}

export default App;