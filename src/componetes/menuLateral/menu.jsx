import * as C from './menuStyle';
import img1 from '../../imgs/order.png'
import img2 from '../../imgs/profile.png'
import img3 from '../../imgs/store.png'
import { Link } from 'react-router-dom';
import { Body } from '../Body/Body';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Menu = ()=>{

    const location = useLocation();

    const [active,setActive] = useState(false)

    const handlClick = ()=>{
        if(!active){
            setActive(true)
        }else{
            setActive(false)
        }
    }

    

    return(
        <C.Container>
            <Link to={'/'} onClick={handlClick}>
                <C.Caixas ativo={active} >
                    <C.img src={img3}/>
                </C.Caixas>
            </Link>
            <Link to={'/carrinho'}onClick={handlClick}>
                <C.Caixas ativo={active} >
                    <C.img src={img1}/>
                </C.Caixas>
            </Link>
            <C.Caixas>
                <C.img src={img2}/>
            </C.Caixas>
        </C.Container>
    )
}