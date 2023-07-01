import React, { Suspense } from 'react'
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О компании</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
      </Suspense>

    </div>
  )
}
