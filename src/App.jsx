import { useState } from "react";
//remove items code using use state
function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-4 border">
        <div className="flex">
          {val.map((item) => (
            <h1 key={item} className={`bg-red-200 w-11 px-4 py-2 m-2`}>
              {item}
            </h1>
          ))}
        </div>
        <button
          onClick={() => setVal(val.filter((item, index) => item % 2 !== 0))}
          className="px-2 py-1 rounded mt-2 bg-blue-500 text-zinc-100 m-2"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default App;
