import { useEffect, useState } from 'react';
function App() {
  const [focusedIndex, setFocusedIndex] = useState(0); // Para rastrear qué elemento está enfocado
  const [texto, setTexto] = useState(); // Para rastrear qué elemento está enfocado


  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          setTexto('ArrowUp')
          // Cambiar el foco hacia el elemento anterior (por ejemplo, en una lista
          setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
          break;
        case 'ArrowDown':
          setTexto('ArrowDown')
          // Cambiar el foco hacia el siguiente elemento
          setFocusedIndex((prevIndex) => prevIndex + 1);
          break;
        case 'ArrowLeft':
          setTexto('ArrowLeft')
          break;
        // Lógica para mover a la izquierda (si aplica)break;
        case 'ArrowRight':
          setTexto('ArrowRight')
          break;
        // Lógica para mover a la derecha (si aplica)break;
        case 'Enter':
          setTexto('Enter')
          // Lógica para ejecutar una acción con el elemento enfocado
          console.log("Elemento seleccionado: ", focusedIndex);
          break;
        default:
          setTexto(event.key)
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusedIndex]);

  return (
    

    <div>
      <h1>{texto}</h1>
      <h1>Navegación con el mando</h1>
      <ul>
        <li className={focusedIndex === 0 ? 'focused' : ''}>Elemento 1</li>
        <li className={focusedIndex === 1 ? 'focused' : ''}>Elemento 2</li>
        <li className={focusedIndex === 2 ? 'focused' : ''}>Elemento 3</li>
      </ul>
    </div>
  );
}

export default App;