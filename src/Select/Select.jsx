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
        options: Types.arrayOf(Types.shape({value: Types.string, label: Types.string})),
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
        width: '450px',
    };

    state = {
        opened: this.props.opened,
        selectedOption: '',
    };

    render(cn) {

        const {selectedOption} = this.state;
        const value = selectedOption && selectedOption.value;

        let elementProps = {
            className: this.props.className,
            id: this.props.is,
            name: this.props.name,
            disabled: this.props.disabled,
            autoFocus: this.props.focused,
            options: this.props.options,
            placeholder: '',
            value,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onClick: this.handleClick,
            onKeyDown: this.handleKeyDown,
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd,
            onTouchMove: this.handleTouchMove,
            onTouchCancel: this.handleTouchCancel,
            onChange: this.handleChange,
        };

        return (
            <div style={{width: this.props.width}} className={cn()} >
                <SelectJW
                    {...elementProps}
                />
                <label
                    className={cn('label',{
                        active: Boolean((this.state.focused || value)),
                    })}
                >
                    {this.props.placeholder}
                </label>
            </div>);
    }

    handleFocus = (e) => {

        this.setState({focused: true});

        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }

    };

    handleBlur = (e) => {

        this.setState({focused: false});

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }

    };

    handleClick = (e) => {

        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }

    };

    handleKeyDown = (e) => {

        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }

    };

    handleTouchStart = (e) => {

        if (this.props.onTouchStart) {
            this.props.onTouchStart(e);
        }

    };

    handleTouchEnd = (e) => {

        if (this.props.onTouchEnd) {
            this.props.onTouchEnd(e);
        }

    };

    handleTouchMove = (e) => {

        if (this.props.onTouchMove) {
            this.props.onTouchMove(e);
        }

    };

    handleTouchCancel = (e) => {

        if (this.props.onTouchCancel) {
            this.props.onTouchCancel(e);
        }

    };

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
    };
}

export default Select;