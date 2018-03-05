import React from 'react';
import cn from 'cn-decorator';
import Types from 'prop-types';

@cn('progress_bar')
class ProgressBar extends React.Component {

    static propTypes = {
        id: Types.string,
        name: Types.string,
        position: Types.node,
        options: Types.arrayOf(Types.shape({value: Types.string, label: Types.string})),
        // view: Types.oneOf(['vertical', 'horizontal']),
        theme: Types.oneOf(['light_theme', 'dark_theme']),
    };

    renderOptional = (obj, cn) => {
        return (
            <div
                className={cn('optional',
                    {
                        active: obj.active,
                        start: obj.start,
                    })}>
                    {obj.label}
            </div>)
    };

    render(cn) {
        return <div className={cn()}>{
            this.renderOptional({active: false, label: 'test', start: false,}, cn)
        }</div>
    }
}

export default ProgressBar;