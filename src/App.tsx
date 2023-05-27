import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mb-36">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
