import React from 'react';

import {storiesOf} from '@storybook/react';
import Buttons from './Button';
import Inputs from './Input';
import Datepicker from "./Datepicker";
import Select from './Select';
import Checkbox from './Checkbox';
import Switch from "./Switch";
import Radio from './Radio';
import ProgressBar from './ProgressBar';

storiesOf('Components', module)
    .add('Buttons', () => Buttons)
    .add('Inputs', () => Inputs)
    .add('Datepicker', () => Datepicker)
    .add('Select', () => Select)
    .add('Checkbox', () => Checkbox)
    .add('Switch', () => Switch)
    .add('Radio', () => Radio)
    .add('ProgressBar', () => ProgressBar);
