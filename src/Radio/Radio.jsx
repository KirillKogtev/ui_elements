import React from 'react';
import cn from 'cn-decorator';
import Types from 'prop-types';

@cn('radio')
class Radio extends React.Component {

    static propTypes = {
        id: Types.string,
        name: Types.string,
        value: Types.string,
        label: Types.string,
        tabIndex: Types.number,
        checked: Types.bool,
        disable: Types.bool,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        onChange: Types.func,
        onFocus: Types.func,
        onBlur: Types.func,
        onMouseEnter: Types.func,
        onMouseLeave: Types.func,
    };

    state = {
        hovered: false,
        checked: false,
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
                <label
                    className={cn(
                        'input_element', {
                            hover: this.state.hovered,
                            check: this.state.checked,
                            disabled: this.props.disabled,
                            error: this.props.error,
                        }
                    )}
                    {...elementProps}
                >
                    <input
                        className={cn('radio_element')}
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
                                error: this.props.error,
                            }
                        )}
                    ></i>
                    {this.props.label}
                </label>
            </div>
        )
    }

    handleClick = (e) => {
        e.stopPropagation();
    };

    handleChange = (e) => {

        if (!this.props.disabled) {

            this.setState({ checked: e.target.checked});

            if (this.props.onChange) {
                this.props.onChange(this.props.value, e.target.checked);
            }
        }
    };

    handleFocus = (e) => {
        if (!this.props.disabled) {
            this.setState({ focused: true });
        }

        if (this.props.type !== 'button') {
            event.target.value = this.props.value;
        }

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    };

    handleBlur = (e) => {
        if (!this.props.disabled) {
            this.setState({ focused: false });
        }

        if (this.props.type !== 'button') {
            event.target.value = this.props.value;
        }

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };

    handleMouseEnter = (e) => {
        this.setState({ hovered: true });

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(e);
        }
    };

    handleMouseLeave = (e) => {
        this.setState({ hovered: false });

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    };
}

export default Radio;