import * as C from './CarrinhoStyle'
import img from '../../imgs/cart.png'
import img2 from '../../imgs/down.png'
import { useState } from 'react'

export const Carrinho = ()=>{

    const [active,setActive] = useState(false)

    const handlClick = ()=>{
        if(active){
            setActive(false)
        }else{
            setActive(true)
        }
    }



    return(
        <C.Container ativo={active}>
            <C.CartHeader onClick={handlClick}>
                <img src={img} alt="" width={20} />
                <h1 className='ml-2 text-white'>Meu Carrinho ( )</h1>
                {active ? <img src={img2} alt="" width={15} className='mx-1' /> : ''}
            </C.CartHeader>

            {active && 
                <C.CartBody>
                    <h1>ola</h1>
                </C.CartBody>
            }
        </C.Container>
    )
}