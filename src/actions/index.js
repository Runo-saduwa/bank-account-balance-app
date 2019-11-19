const setBalance = (balance) => {
    return {
        type: 'SET_BALANCE',
        payload: balance
    }
}


export default setBalance;