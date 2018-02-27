import React from 'react';
import {ThemeProvider, Datepicker} from "../index";

export default (
    <ThemeProvider theme={'light_theme'}>
        <div>
            <Datepicker defaultValue={'03.04.1995'}/>
        </div>
    </ThemeProvider>
)