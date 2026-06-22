"use client";

import { useEffect, useState } from "react";

function randomPosition() {
  return {
    top: 8 + Math.random() * 80,
    left: 8 + Math.random() * 80,
  };
}

export function SecretButton() {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setPosition(randomPosition());
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const timeout = setTimeout(() => setRevealed(false), 4000);
    return () => clearTimeout(timeout);
  }, [revealed]);

  return (
    <>
      <button
        type="button"
        onMouseEnter={() => setPosition(randomPosition())}
        onClick={() => setRevealed(true)}
        style={{
          top: `${position.top}%`,
          left: `${position.left}%`,
          transition: "top 0.3s ease, left 0.3s ease",
        }}
        className="fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500 px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-primary-600"
      >
        Tócame si quieres conocer el secreto para la felicidad
      </button>

      {revealed && (
        <div className="fixed bottom-8 left-1/2 z-[9999] -translate-x-1/2 rounded-2xl bg-gray-900 px-6 py-4 text-center text-white shadow-lg">
          <p className="font-semibold">Ser tu mejor versión todos los días</p>
          <button
            type="button"
            onClick={() => setRevealed(false)}
            className="mt-2 text-xs text-gray-400 hover:text-white"
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
}
