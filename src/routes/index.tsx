
import { Routes, Route, Navigate } from 'react-router-dom';

import {  useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
    const { setDrawerOptions} = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página inicial',
                icon: 'home',
                path: '/pagina-inicial',
            },
        ]);
    }, []);

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />
         {  /* <Route path="/secretaria" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />
            <Route path="/sistemas" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />
            <Route path="/unidade-ensino" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />
    <Route path="/fale-conosco" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} /> */ }

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}
