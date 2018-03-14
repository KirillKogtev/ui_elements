import React from 'react';
import Types from 'prop-types';
import createFragment from "react-addons-create-fragment";

class Wizard extends React.Component {

    static propTypes = {
        children: Types.oneOfType([Types.arrayOf(Types.node), Types.node]),
        onChange: Types.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
        }
    }

    handlerNext = () => {
        this.setState({currentStep: this.state.currentStep + 1});

        if(this.props.onChange) {
            this.props.onChange(this.state.currentStep + 1);
        }
    };

    handlerBack = () => {
        if (this.state.currentStep === 1) {
            return;
        }
        this.setState({currentStep: this.state.currentStep - 1});

        if(this.props.onChange) {
            this.props.onChange(this.state.currentStep - 1);
        }
    };

    render() {

        const {children} = this.props;
        let childrenWithProps = {};

        React.Children.forEach(children, (child, index) => {
            childrenWithProps[`wizard_${index}`] = React.cloneElement(child, {
                onNextPosition: this.handlerNext,
                onBackPosition: this.handlerBack,
                currentStep: this.state.currentStep,
            })
        });

        return (
            <div>
                {createFragment(childrenWithProps)}
            </div>
        )
    }
}

export default Wizard;