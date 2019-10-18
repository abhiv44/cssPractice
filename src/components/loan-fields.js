import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import './loan-field.css'
import { LoanAction } from '../redux/action/loan-action'
import { connect } from 'react-redux'
import * as a from '../files/assets/stamp.png'
import * as mapImage from '../files/assets/map.png'
import * as locationPointer from '../files/assets/location-icon.png'
const styles = theme => ({
    slider: {
        width: '50%'
    },
    paperStyle: {
        width: '100%',
        height: 450,
        padding: 20
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    button: {
        margin: theme.spacing.unit,
    },
    SliderTrack: {
        height: 5,
    },

});

class LoanFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            interest: "",
            amount: "",
            disabled: false,
            monthlyPayment: undefined,
            rate: undefined
        }

    }


    handleAmount = (event) => {
        this.setState({
            amount: event.target.value,
            disabled: false
        })

    }

    handleInterest = (event) => {
        this.setState({
            interest: event.target.value,
            disabled: false
        })
    }
    handleSlider = (event, newValue) => {
        const loanValue = {
            amount: newValue,
            numMonths: this.state.interest
        }

        this.setState({
            amount: newValue,
            disabled: true,
            monthlyPayment: undefined,
            rate: undefined
        })
        if (this.state.interest) {
            this.props.dispatch(LoanAction(loanValue))
        }
    }

    handleLoan = () => {
        // console.log(value)
        const loanValue = {
            amount: this.state.amount,
            numMonths: this.state.interest
        }
        this.props.dispatch(LoanAction(loanValue))
        this.setState({
            disabled: true,
            monthlyPayment: undefined,
            rate: undefined
        })
    }
    handleSelect = (amount, duration, monthlyPayment, rate) => {
        this.setState({
            amount,
            interest: duration,
            monthlyPayment,
            rate
        })
    }
    handleSubmit = () => {
        console.log("submitted")
    }

    render() {
        return (
            <div className='cf'>
                <section id='header'>
                    <header>
                        <div className="cover bg-left bg-center-l customImage">
                            <div className="pb5 pb6-m pb7-l">
                                <nav className="dt w-100 center">
                                    <div className="dtc v-mid pa3">
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >LOGIN</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >ABOUT</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >COMMUNITY</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >LOCATION</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >OUR MENU</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >RECEPIES</a>
                                    </div>
                                    <div className="dtc v-mid tr pa3">
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >CONTACT</a>
                                        <a className="f6 fw4 hover-black no-underline black dn dib-ns pv2 ph3" href="/" >LOGIN</a>
                                    </div>
                                </nav>
                                <div className="w-50 mt5 pr5 pt2 tc">
                                    <img src={a} />
                                </div>
                                <div className='fixed'>
                                    scrollSpy
                                </div>
                                <div className="tc mt3">
                                    <h1 class=" f-headline-l measure-narrow  white mv0">
                                        THE BEST FOODIE EXPERIENCE
                                </h1>
                                    <h1 className="fw6 f2 white mt3 mb4">NOW IN LONDON</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                </section>
                <section>
                    <div className='bimage'>
                        <div className='w-20 pt4 ml5'>
                            <div className='bg-white containerMap'>
                                <h2 className='centeredMapIcon'>LOCATION </h2>
                                12 Upper St. Martin’s Lane <br />
                                WC2H 9FB, London
                            </div>
                        </div>
                        <div className='w-50 tr'>
                            <img src={locationPointer} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return {
        loanValue: state.loanValue,
        loanList: state.loanValue && state.loanValue.loanList
    }
}

export default connect(mapStatetoProps)(withStyles(styles, { withTheme: true })(LoanFields));