import React, { Component } from 'react';
import Calendar from 'react-calendar';


class Calenda extends Component {
    constructor(){
        super()
        this.state = {
            date: new Date(),
          }
    this.onChange = this.onChange.bind(this)

    }
    
   
    onChange = date => this.setState({ date })
   
    render() {
      return (
        <div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />


          <style jsx>
            {`
            .react-calendar .react-calendar {
              width: 250px;
              max-width: 100%;
              background: white;
              border: 1px solid #a0a096;
              font-family: Arial, Helvetica, sans-serif;
              line-height: 1.125em;
          }
            `}
            
          </style>
        </div>
      );
    }
  }

export default Calenda
