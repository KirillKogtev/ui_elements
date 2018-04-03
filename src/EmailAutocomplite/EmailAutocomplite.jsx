import React from 'react';
import Types from 'prop-types';
import cn from 'cn-decorator';
import InputMask from 'react-input-mask';

@cn('email_autocomplite')
class Input extends React.Component {

    static propTypes = {
        placeholder: Types.string,
        placeholderData: Types.string,
        value: Types.string,
        defaultValue: Types.string,
        rightElements: Types.node,
        leftElements: Types.node,
        className: Types.string,
        name: Types.string,
        id: Types.string,
        width: Types.string,
        theme: Types.oneOf(['light_theme', 'dark_theme']),
        domains: Types.array,
        maxLength: Types.number,
        tabIndex: Types.number,
        pattern: Types.object,
        error: Types.bool,
        focused: Types.bool,
        readOnly: Types.bool,
        autoFocus: Types.bool,
        disabled: Types.bool,
        onChange: Types.func,
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
        isDatepicker: false,
        domains: ['gmail.com', 'mail.ru', 'yandex.ru', 'ya.ru', 'rambler.ru', 'list.ru', 'bk.ru'
            , 'inbox.ru', 'yahoo.ru', 'hotmail.ru', 'vk.com', 'nm.ru'],
    };

    constructor(props) {
        super(props);
        this.state = {
            read: false,
            focused: this.props.focused || false,
            disabled: false,
            value: this.props.defaultValue || '',
            domains: this.props.domains,
            suggestion: '',
        };

        this.value = '';

        this.element = {};
    }

    getElementRefs = (node) => {
        this.element = node;
    };

    componentDidMount() {
        if (this.props.focused) {
            this.element.focus();
        }
    }

    render(cn) {

        let value = this.props.value === undefined ? this.state.value : this.props.value;

        let elementProps = {
            className: this.props.className,
            pattern: this.props.pattern,
            name: this.props.name,
            id: this.props.id,
            maxLength: this.props.maxLength,
            tabIndex: this.props.tabIndex,
            readOnly: this.props.readOnly,
            autoFocus: this.props.autoFocus,
            disabled: this.props.disabled,
            value,
            ref: this.getElementRefs,
            onChange: this.handleChange,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            onPaste: this.handlePaste,
            onTouchCancel: this.handleTouchCancel,
            onTouchEnd: this.handleTouchEnd,
            onTouchStart: this.handleTouchStart,
            onTouchMove: this.handleTouchMove,
        };

        let rightContent =
            this.props.rightElements
            && <div key={'rightElement'} className={cn('rightElement')}>{this.props.rightElements}</div>;

        let leftContent = this.props.leftElements
            && <div key={'leftElement'} className={cn('leftElement')}>{this.props.leftElements}</div>;

        return (
            <div
                className={cn()}
                style={{width: this.props.width}}
            >
                <div
                    className={cn('input_block')}
                >
                    {rightContent}
                    <input
                        {...elementProps}
                        className={cn('input_element', {
                            right: this.props.rightElements,
                            left: this.props.leftElements,
                            disabled: this.props.disabled,
                            error: this.props.error,
                            focused: this.state.focused,
                            readonly: this.props.readOnly ? true : false,
                        })}
                    />
                    {leftContent}
                </div>
                <label
                    className={cn('label', {
                        active: Boolean((this.state.focused || value)),
                    })}
                >
                    {this.props.placeholder || this.props.placeholderData}
                </label>
            </div>
        );
    }

    handleChange = (e) => {

        e = this.changeValue(e);

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };

    handleClick = (e) => {

        if (this.props.read) {
            e.preventDefault();
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(e);
        }

    };

    handleFocus = (e) => {

        if (this.props.read) {
            e.preventDefault();
            return;
        }

        this.setState({
            focused: true,
        });

        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }

    };

    handleBlur = (e) => {
        this.setState({
            focused: false,
        });

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }

    };

    handleKeyDown = (e) => {

        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }

    };

    handleKeyUp = (e) => {

        let protectedKeyCodes = [9, 17, 18, 35, 36, 37, 38, 39, 40, 45];
        if (protectedKeyCodes.indexOf(e.keyCode) >= 0) {
            return;
        }

        if (e.keyCode === 8) {
            this.setState({
                value: e.target.value.replace(this.state.suggestion, '')
            });
        } else {
            if (typeof this.state.suggestion === 'undefined' || this.state.suggestion.length < 1) {
                return false;
            } else {
                let startPos = this.state.value.indexOf(this.state.suggestion);
                let endPos = startPos + this.state.suggestion.length;
                this.element.setSelectionRange(startPos, endPos);
            }
        }

        if (this.props.onKeyUp) {
            this.props.onKeyUp(e);
        }

    };

    handlePaste = (e) => {

        if (this.props.onPaste) {
            this.props.onPaste(e);
        }

    };

    handleTouchStart = (e) => {

        if (this.props.read) {
            e.preventDefault();
            return;
        }

        if (this.props.onTouchStart) {
            this.props.onTouchStart(e);
        }

    };

    handleTouchEnd = (e) => {

        if (this.props.onTouchEnd) {
            this.props.onTouchEnd(e);
        }

    };

    handleTouchMove = (e) => {

        if (this.props.onTouchMove) {
            this.props.onTouchMove(e);
        }

    };

    handleTouchCancel = (e) => {

        if (this.props.onTouchCancel) {
            this.props.onTouchCancel(e);
        }

    };

    changeValue(e) {
        if (this.props.pattern) {
            e.target.value = e.target.value.replace(this.props.pattern, '');
        }

        let value = e.target.value;

        let suggest = this.suggest(value);

        if (!(typeof suggest === 'undefined' || suggest.length < 1)) {
            value += suggest;
        }

        this.setState({
            value,
            suggestion: suggest
        });

        return value;
    }

    suggest(string) {
        if (!Array.prototype.indexOf) {
            this.doIndexOf();
        }

        let str_arr = string.split('@');
        if (str_arr.length > 1) {
            string = str_arr.pop();
        } else {
            return;
        }

        let match = this.state.domains.filter((domain) => {
            return 0 === domain.indexOf(string);
        }).shift() || '';

        return match.replace(string, '');
    }

    doIndexOf() {
        Array.prototype.indexOf = function (searchElement, fromIndex) {
            if (this === undefined || this === null) {
                throw new TypeError('"this" is null or not defined');
            }

            var length = this.length >>> 0; // Hack to convert object.length to a UInt32
            fromIndex = +fromIndex || 0;

            if (Math.abs(fromIndex) === Infinity) {
                fromIndex = 0;
            }

            if (fromIndex < 0) {
                fromIndex += length;
                if (fromIndex < 0) {
                    fromIndex = 0;
                }
            }

            for (; fromIndex < length; fromIndex++) {
                if (this[fromIndex] === searchElement) {
                    return fromIndex;
                }
            }

            return -1;
        }
    }
}

export default Input;