import React from 'react';
import Types from 'prop-types';
import keycode from 'keycode';
import cn from 'cn-decorator';
import './Button.css';


@cn('button')
class Button extends React.Component {

    static propTypes = {
        text: Types.node,
        name: Types.string,
        disabled: Types.bool,
        size: Types.oneOf(['large', 'default', 'small']),
        type: Types.oneOf(['button', 'submit']),
        view_type: Types.oneOf(['default', 'additional', 'special']),
        theme: Types.oneOf(['dark_theme', 'light_theme']),
        children: Types.oneOfType([Types.arrayOf(Types.node), Types.node]),
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
        view_type: 'default',
    };

    state = {
        focused: false,
        pressed: false,
        disabled: false,
    };

    render(cn) {

        let elementProps = {
            name: this.props.name,
            type: this.props.type,
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
            <span key={'leftElement'}>
                {this.props.leftElements}
            </span>,
            (this.props.children || this.props.text) &&
            <span key={'text'} className={cn('text')}>
                {this.props.children || this.props.text}
            </span>,
            this.props.rightElements &&
            <span key={'rightElement'}>
                {this.props.rightElements}
            </span>
        ];

        return (
            <button
                {...elementProps}
                className={cn({
                    size: this.props.size,
                    type: this.props.view_type,
                    disabled: this.props.disabled,
                })}>
                {elementContent}
            </button>
        );
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
            this.props.onMouseOut(e);
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