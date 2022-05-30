import React, {useEffect, useState} from 'react';
import {HeaderEl} from "./HeaderEl";
import {Container} from "../Container";
import {IoMoonOutline, IoMoonSharp} from "react-icons/io5";
import {Title} from "./Title";
import {Wrapper} from "./Wrapper";
import {ModeSwitcher} from "./ModeSwitcher";


const Header = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme ==='light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    },[theme] )

    return (
        <>
            <HeaderEl>
                <Container>
                    <Wrapper>
                        <Title>Where is the world?</Title>
                        <ModeSwitcher onClick={toggleTheme}>
                            {
                                theme === 'light'
                                    ? <IoMoonOutline/>
                                    : <IoMoonSharp/>
                            }
                            <span style={{marginLeft: '0.75rem'}}>
                                {theme} theme
                            </span>
                        </ModeSwitcher>
                    </Wrapper>
                </Container>
            </HeaderEl>
        </>

    );
};

export default Header;