import React from 'react';
import cn from 'cn-decorator';
import Types from 'prop-types';


@cn('select')
class Select extends React.Component {

    static propTypes = {
        className: Types.node,
        id: Types.string,
        name: Types.string,
        placeholder: Types.string,
        width: Types.string,
        disabled: Types.bool,
        opened: Types.bool,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        options: Types.arrayOf(Types.shape({value: Types.string, content: Types.string})),
        onChange: Types.func,
        onFocus: Types.func,
        onBlur: Types.func,
        onClick: Types.func,
        onKeyDown: Types.func,
        onTouchCancel: Types.func,
    };

    static defaultProps = {
        options: [],
    };

    static = {
        opened: this.props.opened,
    };

    render(cn) {
        return <div></div>
    }
}

export default Select;