import React from 'react';
import Types from 'prop-types';
import cn from 'cn-decorator';
import InputMask from 'react-input-mask';

@cn('input')
class Input extends React.Component {

    static propTypes = {
        placeholder: Types.string,
        value: Types.string,
        defaultValue: Types.string,
        rightElements: Types.node,
        leftElements: Types.node,
        className: Types.string,
        mask: Types.string,
        name: Types.string,
        id: Types.string,
        width: Types.string,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        type: Types.oneOf(['email', 'number', 'text', 'tel', 'search', 'url', 'password']),
        maxLength: Types.number,
        tabIndex: Types.number,
        error: Types.node,
        focused: Types.bool,
        readOnly: Types.bool,
        autoFocus: Types.bool,
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

    static defaultProps = {
        width: '450px',
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
            className: this.props.className,
            pattern: this.props.pattern,
            name: this.props.name,
            id: this.props.id,
            maxLength: this.props.maxLength,
            tabIndex: this.props.tabIndex,
            readOnly: this.props.readOnly,
            autoFocus: this.props.autoFocus,
            disabled: this.props.disabled,
            type: this.props.type,
            mask: this.props.mask,
            value,
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

        let rightContent =
            this.props.rightElements
            && <div key={'rightElement'} className={cn('rightElement')}>{this.props.rightElements}</div>;

        let leftContent = this.props.leftElements
            && <div key={'leftElement'} className={cn('leftElement')}>{this.props.leftElements}</div>;

        return (
            <div
                className={cn()}
                style={{width: this.props.width}}
            >
                <div
                    className={cn('input_block')}
                >
                    {rightContent}
                    <InputMask
                        {...elementProps}
                        className={cn('input_element', {
                            right: this.props.rightElements,
                            left: this.props.leftElements,
                            disabled: this.props.disabled,
                            error: this.props.error,
                            focused: this.state.focused,
                            readonly: this.props.readOnly ? true : false,
                        })}
                    />
                    {leftContent}
                </div>
                <label
                    className={cn('label',{
                        active: Boolean((this.state.focused || value)),
                    })}
                >
                    {this.props.placeholder}
                </label>
            </div>
        );
    }

    handleChange = (e) => {
        let value = e.target.value;

        this.changeValue(value);
    };

    handleClick = (e) => {

        if (this.props.read) {
            e.preventDefault();
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(e);
        }

    };

    handleFocus = (e) => {

        if (this.props.read) {
            e.preventDefault();
            return;
        }

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

    handleKeyDown = (e) => {

        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }

    };

    handleKeyUp = (e) => {

        if (this.props.onKeyUp) {
            this.props.onKeyUp(e);
        }

    };

    handlePaste = (e) => {

        if (this.props.onPaste) {
            this.props.onPaste(e);
        }

    };

    handleTouchStart = (e) => {

        if (this.props.read) {
            e.preventDefault();
            return;
        }

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

    changeValue(value) {
        if (this.props.value === undefined) {
            this.setState({value});
        }

        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
}

export default Input;