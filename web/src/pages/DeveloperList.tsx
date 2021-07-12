import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

import "../styles/pages/developer-list.css";

interface IDeveloper {
  id: string;
  name: string;
  gender: string;
  genderDescription: string;
  age: number;
  hobby: string;
  birthday: Date;
  birthdayDescription: string;
}

export default function DeveloperList() {

  const [developer, setDeveloper] = useState<IDeveloper[]>([]);

  useEffect(() => {
    api.get('developers')
      .then(res => {
        setDeveloper(res.data);
      });
  }, []);

  return (
    <div id="page-create-developer">
      <main>
        <div className="create-developer-form">
          <fieldset>
            <legend>Gazin List - Processo Seletivo</legend>

            <Link to="/developer" className="btn-novo">
              Novo
            </Link>

            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Gênero</th>
                  <th>Idade</th>
                  <th>Data de Nascimento</th>
                  <th>Hobby</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                {
                  developer.map(dev => {
                    return (
                      <tr key={ dev.id }>
                        <td>{ dev.name }</td>
                        <td>{ dev.genderDescription }</td>
                        <td>{ dev.age }</td>
                        <td>{ dev.birthdayDescription }</td>
                        <td>{ dev.hobby }</td>
                        <td>Editar</td>
                        <td>Excluir</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </fieldset>
        </div>
      </main>
    </div>
  );
}
