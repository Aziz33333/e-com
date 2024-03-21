import React from 'react';
import './connexion.css';

const Connexion= () => {
  return (
    <div className='loginsignup'>
     <div className='loginsignup-container'>
        {/* Titre du formulaire */}
        <h1>registre</h1>
        <div className='input-group'>
          <input required type='text' name='email' autoComplete='off' className='input' />
          <label className='user-label'>name</label>
        </div>
        {/* Champ de saisie de l'email */}
        <div className='input-group'>
          <input required type='text' name='email' autoComplete='off' className='input' />
          <label className='user-label'>Email Address</label>
        </div>
        {/* Champ de saisie du mot de passe */}
        <div className='input-group'>
          <input required type='password' name='password' autoComplete='off' className='input' />
          <label className='user-label'>Password</label>
        </div>
        {/* Bouton de soumission */}
        <button>Connexion</button>
        {/* Lien vers la page d'inscription */}
        <p className='loginsignup-login'>Don't have an account ? <span>Sign Up here</span></p>
        {/* Checkbox pour l'accord des termes et conditions */}
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
    
      </div>
      {/* Image illustrative */}
      <img src="https://pbs.twimg.com/media/GAlulF5a0AAMQkP?format=jpg&name=4096x4096" alt="Illustration" className="form-image" />
    </div>
  );
}

export default Connexion;
