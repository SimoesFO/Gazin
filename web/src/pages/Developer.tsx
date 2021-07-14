import React, { FormEvent, useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import DatePicker, { registerLocale } from "react-datepicker";
import api from "../services/api";
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';

import "../styles/pages/developer.css";
import "react-datepicker/dist/react-datepicker.css";

interface DeveloperParams {
  id: string;
}

registerLocale('ptBR', ptBR);

export default function Developer() {

  const { id } = useParams<DeveloperParams>();
  const history = useHistory();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('M');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [hobby, setHobby] = useState('');

  useEffect(() => {
    
    if(id) {
      api.get(`developers/${id}`)
        .then(res => {
          setName(res.data.name);
          setGender(res.data.gender);
          setAge(res.data.age);
          setHobby(res.data.hobby);
          setBirthday(new Date(res.data.birthday));
          console.log(res.data.name);
        });
    }
  }, [id]);
  

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(id) {
      updateDeveloper();
      history.push('/');
      return;
    }
    
    await saveDeveloper();
    history.push('/');
    return;
    
  }

  async function saveDeveloper() {

    const dev = {
      name,
      gender,
      age: parseInt(age),
      birthday: format(birthday, 'yyyy-MM-dd'),
      hobby,
    }
    
    await api.post('developers', dev)
      .then(response => alert('Cadastro realizado com sucesso!'))
      .catch(error => {
        alert('Verifique se os campos foram preenchidos corretamente.');
      });
  }

  async function updateDeveloper() {

    const dev = {
      id,
      name,
      gender,
      age: parseInt(age),
      birthday: format(birthday, 'yyyy-MM-dd'),// birthday.split('/').reverse().join('-'),
      hobby,
    }
    
    await api.put(`developers/${id}`, dev)
      .then(response => alert('Cadastro atualizado com sucesso!'))
      .catch(error => {
        alert('Verifique se os campos foram preenchidos corretamente.');
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
              <select id="gender" value={gender} onChange={ event => setGender(event.target.value) } >
                <option value='M'>Masculino</option>
                <option value='F'>Feminino</option>
              </select>
            </div>

            <div className="input-block">
              <label htmlFor="age">Idade</label>
              <input
                type='number'
                pattern="[0-9]*"
                id="age" 
                value={age} 
                onChange={ event => setAge(event.target.value) } />
            </div>

            <div className="input-block">
              <label htmlFor="birthday">Data de Nascimento</label>
              <DatePicker dateFormat="dd/MM/yyyy" locale="ptBR" selected={birthday} onChange={(date) => setBirthday(date as Date)}  />
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
