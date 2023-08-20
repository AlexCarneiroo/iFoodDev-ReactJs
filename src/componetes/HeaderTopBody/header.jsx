import React from 'react'
import * as C from './styles'
import imgLogo from '../../imgs/logo.png'
import searchInco from '../../imgs/search.png'
import { useEffect, useRef, useState } from 'react'


export const Header = ()=>{

    const [disIput,setInput] = useState(false)
    const [value , setValue] = useState('')



    const handlclick = ()=>{
        setInput(true)
    }

    const handlBlur = ()=>{
        if(value.length > 0){
            setInput(true)
        }else{
            setInput(false)
        }
    }



    return(
        <C.Container>
            <C.imgLogo src={imgLogo}/>

            <C.Serch onClick={handlclick} action={disIput ? true : false}>
                {disIput && <C.input value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Pesquise' onBlur={handlBlur}/>}      
                <C.logosearch src={searchInco}/>
            </C.Serch>

        </C.Container>
    )
}