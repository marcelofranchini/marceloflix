import React from 'react';
import PageDefault from '../../../components/pageDefault'
import {Link} from 'react-router-dom'


function Categoria() {
  return (
    <>
     
     <PageDefault>
       <h1>Cadastro Categoria</h1>

       <form>

        <label>
          Nome da Categoria:
          <input type="text"/>
        </label>

        <button type='submit'>
          Cadastrar
        </button>
      </form>
       <Link to='/'>
         Ir para home
       </Link>

     </PageDefault>
    </>
  );
}

export default Categoria;