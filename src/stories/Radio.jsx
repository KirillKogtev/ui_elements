import React from 'react';
import {ThemeProvider, Radio, RadioGroup} from '../index';

export default (
    <ThemeProvider theme={'light_theme'}>
        <div>
            <RadioGroup>
                <Radio value={'1'} label={'первый'}/>
                <Radio value={'2'} label={'второй'}/>
                <Radio value={'3'} label={'третий'}/>
            </RadioGroup>
        </div>
    </ThemeProvider>
)