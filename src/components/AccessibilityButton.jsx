import React, { useState } from 'react';
import { RiWheelchairFill, RiCloseLine, RiAddLine, RiSubtractLine, RiContrastFill, RiCursorFill } from 'react-icons/ri';

const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 90) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleBigCursor = () => {
    setBigCursor(!bigCursor);
    document.documentElement.classList.toggle('big-cursor');
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex items-start gap-4">
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#F4842F] text-white p-3 rounded-full shadow-lg hover:bg-[#d36f23] transition-colors"
        aria-label="תפריט נגישות"
      >
        {isOpen ? <RiCloseLine size={24} /> : <RiWheelchairFill size={24} />}
      </button>

      {/* Panel de opciones */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-4" role="menu">
          {/* Control de tamaño de texto */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">גודל טקסט</span>
            <div className="flex gap-2">
              <button
                onClick={decreaseFontSize}
                className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                aria-label="הקטן טקסט"
              >
                <RiSubtractLine />
              </button>
              <button
                onClick={increaseFontSize}
                className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                aria-label="הגדל טקסט"
              >
                <RiAddLine />
              </button>
            </div>
          </div>

          {/* Control de contraste */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">ניגודיות</span>
            <button
              onClick={toggleHighContrast}
              className={`p-2 rounded transition-colors ${
                highContrast ? 'bg-[#F4842F] text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="שנה ניגודיות"
            >
              <RiContrastFill />
            </button>
          </div>

          {/* Control de cursor */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">סמן גדול</span>
            <button
              onClick={toggleBigCursor}
              className={`p-2 rounded transition-colors ${
                bigCursor ? 'bg-[#F4842F] text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label="שנה גודל סמן"
            >
              <RiCursorFill />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;