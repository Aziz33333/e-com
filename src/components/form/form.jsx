import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className="form-container">
      <div className="frame">
        <div className="image-container">
          <img src="https://www.eastgateshops.com/wp-content/uploads/2023/11/Zara.png" alt="Placeholder" className="image" />
        </div>
        <div className="form-wrapper">
          <h2>Créer un compte</h2>
          <form className="form">
            <div className="input-block">
              <input type="text" id="nom" required />
              <span className="placeholder">Nom</span>
            </div>
            <div className="input-block">
              <input type="text" id="prenom" required />
              <span className="placeholder">Prénom</span>
            </div>
            <div className="input-block">
              <input type="email" id="email" required />
              <span className="placeholder">Email</span>
            </div>
            <div className="input-block">
              <input type="password" id="password" required />
              <span className="placeholder">Mot de passe</span>
            </div>
            <div className="gender-buttons">
              <button type="button">Femme</button>
              <button type="button">Homme</button>
            </div>
            <button type="submit" className="submit-button">Créer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
