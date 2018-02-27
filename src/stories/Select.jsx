import React from 'react';
import {ThemeProvider, Select} from "../index";

export default (
    <ThemeProvider theme={'light_theme'}>
        <div style={{margin: '20px'}}>
            <Select/>
        </div>
    </ThemeProvider>
)