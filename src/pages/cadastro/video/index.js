import React from 'react';
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/pageDefault'

import styled from 'styled-components'

const Main =  styled.main`
    background-color: var(--black);
    color: var(--white);
    flex:1;

`

function Video() {
  return (
    <>
     
     <PageDefault>
       <Main>
      <h1>Cadastrar um Video</h1> 
       <Link to='/cadastro/categoria'>
         Cadastrar Categoria
       </Link>

       </Main>
     </PageDefault>
    </>
  );
}

export default Video;