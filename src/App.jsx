import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import * as C from './styles'
import { Menu } from './componetes/menuLateral/menu'
import { Body } from './componetes/Body/Body'
import { Header } from './componetes/HeaderTopBody/header'
import { Teste } from './componetes/teste'
import { Routes , Route, Await } from 'react-router-dom'
import api from './api'
import { Carrinho } from './componetes/Carrinho/Carrinho'
import { Modal } from './componetes/Modal/modal'


function App() {

  const [detalhes,setDetalhes] = useState(false)
  const [modalDate,setModalDate] = useState({})



  return (
    <C.Container>
      <Menu/>

      <div className='Rigth'>
        <Header/>

        <C.Roh>
          <Routes>
            <Route path='/' element={<Body active={setDetalhes} SetmodaData={setModalDate}/>}/>
            <Route path="/carrinho" element={<Teste/>}/>
          </Routes>
        </C.Roh>
        <Carrinho/>
      </div>

    {detalhes && <Modal fecha={setDetalhes} data={modalDate}/>}
  
      
      
    </C.Container>
  )
}

export default App

