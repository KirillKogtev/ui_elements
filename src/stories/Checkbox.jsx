import React from 'react';
import {ThemeProvider, Checkbox} from "../index";

export default (
    <ThemeProvider>
        <div>
            <div>
                <Checkbox/>
                Выбранный пункт
            </div>
            <div>
                <Checkbox/>
                Обычное состояние
            </div>
            <div>
                <Checkbox/>
                Неактивный
            </div>
        </div>
    </ThemeProvider>
)