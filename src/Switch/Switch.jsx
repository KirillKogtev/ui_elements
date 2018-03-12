import React from 'react';
import cn from 'cn-decorator';
import Types from 'prop-types';

@cn('switch')
class Switch extends React.Component {

    static propTypes = {
        className: Types.string,
        label: Types.node,
        name: Types.string,
        id: Types.string,
        tabIndex: Types.number,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        leftElement: Types.node,
        rightElement: Types.node,
        icon: Types.bool,
        checked: Types.bool,
        disabled: Types.bool,
        onFocus: Types.func,
        onBlur: Types.func,
        onClick: Types.func,
        onChange: Types.func,
        onMouseEnter: Types.func,
        onMouseLeave: Types.func,
    };

    static defaultProps = {
        label: '',
        icon: false,
    };

    state = {
        checked: this.props.checked || false,
        hovered: false,
        focused: false,
    };

    render(cn) {

        let elementProps = {
            id: this.props.name,
            disabled: this.props.disabled,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
        };


        return (
            <div className={cn()}>
                {this.props.leftElement}
                <label
                    className={cn(
                        'input_element', {
                            hover: this.state.hovered,
                            check: this.state.checked,
                            disabled: this.props.disabled,
                        }
                    )}
                    {...elementProps}
                >
                    <input
                        className={cn('checkbox_element')}
                        type="checkbox"
                        disabled={this.props.disabled}
                        name={this.props.name}
                        defaultChecked={this.state.checked}
                    />
                    <i
                        className={cn(
                            'i_element', {
                                hover: this.state.hovered,
                                check: this.state.checked,
                                disabled: this.props.disabled,
                                icon: this.props.icon,
                            }
                        )}
                    ></i>
                    {this.props.label}
                </label>
                {this.props.rightElement}
            </div>
        );
    }

    handleFocus = (e) => {

        this.setState({focused: true});

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

    handleChange = (e) => {

        if (!this.props.disabled) {

            this.setState({checked: !this.state.checked});

            if (this.props.onChange) {
                this.props.onChange(this.state.checked, this.props.value);
            }
        }

    };

    handleMouseLeave = (e) => {

        if (!this.props.disabled) {
            this.setState({hovered: false});
        }

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }

    };

    handleMouseEnter = (e) => {
        if (!this.props.disabled) {
            this.setState({hovered: true});
        }

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(e);
        }

    };

    handleClick = (e) => {

        if (this.props.onClick) {
            this.props.onClick(e);
        }

    }
}

export default Switch;