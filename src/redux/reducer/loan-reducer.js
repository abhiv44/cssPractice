import { LOAN_VALUE, ERROR } from '../action/actionTypes'

export function loanReducer(state, action) {
  switch (action.type) {
    case LOAN_VALUE:
      const a = (state.loanList || []).concat({
        amount: action.payload.data.principal.amount,
        duration: action.payload.data.numPayments,
        intersetAmount: action.payload.data.monthlyPayment.amount,
        interestPercentage: action.payload.data.interestRate
      })
      return { ...state, loanData: action.payload.data, loanList: a.map(e => e) }
    case ERROR:
      return { err: action.payload }
    default:
      return { ...state }
  }
}