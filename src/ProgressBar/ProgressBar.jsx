import React from 'react';
import cn from 'cn-decorator';
import Types from 'prop-types';
import createFragment from "react-addons-create-fragment";

@cn('progress_bar')
class ProgressBar extends React.Component {

    static propTypes = {
        id: Types.string,
        name: Types.string,
        position: Types.number,
        options: Types.arrayOf(Types.string),
        // view: Types.oneOf(['vertical', 'horizontal']),
        theme: Types.oneOf(['light_theme', 'dark_theme']),
    };

    renderProgress = (index, length, cn) => {

        console.log('index'+index);
        console.log('length'+length);

        return (
            [(index !== 0 && index !== length - 1 && index < this.props.position - 1) &&
                <div key={'standart'} className={cn('progress')}>
                    <span className={cn('left_progress')}></span>
                    <span className={cn('right_progress')}></span>
                </div>,
            index === 0 && index !== this.props.position - 1 &&
                    <span key={'start'} className={cn('right_progress_start')}></span>,
            index === length - 1 && index === this.props.position - 1 &&
                    <span key={'end'} className={cn('left_progress_end')}></span>,
            (index !== 0 && index !== length - 1 && index === this.props.position - 1) &&
                <div key={'null'} className={cn('progress')}>
                    <span className={cn('left_progress')}></span>
                </div>,
            ])
    };

    renderOptional = (obj, cn) => {

        let bullets = {};

        obj.forEach((label, index) => {
            bullets[`bullet_${index}`] = (
                <div className={cn('optional', {
                    active: index === this.props.position - 1,
                    start: index === 0,
                    end: index === obj.length - 1,
                    blue: index < this.props.position - 1,
                })}>
                    {this.renderProgress(index, obj.length, cn)}
                    {label}
                </div>
            );
        });

        return createFragment(bullets)
    };

    render(cn) {

        let obj = this.props.options;

        return (
            <div className={cn()}>
                {this.renderOptional(obj, cn)}
            </div>
        )
    }
}

export default ProgressBar;