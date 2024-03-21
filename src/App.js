
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
import Connexion from './components/connexion/connexion';
import Chat from './components/chatbot/chat';

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
      <Form></Form>
      <Connexion></Connexion>
      <Chat></Chat>
      

    </main>
    </div>
  );
}

export default App;
