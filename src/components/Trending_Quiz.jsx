import React, { useState, useRef } from 'react';
import themeColors from '../utils/colors';

const Trending_Quiz = () => {
    // treding items
    const trendingItems = [
        {
            title: 'India',
            imgSrc: '/images/india-new.png',
            bgColor: '#FFEBE6'
        },
        {
            title: 'Bollywood',
            imgSrc: '/images/bollywood.png',
            bgColor: '#E6F7FF'
        },
        {
            title: 'IPL',
            imgSrc: '/images/ipl.png',
            bgColor: '#E6FFE6'
        },
        {
            title: 'Hindi English',
            imgSrc: '/images/hindi_english.webp',
            bgColor: '#FFF5E6'
        },
        {
            title: 'Brain Teasers',
            imgSrc: '/images/brain_teasers.png',
            bgColor: '#FFF5E6'
        },
        {
            title: 'IPL',
            imgSrc: '/images/ipl.png',
            bgColor: '#E6FFE6'
        },
        {
            title: 'Hindi English',
            imgSrc: '/images/hindi_english.webp',
            bgColor: '#FFF5E6'
        },
        {
            title: 'Brain Teasers',
            imgSrc: '/images/brain_teasers.png',
            bgColor: '#FFF5E6'
        }
    ];

    const sliderRef = useRef(null);


    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 100;
            updateArrowVisibility();
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 100;
            updateArrowVisibility();
        }
    };

    const updateArrowVisibility = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
        }
    };
    
    return (
        <div className="position-relative">
            {/* Left Arrow */}
            {showLeftArrow && (
                <button
                    className="scrollbar-arraws position-absolute top-50 start-0 translate-middle-y"
                    onClick={scrollLeft}
                    style={{ zIndex: 1 }}
                >
                    <i className="fa-solid fa-chevron-left" style={{ fontSize: "13px",color:themeColors.text,backgroundColor:themeColors.backgroundColor }}></i>
                </button>
            )}

            {/* Right Arrow */}
            {showRightArrow && (
                <button
                    className="scrollbar-arraws position-absolute top-50 end-0 translate-middle-y"
                    onClick={scrollRight}
                    style={{ zIndex: 1 }}
                >
                    <i className="fa-solid fa-chevron-right" style={{ fontSize: "13px",color:themeColors.text,backgroundColor:themeColors.backgroundColor }}></i>
                </button>
            )}

            {/* Slider Container */}
            <div
                ref={sliderRef}
                className="d-flex gap-2"
                style={{
                    overflowX: "hidden",
                    whiteSpace: "nowrap",
                    scrollBehavior: "smooth",
                    padding: "0 40px",
                }}
                onScroll={updateArrowVisibility}
            >
                {trendingItems.map((item, index) => (
                    <div
                        key={index}
                        className="p-3 d-inline-block"
                        style={{
                            backgroundColor: item.bgColor,
                            borderRadius: "10px",
                            flex: "0 0 auto",
                        }}
                    >
                        <img
                            src={item.imgSrc}
                            width={70}
                            height={70}
                            alt={item.title}
                            style={{ display: "block", margin: "0 auto" }}
                        />
                        <p
                            className="m-0 p-0 mt-1 text-center"
                            style={{ fontSize: "12px", color: "black" }}
                        >
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending_Quiz