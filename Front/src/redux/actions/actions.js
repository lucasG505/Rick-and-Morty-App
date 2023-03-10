export const FILTER ="FILTER";
export const ORDER ="ORDER";
export const ADD_FAVORITE ="ADD_FAVORITE";
export const DELETE_FAVORITE="DELETE_FAVORITE";

export const orderCards =(id)=>{
    return ({type:ORDER,payload:id});
}

export const filterCards=(status)=>{
    return({type:FILTER, payload:status});
}

export const addFavorite=(personaje)=>{
    return ({type:ADD_FAVORITE, payload:personaje});
}

export const deleteFavorite =(id)=>{
    return ({type:DELETE_FAVORITE, payload:id})
}