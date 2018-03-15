import React from 'react';
import Types from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Input from '../Input';
import 'moment/locale/ru';
import calndar from '../Images/Calendar.svg';
import cn from 'cn-decorator';


@cn('datepicker')
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
        width: '100%',
        disabled: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            startDate: this.props.defaultValue ? moment(this.props.defaultValue) : moment(),
        };
    }

    handleChange = (date) => {
        this.setState({
            startDate: date,
        });
    };

    render(cn) {

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
                isDatepicker={true}
                width={this.props.width}
                rightElements={imgCalendar}
            />
        );

        return <div className={cn()}>
            <DatePicker
                {...elementProps}
                selected={this.state.startDate}
                onSelect={this.handleChange}
                customInput={InputCusom}
                locale="ru"
                style={{width: this.props.width}}
            />
        </div>
    }
}

export default Datepicker;