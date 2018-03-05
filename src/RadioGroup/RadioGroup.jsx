import React from 'react';
import cn from 'cn-decorator';
import createFragment from 'react-addons-create-fragment';

import Types from 'prop-types';

@cn('radio_group')
class RadioGroup extends React.Component {

    static propTypes = {
        name: Types.string,
        id: Types.string,
        value: Types.node,
        onChange: Types.func,
    };

    state = {
        value: ''
    };

    render(cn) {

        let radioButtons = {};
        let props = { name };
        let children = null;
        let value = this.state.value;

        if(this.props.children) {
            children = this.props.children.length ? this.props.children : [this.props.children];
        }

        if(children) {
            React.Children.forEach(children, (radio, index) => {
                radioButtons[`radio_${index}`] = React.cloneElement(radio, {
                    checked: radio.props.checked !== undefined
                        ? radio.props.checked : (value === radio.props.value),
                    onChange: radio.props.onChange !== undefined
                        ? radio.props.onChange : this.handleRadioChange,
                    ...props
                })
            });
        }

        return (
            <div>
                {createFragment(radioButtons)}
            </div>
        )
    }

    handleRadioChange = (value) => {
        if (this.state.value !== value) {
            this.setState({ value });
        }

        if (this.props.value !== value && this.props.onChange) {
            this.props.onChange(value);
        }
    }

}

export default RadioGroup;