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
    };

    render(cn) {

        let elementProps = {
            className: this.props.className,
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
                <label className={cn('input_element')}>
                    <input className={cn('checkbox_element')} type="checkbox" name="checkbox" />
                        <i className={cn('i_element')}></i>
                </label>
            </div>
        )
    }

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

    handleChange = (e) => {

        if (this.props.onChange) {
            this.props.onChange(e);
        }

    };

    handleMouseLeave = (e) => {

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }

    };

    handleMouseEnter = (e) => {

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