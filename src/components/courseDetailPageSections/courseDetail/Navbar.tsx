// components/Navbar.js
import React from 'react';

export default function Navbar({ courseDetails, onSelect, selectedIndex }:any) {
  return (
    <nav className="w-full border-b border-zinc-300 text-zinc-700">
      <ul className="flex space-x-6 pt-1">
        {courseDetails.map((item:any, index:any) => (
          <li key={index}>
            <button
              className={` py-5 ${
                selectedIndex === index ? 'border-b-4 rounded border-blue-950 text-blue-950' : ''
              }`}
              onClick={() => onSelect(index)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
