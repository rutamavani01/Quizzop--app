import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../auth/AuthContext';
import { getQuiz } from '../api/Api';

const Trending_Quiz = ({ objectData, onClick }) => {
    const { themeColors } = useAuth();
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
            {showLeftArrow && (
                <button
                    className="scrollbar-arraws position-absolute top-50 start-0 translate-middle-y"
                    onClick={scrollLeft}
                    style={{ zIndex: 1 }}
                >
                    <i
                        className="fa-solid fa-chevron-left"
                        style={{
                            fontSize: "13px",
                            color: themeColors.colors.text,
                            backgroundColor: themeColors.colors.backgroundColor,
                        }}
                    ></i>
                </button>
            )}

            {showRightArrow && (
                <button
                    className="scrollbar-arraws position-absolute top-50 end-0 translate-middle-y"
                    onClick={scrollRight}
                    style={{ zIndex: 1 }}
                >
                    <i
                        className="fa-solid fa-chevron-right"
                        style={{
                            fontSize: "13px",
                            color: themeColors.colors.text,
                            backgroundColor: themeColors.colors.backgroundColor,
                        }}
                    ></i>
                </button>
            )}

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
                {objectData.map((item) => (
                    <div
                        key={item.id}
                        className="p-3 d-inline-block"
                        style={{
                            backgroundColor: "#FFF5E6",
                            borderRadius: "10px",
                            flex: "0 0 auto", cursor: "pointer"
                        }}
                        onClick={() => onClick(item)}
                    >
                        <img
                            src={item.image}
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
    );
};

export default Trending_Quiz;