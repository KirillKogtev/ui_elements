import React from 'react';
import Types from 'prop-types';
import cn from 'cn-decorator';

@cn('input')
class Input extends React.Component {

    static propTypes = {
        placeholder: Types.string,
        value: Types.string,
        defaultValue: Types.string,
        rightElements: Types.string,
        leftElements: Types.string,
        className: Types.string,
        pattern: Types.string,
        mask: Types.string,
        name: Types.string,
        id: Types.string,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        maxLength: Types.number,
        tabIndex: Types.number,
        error: Types.node,
        focused: Types.bool,
        read: Types.bool,
        disabled: Types.bool,
        onChange: Types.func,
        onClick: Types.func,
        onFocus: Types.func,
        onBlur: Types.func,
        onKeyDown: Types.func,
        onKeyUp: Types.func,
        onPaste: Types.func,
        onTouchStart: Types.func,
        onTouchEnd: Types.func,
        onTouchMove: Types.func,
        onTouchCancel: Types.func,
    };

    state = {
        read: false,
        focused: false,
        disabled: false,
        value: this.props.defaultValue || '',
    };

    element = {};

    getElementRefs = (node) => {
        this.element = node;
    };

    render(cn) {

        let value = this.props.value === undefined ? this.state.value : this.props.value;
        let elementProps = {
            placeholder: this.props.placeholder,
            className: this.props.className,
            pattern: this.props.pattern,
            name: this.props.name,
            id: this.props.id,
            maxLength: this.props.maxLength,
            tabIndex: this.props.tabIndex,
            ref: this.getElementRefs,
            onChange: this.handleChange,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            onPaste: this.handlePaste,
            onTouchCancel: this.handleTouchCancel,
            onTouchEnd: this.handleTouchEnd,
            onTouchStart: this.handleTouchStart,
            onTouchMove: this.handleTouchMove,
        };

        return <div></div>
    }

    handleChange = (e) => {
        let value = e.target.value;

        this.changeValue(value);
    };

    handleClick = (e) => {

        if (this.props.onClick) {
            this.props.onClick(event);
        }

    };

    handleFocus = (e) => {
        this.setState({focused: true});

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }

    };

    handleBlur = (e) => {
        this.setState({focused: false});

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }

    };

    handleKeyDown = (e) => {

        if (this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }

    };

    handleKeyUp = (e) => {

        if (this.props.onKeyUp) {
            this.props.onKeyUp(event);
        }

    };

    handlePaste = (e) => {

        if (this.props.onPaste) {
            this.props.onPaste(event);
        }

    };

    handleTouchStart = (e) => {

        if (this.props.onTouchStart) {
            this.props.onTouchStart(event);
        }

    };

    handleTouchEnd = (e) => {

        if (this.props.onTouchEnd) {
            this.props.onTouchEnd(event);
        }

    };

    handleTouchMove = (e) => {

        if (this.props.onTouchMove) {
            this.props.onTouchMove(event);
        }

    };

    handleTouchCancel = (e) => {

        if (this.props.onTouchCancel) {
            this.props.onTouchCancel(event);
        }

    };

    changeValue(value) {
        if (this.props.value === undefined) {
            this.setState({ value });
        }

        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
}

export default Input;