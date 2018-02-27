import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Input from '../Input';
import 'moment/src/locale/ru';

class Datepicker extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {

        let InputCusom = (
            <Input mask={'99.99.9999'}/>
        );

        return <div>
            <DatePicker
                selected={this.state.startDate}
                onSelect={this.handleChange}
                customInput={InputCusom}
                locale="ru"
            />
        </div>
    }
}

export default Datepicker;