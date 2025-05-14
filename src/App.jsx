import React from 'react';
import CanvasBackground from './CanvasBackground';

export default function App() {
  return (
    <>
      <CanvasBackground />
      <div className="relative z-10 p-4 text-white">
        <div className="flex items-center gap-4">
<img src="/favicon.ico" alt="Mascot" className="w-12 h-12 rounded-full" />
<h1 className="text-2xl font-bold">Оценка зрелости проекта</h1>
</div>
        <p>Здесь будет форма опроса и визуальный отчет</p>
      </div>
    </>
  );
}
