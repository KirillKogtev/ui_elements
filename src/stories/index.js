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
    </div>
);

storiesOf('Button', module)
    .add('with text', () => Buttons);
