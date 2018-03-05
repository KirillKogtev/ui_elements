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
        selectedOption: '',
    };

    render(cn) {

        let elementProps = {
            id: this.props.id,
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
                            check: this.state.selectedOption === this.props.value,
                            disabled: this.props.disabled,
                            error: this.props.error,
                        }
                    )}
                    {...elementProps}
                >
                    <input
                        className={cn('radio_element')}
                        type="radio"
                        disabled={this.props.disabled}
                        value={this.props.value}

                    />
                    <i
                        className={cn(
                            'i_element', {
                                hover: this.state.hovered,
                                check: this.state.selectedOption === this.props.value,
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

            this.setState({selectedOption: e.target.value});

            console.log(e.target.value);

            if (this.props.onChange) {
                this.props.onChange(e.target.value);
            }
        }
    };

    handleFocus = (e) => {
        if (!this.props.disabled) {
            this.setState({focused: true});
        }

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    };

    handleBlur = (e) => {
        if (!this.props.disabled) {
            this.setState({focused: false});
        }

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };

    handleMouseEnter = (e) => {
        this.setState({hovered: true});

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(e);
        }
    };

    handleMouseLeave = (e) => {
        this.setState({hovered: false});

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    };
}

export default Radio;