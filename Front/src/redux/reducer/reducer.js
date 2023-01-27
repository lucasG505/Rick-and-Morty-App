import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "../actions/actions";

const initialState={
    myFavorites:[],
    allCharacters: []
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case (ADD_FAVORITE):
            return ({...state, myFavorites: [...state.myFavorites, action.payload], allCharacters:[...state.allCharacters, action.payload]});
        case (DELETE_FAVORITE):
            return({...state, myFavorites:state.myFavorites.filter((card)=>card.id!==action.payload), allCharacters:state.allCharacters.filter((card)=>card.id!==action.payload)});
        case (FILTER):
            let filtered =[...state.allCharacters];
            return {...state, myFavorites:filtered.filter((pj)=>pj.gender===action.payload)};
        case (ORDER):
            let sorted=[...state.allCharacters];
            if(action.payload==="Ascendente"){
                sorted.sort((a,b)=>{
                    if(a.id>b.id){
                        return 1;
                    }
                    if(a.id<b.id){
                        return -1;
                    }
                    return 0;
                })
                return ({...state, myFavorites:sorted});
            }else{
                sorted.sort((a,b)=>{
                    if(a.id<b.id){
                        return 1;
                    }
                    if(a.id>b.id){
                        return -1;
                    }
                    return 0;
                })
                return ({...state, myFavorites:sorted});
            }    
        default:
            return ({...state});        
    }
}

export default rootReducer;