import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [themeColors, setthemeColors] = useState({
        logo: {

        },
        title: {
            title: "quizzop"
        },
        colors: {
            backgroundColor: '#191a32',
            SecondbgColor: '#000000',
            borderColor: '#000000',
            headingText: '#ffffff',
            text: '#ffffff',
            titlebtn: '#000000',
            currectBtn: '#000000',
            wrongBtn: '#000000',
            loginbutton: '#000000',
            loginbtnBorderColor: '#000000',
        },
    });

    const fetchTheme = async () => {
        try {
            const response = await fetch('http://192.168.1.8:8000/api/setting');
            const data = await response.json();

            console.log(data.Data.logo);

            if (data.success && data.Data.themecolor) {
                const apiTheme = {
                    logo: data.Data.logo || '', 
                    title: data.Data.title || 'quizzop', 
                    backgroundColor: data.Data.themecolor.bgcolor,
                    SecondbgColor: data.Data.themecolor.cardcolor,
                    borderColor: data.Data.themecolor.bordercolor,
                    headingText: data.Data.themecolor.headingtextcolor,
                    text: data.Data.themecolor.textcolor,
                    titlebtn: data.Data.themecolor.titlebuttoncolor,
                    currectBtn: data.Data.themecolor.correctanscolor,
                    wrongBtn: data.Data.themecolor.wronganscolor,
                    loginbutton: data.Data.themecolor.loginbuttoncolor,
                    loginbtnBorderColor: data.Data.themecolor.loginbuttonbordercolor,
                };

                setthemeColors((prevTheme) => ({
                    ...prevTheme,
                    logo: apiTheme.logo,
                    title: { title: apiTheme.title },
                    colors: {
                        ...prevTheme.colors,
                        ...apiTheme,
                    },
                }));
            }
        } catch (error) {
            console.error('Error fetching theme:', error);
        }
    };

    useEffect(() => {
        fetchTheme();
    }, []);

    return (
        <AuthContext.Provider value={{ themeColors, setthemeColors, fetchTheme }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
