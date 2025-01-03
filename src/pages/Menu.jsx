import React, { useEffect, useState } from 'react'
import See_all_header from '../components/See_all_header'
import { useNavigate } from 'react-router'
import Top_Quiz from '../components/Top_Quiz'
import Trending_Quiz from '../components/Trending_Quiz'
import themeColors, { accordianBtn, boxColor } from '../utils/colors'
import { MenuOptions } from '../utils/utils'
import Footer from '../components/Footer'
import Social_footer from '../components/Social_footer'
import { useAuth } from '../auth/AuthContext';
import { getCategory } from '../api/Api'

const Menu = ({ title, svgContent, objectData, onClick }) => {
    const { themeColors } = useAuth();
    const navigate = useNavigate()
    const handleSeeAll = () => {
        navigate('/category')
    }

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategory();
                setCategories(response.data || []);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
                setCategories([]);
            }
        };
        fetchCategories();
    }, []);


    return (
        <div>

            <div className="d-flex justify-content-center align-items-center">
                <div style={{ backgroundColor: themeColors.colors.backgroundColor }}>
                    <See_all_header />
                    <div className="container p-0 text-center text-light rounded" style={{ maxWidth: '492px', width: '492px', border: '4px solid', borderColor: themeColors.colors.borderColor, height: '100vh' }}>
                        <div className="">
                            <div>
                                <div className=' p-2 m-3' style={{ backgroundColor: themeColors.colors.SecondbgColor, borderRadius: '10px' }} >

                                    {/* title */}
                                    <div className='d-flex justify-content-between align-items-center py-3 '>
                                        <div>
                                            <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '14px', color: themeColors.colors.headingText }}>Trending Quiz Topics</p>
                                        </div>
                                        <div>
                                            <p onClick={handleSeeAll} className='p-0 m-0' style={{ color: themeColors.colors.titlebtn, fontWeight: '500', fontSize: '11px', cursor: 'pointer' }}>
                                                SEE ALL
                                                <i style={{ fontSize: '14px' }} className="fa-solid fa-circle-chevron-right ms-1"></i>
                                            </p>
                                        </div>

                                    </div>
                                    <div className='mt-4'>
                                        <Trending_Quiz
                                            objectData={categories}
                                            onClick={(category) => {
                                                const dynamicRoute = `/view-quiztopic/${category.title
                                                    .toLowerCase()
                                                    .replace(/\s+/g, '-')}`;
                                                navigate(dynamicRoute, {
                                                    state: {
                                                        categoryImage: category.image,
                                                    },
                                                });
                                            }}
                                        />

                                    </div>
                                    <div className='d-flex justify-content-between align-items-center py-3 '>
                                        <div>
                                            <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '14px', color: themeColors.colors.headingText }}>Trending Quiz Topics</p>
                                        </div>
                                        <div>
                                            <p onClick={handleSeeAll} className='p-0 m-0' style={{ color: themeColors.colors.titlebtn, fontWeight: '500', fontSize: '11px', cursor: 'pointer' }}>
                                                SEE ALL
                                                <i style={{ fontSize: '14px' }} className="fa-solid fa-circle-chevron-right ms-1"></i>
                                            </p>
                                        </div>

                                    </div>
                                    <div className='mt-4'>
                                        <Trending_Quiz
                                            objectData={categories}
                                            onClick={(category) => {
                                                const dynamicRoute = `/view-quiztopic/${category.title
                                                    .toLowerCase()
                                                    .replace(/\s+/g, '-')}`;
                                                navigate(dynamicRoute, {
                                                    state: {
                                                        categoryImage: category.image,
                                                    },
                                                });
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* <div className='col-12 p-3'>
                                    <div className="accordion" id="accordionExample" style={{ backgroundColor: themeColors.colors.SecondbgColor, borderColor: themeColors.colors.text, color: themeColors.colors.text }}>
                                        <div className="accordion-item" style={{ backgroundColor: themeColors.colors.SecondbgColor, borderColor: themeColors.colors.text, color: themeColors.colors.text, border: '1px solid' }}>
                                            <h2 className="accordion-header"  >
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: themeColors.colors.SecondbgColor, borderColor: themeColors.colors.text, color: themeColors.colors.text, padding: '10px' }}>
                                                    More Options
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                <div className="accordion-body text-start" style={{ backgroundColor: themeColors.colors.SecondbgColor, borderColor: themeColors.colors.text, color: themeColors.colors.text }}>
                                                    {MenuOptions.map((option, index) => (
                                                        <div key={index} className="menu-option">

                                                            <span
                                                                className="svg-icon"
                                                                dangerouslySetInnerHTML={{ __html: option.svgImg }}
                                                            >

                                                            </span>
                                                            <span>{option.title}</span>
                                                            <hr></hr>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12 p-3'>
                                    <div className="accordion" id="accordionExample1" style={{ backgroundColor: themeColors.colors.SecondbgColor, borderColor: themeColors.colors.text, color: accordianBtn.color }}>
                                        <div className="accordion-item" style={{ backgroundColor:themeColors.colors.SecondbgColor, borderColor: themeColors.colors.text, color: themeColors.colors.text, border: '1px solid' }}>
                                            <h2 className="accordion-header"  >
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style={{ backgroundColor: themeColors.colors.SecondbgColor, borderColor: themeColors.colors.text, color: themeColors.colors.text, padding: '10px' }}>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <p className='p-0 m-0'> More Options</p>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                <div className="accordion-body text-start" style={{ backgroundColor: themeColors.colors.SecondbgColor, borderColor: themeColors.colors.text, color: themeColors.colors.text }}>
                                                    {MenuOptions.map((option, index) => (
                                                        <div key={index} className="menu-option">

                                                            <span
                                                                className="svg-icon"
                                                                dangerouslySetInnerHTML={{ __html: option.svgImg }}
                                                            >

                                                            </span>
                                                            <span>{option.title}</span>
                                                            <hr></hr>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <Social_footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
        // </div>
    )
}

export default Menu