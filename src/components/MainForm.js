import React, { Component } from 'react';

class MainForm extends Component {
    state = {
        pane: 1,
        input_1: '',
        input_2: '',
        input_3: '',
        input_4: '',
        input_5: ''
    }

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step++
        });
    }

    //Proceed to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step--
        });
    }

    //Handle field change
    handleChange = input => e => {
        this.setState({[input] : e.target.value})
    }

    render() {
        const { step } = this.state;
        const { }
        return (
            <div>
                
            </div>
        );
    }
}

export default MainForm;
