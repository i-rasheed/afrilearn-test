import React, { Component } from 'react'
import './HomeSection1.css'


export default class HomeSection1 extends Component {
    render() {
        return (
            <div className="section1-container">
                <div className="call-to-action-wrapper">
                    <h1 className="section1-heading">DON’T HAVE SPACE ON CAMPUS? LET’S START ONLINE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus faucibus vel hendrerit sed, aliquet a est. Cras dapibus nisl non metus viverra, ac convallis eros viverra.Lorem ipsum dolor sit</p>
                    <button className="section1-button">Find Courses Now</button>
                </div>
            </div>
        )
    }
}
