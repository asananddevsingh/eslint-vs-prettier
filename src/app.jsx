import { useState } from 'react';
import { useMemo } from "react";

var abc = 10;

const App = () => {
  const [count, setCount] = useState(0);

  console.log('Hello');

  return (
    <div>
      <h1 id="heading">Welcome to integrated toolchian starter kit for React v18 :)</h1>
    </div>
  );
};

export default App;
