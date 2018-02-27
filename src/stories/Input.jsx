import React from 'react';
import {Input, ThemeProvider} from '../index';

export default (
    <div>
        <ThemeProvider theme={'light_theme'}>
            <div style={{padding: '50px'}}>
                <div>
                    <Input placeholder={'Обычное состояние'}/>
                </div>
                <div>
                    <Input autoFocus defaultValue={'Фокус'} placeholder={'Фокус'}/>
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
                <div>
                    <Input placeholder={'Маска'} mask={'+7 999 999 99 99'}/>
                </div>
            </div>
        </ThemeProvider>
        <ThemeProvider theme={'dark_theme'}>
            <div style={{background: '#002d72', padding: '50px'}}>
                <div>
                    <Input placeholder={'Обычное состояние'}/>
                </div>
                <div>
                    <Input placeholder={'Фокус'} defaultValue={'Фокус'}/>
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
                <div>
                    <Input placeholder={'Маска'} mask={'aaaa aaaa aaaa aaaa'}/>
                </div>
            </div>
        </ThemeProvider>
    </div>
)