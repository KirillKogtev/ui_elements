import React from 'react';
import cn from 'cn-decorator';
import Types from 'prop-types';

import SelectJW from 'react-select';


@cn('select')
class Select extends React.Component {

    static propTypes = {
        className: Types.node,
        id: Types.string,
        name: Types.string,
        placeholder: Types.string,
        width: Types.string,
        disabled: Types.bool,
        opened: Types.bool,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        options: Types.arrayOf(Types.shape({value: Types.string, content: Types.string})),
        onChange: Types.func,
        onFocus: Types.func,
        onBlur: Types.func,
        onClick: Types.func,
        onKeyDown: Types.func,
        onTouchStart: Types.func,
        onTouchEnd: Types.func,
        onTouchMove: Types.func,
        onTouchCancel: Types.func,
    };

    static defaultProps = {
        options: [],

    };

    state = {
        opened: this.props.opened,
        selectedOption: '',
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    render(cn) {

        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;

        return (<div>
            <SelectJW
                name="form-field-name"
                value={value}
                onChange={this.handleChange}
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ]}
            />
        </div>)
    }
}

export default Select;