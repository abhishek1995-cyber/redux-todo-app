
export function createTodo(data){
    return {
        type: 'ADDTODO',
        payload: data
    }
}

export function delTodo(data){
    return {
        type: 'DELETETODO',
        payload: data
    }
}

export function search(data){
    return {
        type: 'search',
        payload: data
    }
}

