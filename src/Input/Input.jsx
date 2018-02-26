import React from 'react';
import Types from 'prop-types';

class Input extends React.Component {

    static defaultProps = {
        placeholder: Types.string,
        value: Types.string,
        rightElements: Types.string,
        leftElements: Types.string,
        error: Types.node,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        className: Types.string,
        pattern: Types.string,
        mask: Types.string,
        disabled: Types.bool,
        read: Types.bool,
        name: Types.string,
        id: Types.string,
        tabIndex: Types.number,
        onChange: Types.func,
        onFocus: Types.func,
        onBlur: Types.func,
        onKeyDown: Types.func,
        onKeyUp: Types.func,
        onPaste: Types.func,
        onTouchStart: Types.func,
        onTouchEnd: Types.func,
        onTouchMove: Types.func,
        onTouchCancel: Types.func,
        onProcessMaskInputEvent: Types.func,
    };

    render() {
        return <div></div>
    }
}

export default Input;