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

    };

    render(cn) {
        return <div></div>
    }
}

export default Select;