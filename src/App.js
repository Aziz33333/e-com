
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppLook from './components/look';
import AppFooter from './components/footer';
import Main from './components/main';
import AppContact from './components/contact';
import AppCarte from './components/carte';
import Form from './components/form/form';

function App() {
  return (
    <div className="App">
    <herader id ="header">
      <AppHeader/>
    </herader>
    <main>
      <AppHero/>
      <AppAbout/>
      <Main/>
      <AppLook/>
      <AppContact></AppContact>
      
      <AppFooter></AppFooter>
      <AppCarte ></AppCarte>
      <Form/>

    </main>
    </div>
  );
}

export default App;
