import React from 'react';
import {ThemeProvider, Checkbox} from "../index";

export default (
    <ThemeProvider theme={'light_theme'}>
        <div>
            <div>
                <Checkbox label={'Выбранный пункт'} checked/>
            </div>
            <div>
                <Checkbox label={'Обычное состояние'}/>
            </div>
            <div>
                <Checkbox disabled label={'Неактивный'}/>
            </div>
            <div>
                <Checkbox error label={'Ошибка'}/>
            </div>
        </div>
    </ThemeProvider>
)