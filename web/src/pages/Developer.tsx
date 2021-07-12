import React, { FormEvent, useState } from "react";
import api from "../services/api";


import "../styles/pages/developer.css";

export default function Developer() {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');
  const [hobby, setHobby] = useState('');
  

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const dev = {
      name,
      gender,
      age: parseInt(age),
      birthday,
      hobby,
    }
    //console.log(dev);
    
    await api.post('developers', dev)
      .then(response => alert('Cadastro realizado com sucesso!'))
      .catch(error => {
        console.log(error.response.data.errors);
        alert('Error');
      });
    
    
  }

  return (
    <div id="page-create-developer">
      <main>
        <form onSubmit={handleSubmit} className="create-developer-form">
          <fieldset>
            <legend>Gazin - Processo Seletivo</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input 
                id="name" 
                value={name} 
                onChange={ event => setName(event.target.value) } />
            </div>

            <div className="input-block">
              <label htmlFor="gender">Gênero</label>
              <input 
                id="gender" 
                value={gender} 
                onChange={ event => setGender(event.target.value) } />
            </div>

            <div className="input-block">
              <label htmlFor="age">Idade</label>
              <input 
                id="age" 
                value={age} 
                onChange={ event => setAge(event.target.value) } />
            </div>

            <div className="input-block">
              <label htmlFor="birthday">Data de Nascimento</label>
              <input 
                id="birthday" 
                value={birthday} 
                onChange={ event => setBirthday(event.target.value) } />
            </div>

            <div className="input-block">
              <label htmlFor="hobby">Hobby <span>Máximo de 300 caracteres</span></label>
              <textarea 
                id="hobby" 
                maxLength={300} 
                value={hobby} 
                onChange={ event => setHobby(event.target.value) } />
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}
