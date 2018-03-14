import React from 'react';
import Types from 'prop-types';

class WizardStep extends React.Component {

    static propTypes = {
        step: Types.number,
        currentStep: Types.number,
        children: Types.oneOfType([Types.arrayOf(Types.node), Types.node]),
        component: Types.oneOfType([Types.arrayOf(Types.node), Types.node]),
    };

    static defaultProps = {
        step: 1,
        currentStep: 1,
    };

    renderComponent = () => {

        let elem = this.props.component || this.props.children;

        return React.cloneElement(elem, {
                    onNextPosition: this.props.onNextPosition,
                    onBackPosition: this.props.onBackPosition,
                });
    };

    render() {

        if (this.props.step !== this.props.currentStep) {
            return null;
        }
        return this.renderComponent();

    }
}

export default WizardStep;