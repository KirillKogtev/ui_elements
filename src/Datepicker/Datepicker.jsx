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
        defaultValue: Types.object,
        disabled: Types.bool,
        error: Types.bool,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        onSelect: Types.func,
        onClick: Types.func,
        onFocus: Types.func,
        onBlur: Types.func,
        onKeyDown: Types.func,
        onKeyUp: Types.func,
        onPaste: Types.func,
        onTouchStart: Types.func,
        onTouchEnd: Types.func,
        onTouchMove: Types.func,
        onTouchCancel: Types.func,
    };

    static defaultProps = {
        width: '100%',
        disabled: false,
    };

    constructor(props) {
        super(props);
        moment.locale();
        this.state = {
            startDate: this.props.defaultValue ? moment(this.props.defaultValue) : moment(),
        };
    }

    focusHiddenDatepicker = () => {
        this.datepicker.input.handleClick();
    };

    render(cn) {

        let inputProps = {
            width: this.props.width,
            name: this.props.name,
            placeholderData: this.props.placeholder,
            mask: '99.99.9999',
            isDatepicker: true,
            error: this.props.error,
        };

        let elementProps = {
            className: this.props.className,
            id: this.props.id,
            disabled: this.props.disabled,
            onClick: this.props.onClick,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur,
            onKeyDown: this.props.onKeyDown,
            onKeyUp: this.props.onKeyUp,
            onPaste: this.props.onPaste,
            onTouchStart: this.props.onTouchStart,
            onTouchEnd: this.props.onTouchEnd,
            onTouchMove: this.props.onTouchMove,
            onTouchCancel: this.props.onTouchCancel,
            ref: (datepicker) => this.datepicker = datepicker,
        };

        let imgCalendar = (
            <img src={calndar} className={cn('img')} onClick={this.focusHiddenDatepicker}/>
        );

        let InputCustom = (
            <Input
                {...inputProps}
                rightElements={imgCalendar}
            />
        );

        return <div className={cn()}>
            <DatePicker
                {...elementProps}
                selected={this.state.startDate}
                onSelect={this.handleChange}
                customInput={InputCustom}
                locale="ru"
                style={{width: this.props.width}}
            />
        </div>
    }

    handleChange = (date) => {
        this.setState({
            startDate: date,
        });

        if (this.props.onSelect) {
            date = date === null ? '' : date;
            this.props.onSelect(date);
        }
    };
}

export default Datepicker;