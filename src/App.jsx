import React from 'react';
import CanvasBackground from './CanvasBackground';

export default function App() {
  return (
    <>
      <CanvasBackground />
      <div className="relative z-10 p-4 text-white">
        <h1 className="text-2xl font-bold">Оценка зрелости проекта</h1>
        <p>Здесь будет форма опроса и визуальный отчет</p>
      </div>
    </>
  );
}
