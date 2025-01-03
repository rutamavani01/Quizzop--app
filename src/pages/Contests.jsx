import React, { useState, useEffect } from 'react';
import See_all_header from '../components/See_all_header';
import Footer from '../components/Footer';
import themeColors, { roundedButtons } from '../utils/colors';
import Quiz_Component from '../components/Quiz_Component';
import { useNavigate } from 'react-router';
import { getCategory } from '../api/Api.jsx';
import { useAuth } from '../auth/AuthContext';


const Contests = ({ buttonsData, containerStyle }) => {
    const { themeColors } = useAuth();
    const [liked, setLiked] = useState([false, false, false]);
    const [categories, setCategories] = useState([]);
    const [activeButton, setActiveButton] = useState('');
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategory();
                console.log('API Response:', response);
                const categoryData = response.data || [];
                setCategories(categoryData);
                setActiveButton(categoryData.length > 0 ? categoryData[0].title : '');
                setFilteredCategories(categoryData);
                setLiked(new Array(categoryData.length).fill(false));
            } catch (error) {
                console.error('Failed to fetch categories:', error);
                setCategories([]);
                setFilteredCategories([]);
            }
        };
        fetchCategories();
    }, []);
    const handleButtonClick = (category) => {
        setActiveButton(category);
        filterCategories(category);
    };

    const filterCategories = (selectedCategory) => {
        if (selectedCategory === 'All') {
            setFilteredCategories(categories);
        } else {
            const filtered = categories.filter((category) =>
                category.title.toLowerCase() === selectedCategory.toLowerCase()
            );
            setFilteredCategories(filtered);
        }
    };

    const navigate = useNavigate();

    const handlePlay = (contest) => {
        console.log(`Navigating to contest: ${contest.title}`);
        navigate('/join-contest', { state: { contest } });
    };

    const handleMenuBtn = () => {
        navigate('/category');
    };

    if (!categories.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{
                backgroundColor: themeColors.colors.backgroundColor,
                height: '100vh'
            }}>
                <See_all_header />
                <div
                    className="container p-0 text-center text-light"
                    style={{
                        maxWidth: '492px',
                        border: '4px solid', backgroundColor: themeColors.colors.backgroundColor,
                        borderColor: themeColors.colors.borderColor,
                        ...(containerStyle || {}),
                    }}
                >
                    <div className="d-flex justify-content-start align-items-center p-3">
                        <div onClick={handleMenuBtn} style={{ cursor: 'pointer' }}>
                            <img src="./images/quiz_category_tab_dark.svg" alt="menu" />
                        </div>

                        <div className="d-flex flex-row overflow-hidden ms-2 quiz-topic-box">
                            <button
                                onClick={() => handleButtonClick('All')}
                                style={{
                                    padding: '6px 10px',
                                    fontSize: '12px',
                                    marginLeft: '10px',
                                    fontFamily: roundedButtons.fontFamily,
                                    fontWeight: roundedButtons.fontWeight,
                                    borderRadius: roundedButtons.borderRadius,
                                    cursor: roundedButtons.cursor,
                                    border: '0px',
                                    backgroundColor:
                                        activeButton === 'All' ? themeColors.colors.SecondbgColor : '#20213f',
                                    color: activeButton === 'All' ? themeColors.colors.text : '#fff',
                                }}
                            >
                                All
                            </button>
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleButtonClick(category.title)}
                                    style={{
                                        padding: '6px 10px',
                                        fontSize: '12px',
                                        marginLeft: '10px',
                                        fontFamily: roundedButtons.fontFamily,
                                        fontWeight: roundedButtons.fontWeight,
                                        borderRadius: roundedButtons.borderRadius,
                                        cursor: roundedButtons.cursor,
                                        border: '0px',
                                        backgroundColor:
                                            activeButton === category.title
                                                ? themeColors.colors.SecondbgColor
                                                : '#20213f',
                                        color: activeButton === category.title ? themeColors.colors.text : '#fff',
                                    }}
                                >
                                    {category.title}
                                </button>
                            ))}

                        </div>
                    </div>

                    {/* Display filtered categories */}
                    <div className="d-flex flex-wrap p-3 pt-0">
                        {filteredCategories.map((category, index) => (
                            <div
                                key={index}
                                className="card p-3 d-flex flex-row align-items-center text-white w-100 m-2"
                                style={{ backgroundColor: themeColors.colors.SecondbgColor }}
                            >
                                <Quiz_Component contest={category} onPlay={() => handlePlay(category)} />
                            </div>
                        ))}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Contests;