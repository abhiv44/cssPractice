import axios from 'axios'
import  {LOAN_VALUE,ERROR} from './actionTypes'
    export const LoanAction = (loanValue) => dispatch => {
        console.log(loanValue)
        axios.get('https://ftl-frontend-test.herokuapp.com/interest',
        {
            params: {
                amount: loanValue.amount,
                numMonths: loanValue.numMonths
            }})
        .then(res => dispatch({
            type: LOAN_VALUE,
            payload: res
    }),
        
        
        )
        .catch(err => dispatch({ type: ERROR, payload: err }))
    }