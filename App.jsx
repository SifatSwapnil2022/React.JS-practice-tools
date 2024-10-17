import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import WelcomeMessage from "./Components/WelcomeMessage";
import JSXRules from "./Components/JSXRules";
const App = () => {
  return  <div>
    <Header />
    <Main />
    <Footer /> 
    <WelcomeMessage />
    <section id ="name">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter your name" />
      </form>
    </section>
    <JSXRules />
  </div>
 
};
export default App;