const getUserEnterpise = (index:number) => {
    if(index % 5 === 0 && index % 3 === 0){
        return 'TC/ SENCON'
    }else if(index % 5 === 0){
        return 'SENCON'
    }else if(index % 3 === 0 ){
        return 'TC'
    }else{
        return 'Sem empresa'
    }
    
}

export default getUserEnterpise