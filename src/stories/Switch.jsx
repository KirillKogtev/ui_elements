import React from 'react';
import {ThemeProvider, Switch} from "../index";

export default (
    <ThemeProvider theme={'light_theme'}>
        <div>
            <Switch/>
            <Switch checked/>
            <Switch icon/>
        </div>
    </ThemeProvider>
)