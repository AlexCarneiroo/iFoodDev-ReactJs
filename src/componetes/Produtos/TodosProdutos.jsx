import * as C from './styles'
import img from '../../imgs/next.png'
import { useState } from 'react'


export const Produtos = ({data, ac , onclick})=>{

    const [detalhes,setDetalhes] = useState(false)



    const handlClick = ()=>{
        ac(true)
        onclick(data)
    }

    return(
        <C.mods>
            <C.Container onClick={handlClick}>
                <C.ProdutsArea>
                    <C.ProdutsImage src={data.image} width={100}/>
                    <C.ProdutsDetalhes>
                        <h1 className='font-bold'>{data.name}</h1>
                        <p className='text-[#455A64]'>{data.ingredients}</p>
                        <span className='text-[#0b670b]'>Preço: {data.price}</span>
                    </C.ProdutsDetalhes>
                    <C.ProdutsNext src={img}/>
                </C.ProdutsArea>

            </C.Container> 
        </C.mods>
    )
}