import { useState } from "react";
import { Button } from "coming";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button label="Hel2o" />
    </div>
  );
}

export default App;
