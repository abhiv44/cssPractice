import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import './loan-field.css'
import { connect } from 'react-redux'
import * as a from '../files/assets/stamp.png'
import * as locationPointer from '../files/assets/location-icon.png'
import Scrollspy from 'react-scrollspy'
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
            active: 0,
            sections: []
        }
    }

    render() {
        return (
            <div className='cf'>
                <section id='s-1'>
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
                                    <Scrollspy
                                        items={['s-1', 's-2']}
                                        currentClassName="is-active">
                                        <li><a href="#s-1"> 1</a></li>
                                        <li><a href="#s-2"> 2</a></li>
                                    </Scrollspy>
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
                <section id='s-2'>
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