let BASE = 'https://api.b7web.com.br/devsfood/api';


export default{
    getCategoris: async()=>{
        const res = await fetch(BASE+'/categories');
        const json = res.json()
        return json
    },

    getProduts: async()=>{
        //products
        const res = await fetch(BASE+'/products');
        const json = res.json()
        return json
    }
}

