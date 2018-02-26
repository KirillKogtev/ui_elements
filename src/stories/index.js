import React from 'react';

import {storiesOf} from '@storybook/react';
import Buttons from './Button';
import Inputs from './Input';

storiesOf('Components', module)
    .add('Buttons', () => Buttons)
    .add('Inputs', () => Inputs);
