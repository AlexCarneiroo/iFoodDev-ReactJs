import { useEffect, useState } from 'react'
import api from '../../api'
import * as C from './BodyStyles'
import img1 from '../../imgs/food-and-restaurant.png'

import { Produtos } from '../Produtos/TodosProdutos'

export const Body = ({active , SetmodaData})=>{
    const [cate,setCate] = useState([])
    const [produts,setProduts] = useState([])

    useEffect(()=>{
        getCategories();
        getProdutos();
    },[])
    
    const getCategories = async ()=>{
        const categorias = await api.getCategoris();
        setCate(categorias.result)
    }

    const getProdutos = async ()=>{
        const Produtos = await api.getProduts();
        setProduts(Produtos.result.data)
        console.log(Produtos.result)
    }



    const handlClick = (data)=>{
        SetmodaData(data)
    }


    return(
        <C.Container>
            <h1 className='text-base text-white'>Selecione Alguma Categoria</h1>
            <C.Categorias>
                <C.Cates>
                    <img src={img1} alt="" />
                </C.Cates>
                {cate.map((item)=>(
                    <C.Cates key={item.id}>
                        <img src={item.image} alt="" width={50}/>
                    </C.Cates>
                ))}
            </C.Categorias>

            <C.Produtos>
                {produts.map((item)=>(
                    <Produtos
                        key={item.id}
                        data={item}
                        ac={active}
                        onclick={handlClick}
                    />
                ))}
            </C.Produtos>
        </C.Container>
    )
}