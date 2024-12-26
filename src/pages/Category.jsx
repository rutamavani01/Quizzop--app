import React, { useState, useEffect, useRef } from 'react';
import '../css/Style.css';
import See_all_header from '../components/See_all_header';
import { useNavigate } from 'react-router-dom';
import { trendingItems } from '../utils/utils.js';
import Top_Quiz from '../components/Top_Quiz';
import themeColors from '../utils/colors.js';

const Category = () => {
    const navigate = useNavigate();
    const [liked, setLiked] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const [filterOption, setFilterOption] = useState('all');
    const filterRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setShowFilter(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleLike = (quizId) => {
        setLiked((prevLiked) => ({
            ...prevLiked,
            [quizId]: !prevLiked[quizId],
        }));
    };

    const getFilteredItems = () => {
        let items = trendingItems.filter((quiz) =>
            quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        switch (filterOption) {
            case 'liked':
                return items.filter((quiz) => liked[quiz.id]);
            case 'other':
                return items.filter((quiz) => !liked[quiz.id]);
            default:
                return items;
        }
    };

    const filteredItems = getFilteredItems();

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div style={{
                backgroundColor: themeColors.backgroundColor,
            }} >
                <See_all_header />
                <div className="container p-2 p-0 text-center text-light " style={{ maxWidth: '492px', width: '492px', border: '4px solid', borderColor: themeColors.borderColor, height: '100vh' }}>

                    <div className='d-flex justify-content-between p-3'>
                        <div
                            className="search-container"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: themeColors.SecondbgColor,
                                border: '0.5px solid',
                                borderColor:themeColors.SecondbgColor,
                                borderRadius: '8px',
                                padding: '8px',
                                gap: '8px',
                                width: '90%',
                            }}
                        >
                            <i className="fa-solid fa-magnifying-glass" style={{ color: themeColors.text, fontSize: '16px' }}></i>
                            <input
                                type="text"
                                placeholder="Search for topics you like"
                                className="custom-placeholder"
                                style={{
                                    flex: 1,
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    outline: 'none',
                                    color: themeColors.text,
                                    fontSize: '14px',
                                }}
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div ref={filterRef} style={{ position: 'relative' }}>
                            <button
                                onClick={() => setShowFilter(!showFilter)}
                                style={{
                                    backgroundColor:themeColors.SecondbgColor,
                                    border: 'none',
                                    color: themeColors.text,
                                    padding: '8px 12px',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                }}
                            >
                                <i className="fa-solid fa-filter"></i>
                            </button>

                            {showFilter && (
                                <div style={{
                                    position: 'absolute',
                                    right: 0,
                                    top: '100%',
                                    backgroundColor: themeColors.SecondbgColor,
                                    borderRadius: '8px',
                                    padding: '12px',
                                    width: '200px',
                                    zIndex: 1000,
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    marginTop: '8px'
                                }}>
                                    <div style={{ textAlign: 'left' }}>
                                        <label className="d-flex align-items-center mb-2" style={{ cursor: 'pointer' }}>
                                            <input
                                                type="radio"
                                                name="filter"
                                                checked={filterOption === 'all'}
                                                onChange={() => {
                                                    setFilterOption('all');
                                                    setShowFilter(false);
                                                }}
                                                style={{ marginRight: '8px' }}
                                            />
                                            <span style={{ color: filterOption === 'all' ? '#fff' : '#8789c3' }}>All</span>
                                        </label>
                                        <label className="d-flex align-items-center mb-2" style={{ cursor: 'pointer' }}>
                                            <input
                                                type="radio"
                                                name="filter"
                                                checked={filterOption === 'liked'}
                                                onChange={() => {
                                                    setFilterOption('liked');
                                                    setShowFilter(false);
                                                }}
                                                style={{ marginRight: '8px' }}
                                            />
                                            <span style={{ color: filterOption === 'liked' ? '#fff' : '#8789c3' }}>Liked Topics</span>
                                        </label>
                                        <label className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
                                            <input
                                                type="radio"
                                                name="filter"
                                                checked={filterOption === 'other'}
                                                onChange={() => {
                                                    setFilterOption('other');
                                                    setShowFilter(false);
                                                }}
                                                style={{ marginRight: '8px' }}
                                            />
                                            <span style={{ color: filterOption === 'other' ? '#fff' : '#8789c3' }}>Other Topics</span>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='d-flex flex-wrap justify-content-between text-white p-3 pb-0 pt-0 text-center'>
                        <div className='col-4 p-2'>
                            <div className='card' style={{ borderRadius: '12px', cursor: 'pointer' }} onClick={() => navigate('/contests')}>
                                <div className="text-center p-3" style={{ backgroundColor: 'white', borderRadius: '12px' }}>
                                    <img src="./images/all_categories.png" alt="All Topics" className="img-fluid mb-3" width={70} height={70} />
                                    <p className='text-dark m-0 p-0' style={{ fontSize: '11px', fontWeight: '700' }}>All Topics</p>
                                </div>
                            </div>
                        </div>

                        {filteredItems.map((quiz) => (
                            <div key={quiz.id} className='col-4 p-2'>
                                <Top_Quiz
                                    objectData={quiz}
                                    handleLike={() => handleLike(quiz.id)}
                                    isLiked={liked[quiz.id]}
                                    onClick={() => {
                                        const dynamicRoute = `/view-quiztopic/${quiz.title.toLowerCase().replace(' ', '-')}`;
                                        navigate(dynamicRoute);
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Category;