import React from 'react';
import cn from 'cn-decorator';
import Types from 'prop-types';
import createFragment from "react-addons-create-fragment";

@cn('breadcrumbs')
class Breadcrumbs extends React.Component {

    static propTypes = {
        name: Types.string,
        id: Types.string,
        theme: Types.oneOf(['dark_theme', 'light_theme']),
        options: Types.arrayOf(Types.shape({label: Types.string, link: Types.string})),
    };

    renderOption = (cn) => {
        let optionsElem = {};
        let length = this.props.options.length;

        optionsElem['breadcrumb0'] = (
            <a
                className={cn('item')}
                href={this.props.options[0].link}
            >
                {this.props.options[0].label}
            </a>
        );

        for (let i = 1; i < length - 1; i++) {
            optionsElem[`breadcrumb${i}`] = (
                <a
                    className={cn('item')}
                    href={this.props.options[i].link}
                >
                    {this.props.options[i].label}
                </a>
            )
        }

        optionsElem[`breadcrumb${length - 1}`] = (
            <div
                className={cn('item', {
                    end: true,
                })}
                href={this.props.options[length - 1].link}
            >
                {this.props.options[length - 1].label}
            </div>
        );

        return optionsElem;
    };

    render(cn) {

        let optionsElem = this.renderOption(cn);

        return (
            <div className={cn()}>
                {createFragment(optionsElem)}
            </div>
        );
    }
}

export default Breadcrumbs;