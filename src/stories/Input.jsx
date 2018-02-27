import React from 'react';
import Input from '../Input';
import ThemeProvider from '../ThemeProvider';

export default (
    <div>
        <ThemeProvider theme={'light_theme'}>
            <div style={{padding: '50px 0'}}>
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
                    <Input placeholder={'Не активное'} disabled/>
                </div>
                <div>
                    <Input placeholder={'Пароль'} type={'password'}/>
                </div>
            </div>
        </ThemeProvider>
        <ThemeProvider theme={'dark_theme'}>
            <div style={{background: '#002d72', padding: '50px 0'}}>
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
    </div>
)