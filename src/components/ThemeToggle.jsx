import { React } from 'react';
import { useGlobalContext } from '../globals/globalconfiguration';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();




    return <div className='toggle-container'>
        <button className='dark-toggle' onClick={toggleDarkTheme}>{isDarkTheme ? <BsFillSunFill className='toggle-icon' /> : <BsFillMoonFill className='toggle-icon' />}</button>

    </div>



}

export default ThemeToggle;