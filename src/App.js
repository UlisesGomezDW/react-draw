import React, { useRef } from 'react';
import 'antd/dist/antd.css'
import './styles.css';
import CanvasDraw from 'react-canvas-draw';
import OptionButtons from './view/options';
export default function App() {
  const drawRef = useRef(null);
  return (
    <div className="App">
      <div className="App-container">
        <OptionButtons drawRef={drawRef} />
        <CanvasDraw ref={drawRef} disabled={false} hideGrid={true} />
      </div>
    </div>
  );
}
