import React from 'react';
import {ThemeProvider, ProgressBar} from '../index';

export default (
    <ThemeProvider theme={'light_theme'}>
        <div>
            <ProgressBar position={2} options={['test1','test2','test3','test4']}/>
        </div>
    </ThemeProvider>
)