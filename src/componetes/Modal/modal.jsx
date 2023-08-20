import * as C from './styles'
import { useEffect, useState } from 'react'

export const Modal = ({fecha , data})=>{


    const [unidade,setUnidade] = useState(1)


    const handlclick = ()=>{
        fecha(false)
    }

    const handleMenos = ()=>{
        if(unidade > 1){
            setUnidade(unidade - 1 )
        }
    }


    const handleMais = ()=>{
        setUnidade(unidade + 1)
    }
    return(
        <C.Container>
            <C.detalhes>
                <C.modal>
                    <C.img src={data.image} alt="image" />
                    <C.opcoes>
                        <h1 className='font-bold text-[#0b670b] text-2xl'>{data.name}</h1>
                        <p className='text-[#0b670be8]'>{data.ingredients}</p>

                        <C.total className='mt-6 mb-9'>
                            <button className='font-bold text-[#0b670b] text-3xl mr-3' onClick={handleMenos}>-</button>
                                <h1 className='font-bold text-[#0b670b] text-2xl'>{unidade}</h1>
                            <button className='font-bold text-[#0b670b] text-3xl mx-3' onClick={handleMais}>+</button>

                            <h2 className='font-bold text-[#0b670b] text-1xl ml-10'>
                                <span>Total:R$ </span> 
                                {(data.price * unidade).toFixed(2)}
                                
                            </h2>
                        </C.total>

                        <C.total>
                            <C.button className='mr-2' onClick={handlclick}>Cancelar</C.button>
                            <C.button>Adicionar No Carrinho</C.button>
                        </C.total>
                    </C.opcoes>
                </C.modal>
            </C.detalhes>
        </C.Container>
    )
}