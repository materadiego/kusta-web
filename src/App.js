import "./scss/Styles.scss";
import HomePage from "./pages/HomePage";
import ContactButton from "./components/ContactButton";
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Background />
      <ContactButton />
      <HomePage />
    </div>
  );
}

export default App;
