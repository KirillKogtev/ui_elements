import React from 'react';
import cn from 'cn-decorator';
import Types from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

@cn('disclaimer')
class Disclaimer extends React.Component {

    static propTypes = {
        name: Types.string,
        id: Types.string,
        text: Types.string,
        height: Types.string,
        children: Types.oneOfType([Types.arrayOf(Types.node), Types.node]),
    };

    render(cn) {
        return (
            <Scrollbars style={{height:this.props.height}} className={cn()}>
                <div className={cn('text_block')}>
                    {this.props.children || this.props.text}
                </div>
            </Scrollbars>
        );
    }
}

export default Disclaimer;