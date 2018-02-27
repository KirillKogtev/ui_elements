import React from 'react';
import {action} from '@storybook/addon-actions';
import {Button, ThemeProvider} from '../index';

export default (
    <ThemeProvider theme={'dark_theme'}>
        <div>
            <div>
                Дефолтное состояние обычной кнопки кнопки:<br/>
                <Button
                    name={'default'}
                    onClick={action('Click')}
                    onBlur={action('Blur')}
                    onFocus={action('Focus')}
                    onMouseDown={action('MouseDown')}
                    onMouseLeave={action('MouseLeave')}
                    onMouseOut={action('MouseOut')}
                    onKeyUp={action('KeyUp')}
                    onKeyDown={action('LeyDown')}
                >default</Button>
            </div>
            <div>
                Кнопка заблокирована:<br/>
                <Button
                    name={'disabled'}
                    text={'disabled'}
                    disabled={true}
                />
            </div>
            <hr/>
            <div>
                Большая кнопка: <br/>
                <Button
                    size={'large'}
                >
                    Большая кнопка
                </Button>
            </div>
            <div>
                Обычная кнопка: <br/>
                <Button
                >
                    Обычная кнопка
                </Button>
            </div>
            <div>
                Маленькая кнопка: <br/>
                <Button
                    size={'small'}
                >
                    Маленькая кнопка
                </Button>
            </div>
            <hr/>
            <div>
                Обычная кнопка <br/>
                <Button
                    view_type={'default'}
                />
            </div>
            <div>
                Спец.кнопка <br/>
                <Button
                    view_type={'special'}
                />
            </div>
            <div>
                Дополнительная кнопка <br/>
                <Button
                    view_type={'additional'}
                />
            </div>
            <hr/>
            <div>
                Элемент слева <br/>
                <Button
                    leftElements={<img src="https://cs6.pikabu.ru/post_img/2017/05/31/10/149624840938786004.png"
                                       alt=""/>}
                    text={'Левый элемент'}
                />
            </div>
            <div>
                Элемент справа <br/>
                <Button
                    rightElements={<img src="https://cs6.pikabu.ru/post_img/2017/05/31/10/149624840938786004.png"
                                        alt=""/>}
                    text={'Правый элемент'}
                />
            </div>
        </div>
    </ThemeProvider>
);