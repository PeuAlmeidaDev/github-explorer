import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BuscaUmPokemon } from './components/BuscaUmPokemon';
import React from 'react';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
