import React from 'react';
import Types from 'prop-types';

class ThemeProvider extends React.Component {

    static defaultProps = {
      children: Types.node,
      className: Types.string,
      theme: Types.oneOf(['dark_theme', 'light_theme']),
    };

    static contextTypes = {
        theme: Types.string,
    };

    static childContextTypes = {
        theme: Types.string,
    };

    getChildContext() {
        return {
            theme: this.props.theme
        };
    }

    render() {
        return React.Children.only(this.props.children);
    }
}

export default ThemeProvider;