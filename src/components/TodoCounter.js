import React from 'react';

function TodoCounter({total, completed}) {
  return (
    <h1>Haz completado {completed} de {total} TODOs</h1>
  );
}

export default TodoCounter