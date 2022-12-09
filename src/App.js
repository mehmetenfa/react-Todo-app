import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;