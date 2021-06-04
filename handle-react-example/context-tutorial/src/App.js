import React from 'react';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';
import SelectColorsClass from './components/SelectColorsClass';
import { ColorProvider } from './contexts/color';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <SelectColorsClass />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
