import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Welcome} from '@storybook/react/demo';


import Button from '../Button'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

const Buttons = (
    <div>
        <div>
            Дефолтное состояние обычной кнопки кнопки:<br/>
            <Button
                name={'default'}
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
    </div>
);

storiesOf('Button', module)
    .add('with text', () => Buttons);
