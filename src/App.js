import './App.css';
import ChatState from "./context/Chat/ChatState";
import ChatDetail from "./components/ChatDetail";

function App() {
  return (
    <div className="App">
      <ChatState>
        <ChatDetail/>
      </ChatState>
    </div>
  );
}

export default App;
