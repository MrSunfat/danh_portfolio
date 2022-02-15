import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const info = {
        author: 'Trần Nhật Danh',
        role: 'Front-End Developer',
        skills: [
            'Nắm vững và sử dụng được HTML, CSS',
            'Sử dụng tốt các CSS Framework như: Bootstrap và sử dụng cơ bản SASS',
            'Nắm vững các kiến thức và biết dùng JS/ES6+ và DOM',
            'Biết sử dụng cơ bản JS Framework như: ReactJS',
            'Nắm vững kĩ năng tạo ra Mock API, và tương tác với REST APIs',
            'Sử dụng cơ bản được Git/Github',
        ],
        projects: [
            {
                name: 'HomeCredit_clone',
                img: './images/hc_img.png',
                urlIF: 'https://mrsunfat.github.io/HomeCredit_theme/',
                urlCode: 'https://github.com/MrSunfat/HomeCredit_theme.git',
                skills: ['HTML', 'CSS', 'JS'],
            },
            {
                name: 'ReactJS Project',
                img: './images/hc_img.png',
                urlIF: 'https://mrsunfat.github.io/HomeCredit_theme/',
                urlCode: 'https://github.com/MrSunfat/HomeCredit_theme.git',
                skills: ['ReactJS', 'CSS', 'Material UI'],
            },
        ],

    }

    const [isBarOpen, setIsBarOpen] = useState(false);
    const [option, setOption] = useState('');

    const toggleBar = () => {
        setIsBarOpen(!isBarOpen);
    }

    const selectOption = (option) => {
        setOption(option);
    }

    const value = {
        info,
        isBarOpen,
        option,
        toggleBar,
        selectOption,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };