import React from 'react';
import {ThemeProvider, Select} from "../index";

export default (
    <ThemeProvider theme={'light_theme'}>
        <div style={{margin: '20px'}}>
            <Select
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ]}
                placeholder={'select this'}
            />
            <br/><br/>
            <Select
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ]}
                disabled
            />
            <br/><br/>
            <Select
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ]}
                placeholder={'select this'}
                focused
            />
            <br/><br/>
        </div>
    </ThemeProvider>
)