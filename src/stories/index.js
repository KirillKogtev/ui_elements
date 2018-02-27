import React from 'react';

import {storiesOf} from '@storybook/react';
import Buttons from './Button';
import Inputs from './Input';
import Datepicker from "./Datepicker";

storiesOf('Components', module)
    .add('Buttons', () => Buttons)
    .add('Inputs', () => Inputs)
    .add('Datepicker', () => Datepicker);
