import { Sidebar, Chat } from "./components";

function App() {
  return (
    <div className="grid place-items-center h-[100vh] bg-gray-200">
      <div className="flex bg-gray-100 mt-[-50px] h-[90vh] w-[90vw] shadow-2xl ">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
