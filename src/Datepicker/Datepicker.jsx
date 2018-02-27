import React from 'react';
import Types from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Input from '../Input';
import 'moment/src/locale/ru';
import calndar from '../Images/Calendar.svg'

class Datepicker extends React.Component {

    static propTypes = {
        className: Types.string,
        id: Types.string,
        name: Types.string,
        placeholder: Types.string,
        width: Types.string,
        disabled: Types.bool,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        defaultValue: Types.node,
    };

    static defaultProps = {
        width: '363px',
        disabled: false,
    };

    constructor(props) {
        super(props);

        if (props.defaultValue) {
            this.state = {
                startDate: moment(props.defaultValue)
            };
        } else {
            this.state = {
                startDate: moment()
            };
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {

        let inputProps = {
            width: this.props.width,
            name: this.props.name,
            placeholder: this.props.placeholder,
        };

        let elementProps = {
            className: this.props.className,
            id: this.props.id,
            disabled: this.props.disabled,
        };

        let imgCalendar = (
            <img src={calndar}/>
        );

        let InputCusom = (
            <Input
                {...inputProps}
                mask={'99.99.9999'}
                width={this.props.width}
                rightElements={imgCalendar}
            />
        );

        return <div>
            <DatePicker
                {...elementProps}
                selected={this.state.startDate}
                onSelect={this.handleChange}
                customInput={InputCusom}
                locale="ru"
            />
        </div>
    }
}

export default Datepicker;