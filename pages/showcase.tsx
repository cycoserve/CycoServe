import React, { useState } from 'react';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import { Slider } from '../components/UI/Slider';

const Showcase: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">UI Components Showcase</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="space-y-4">
          <Button label="Primary Button" primary />
          <Button label="Secondary Button" />
          <Button label="Small Button" size="small" />
          <Button label="Large Button" size="large" primary />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter some text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter password"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Enter email"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Input with error"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            error="This field is required"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Slider</h2>
        <div className="space-y-4">
          <Slider
            min={0}
            max={100}
            value={sliderValue}
            onChange={setSliderValue}
          />
          <p>Current value: {sliderValue}</p>
        </div>
      </section>
    </div>
  );
};

export default Showcase;