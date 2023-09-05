import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import {  useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
    const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página inicial',
                icon: 'home',
                path: '/pagina-inicial',
            },
            {
                label: 'Secretaria',
                icon: 'star',
                path: '/secretaria',
            },
            {
                label: 'Sistemas',
                icon: 'settingssuggest',
                path: '/sistemas',
            },
            {
                label: 'Und. de Ensino',
                icon: 'school',
                path: '/unidade-ensino',
            },

            {
                label: 'Fale conosco',
                icon: 'phoneiphone',
                path: '/fale-conosco',
            },
        ]);
    }, []);

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />
            <Route path="/secretaria" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />
            <Route path="/sistemas" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />
            <Route path="/unidade-ensino" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />
            <Route path="/fale-conosco" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}
