import React from 'react';
import Input from '../Input';
import ThemeProvider from '../ThemeProvider';

export default (
    <ThemeProvider theme={'light_theme'}>
        <div>
            <div>
                <Input placeholder={'Обычное состояние'}/>
            </div>
            <div>
                <Input autoFocus defaultValue={'Фокус'}/>
            </div>
            <div>
                <Input placeholder={'Введите что-нибудь'} defaultValue={'Заполненное поле'}/>
            </div>
            <div>
                <Input defaultValue={'Только просмотр'} readOnly/>
            </div>
            <div>
                <Input placeholder={'Не активное'} disabled={true}/>
            </div>
        </div>
    </ThemeProvider>
)