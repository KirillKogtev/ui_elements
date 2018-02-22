import React from 'react';
import Types from 'prop-types';
import keycode from 'keycode';

const styles = require('./Button.css');

class Button extends React.Component {

    static propTypes = {
        text: Types.string,
        name: Types.string,
        icon: Types.node,
        focused: Types.bool,
        disabled: Types.bool,
        pressed: Types.bool,
        size: Types.oneOf(['large', 'default', 'small']),
        type: Types.oneOf(['button', 'submit']),
        theme: Types.oneOf(['dark_theme', 'light_theme']),
        tabIndex: Types.number,
        rightElements: Types.node,
        leftElements: Types.node,
        className: Types.string,
        onClick: Types.func,
        onFocus: Types.func,
        onBlur: Types.func,
        onMouseEnter: Types.func,
        onMouseLeave: Types.func,
        onMouseDown: Types.func,
        onMouseUp: Types.func,
        onMouseOut: Types.func,
        onKeyDown: Types.func,
        onKeyUp: Types.func,
    };

    static defaultProps = {
        text: 'button',
        type: 'button',
        size: 'default',
    };

    state = {
        focused: false,
        pressed: false,
        disabled: false,
    };

    render() {
        const element = 'button';

        let elementProps = {
            name: this.props.name,
            tabIndex: this.props.tabIndex,
            disabled: this.props.disabled,
            className: this.props.className,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            onMouseOut: this.handleMouseOut,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
        };

        let elementContent = [
            this.props.leftElements &&
            <span key='left-addons'>
                    {this.props.leftElements}
                </span>,
            this.props.icon &&
            <span key='icon' className={styles.icon}>
                    {this.props.icon}
                </span>,
            (this.props.children || this.props.text) &&
            <span key='text' className={styles.text}>
                    {this.props.children || this.props.text}
                </span>,
            this.props.rightElements &&
            <span key='right-addons'>
                    {this.props.rightElements}
                </span>
        ];
        return React.createElement(element, elementProps, elementContent);
    }

    handleClick = (e) => {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    };

    handleFocus = (e) => {
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    };

    handleBlur = (e) => {
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };


    handleMouseEnter = (e) => {
        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(e);
        }
    };

    handleMouseLeave = (e) => {
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    };

    handleMouseDown = (e) => {
        if (!this.props.disabled) {
            this.setState({pressed: true});
        }

        if (this.props.onMouseDown) {
            this.props.onMouseDown(e);
        }
    };

    handleMouseUp = (e) => {
        if (!this.props.disabled) {
            this.setState({pressed: false});
        }

        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    };

    handleMouseOut = (e) => {
        if (!this.props.disabled) {
            this.setState({pressed: false});
        }

        if (this.props.onMouseOut) {
            this.props.onClick(e);
        }
    };

    handleKeyDown = (e) => {
        if ((e.which === keycode("Enter") || e.which === keycode("Space")) && !this.props.disabled) {
            this.setState({pressed: true});
        }
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }
    };

    handleKeyUp = (e) => {
        if ((e.which === keycode("Enter") || e.which === keycode("Space")) && !this.props.disabled) {
            this.setState({pressed: false});
        }
        if (this.props.onKeyUp) {
            this.props.onKeyUp(e);
        }
    };

    blur = () => {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    };

}

export default Button;