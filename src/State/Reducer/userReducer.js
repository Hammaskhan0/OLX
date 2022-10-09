function reducer(state = { ads : [] }, action){
    console.log('user inside reducer', action.payload)
    switch (action.type) {
        case 'ADD_USER': return {...state, user: action.payload}
        case 'Remove_USER': return {...state,user : null}
        case 'SET_ADS' : return {...state , ads: action.payload}
        default : return state  
          
    }
}
export default reducer