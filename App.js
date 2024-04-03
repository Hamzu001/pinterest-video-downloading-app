import Context from "./src/context/Context.js";
import Home from "./src/components/Home.js";

export default function App() {
  return (
    <>
      <Context>
        <Home />
      </Context>
    </>
  );
}