import React from 'react';

const styles = require('./Button.css');

class Button extends React.Component {

    render() {
        console.log(styles);
        return <div className={styles.test}>12312</div>
    }


}

export default Button;