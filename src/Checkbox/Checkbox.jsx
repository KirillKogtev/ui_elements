import React from 'react';
import cn from 'cn-decorator';
import Types from 'prop-types';


@cn('checkbox')
class Checkbox extends React.Component {

    static propTypes = {
        className: Types.string,
        name: Types.string,
        id: Types.string,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        checked: Types.bool,
        disabled: Types.bool,
        onFocus: Types.func,
        onBlur: Types.func,
        onClick: Types.func,
        onChange: Types.func,
        onMouseEnter: Types.func,
        onMouseLeave: Types.func,
    };

    state = {
        checked: this.props.checked || false,
        hovered: false,
        focused: false,
    };

    render(cn) {

        let elementProps = {
            // className: this.props.className,
            name: this.props.name,
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
                        }
                    )}
                    {...elementProps}
                >
                    <input
                        className={cn('checkbox_element')}
                        type="checkbox" name="checkbox"
                    />
                        <i
                            className={cn(
                                'i_element', {
                                    hover: this.state.hovered,
                                    check: this.state.checked,
                                }
                            )}
                        ></i>
                    132312
                </label>
            </div>
        )
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
            let nextCheckedValue = !(
                this.props.checked !== undefined
                    ? this.props.checked
                    : this.state.checked
            );

            this.setState({ checked: nextCheckedValue });

            if (this.props.onChange) {
                this.props.onChange(nextCheckedValue, this.props.value);
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

export default Checkbox;