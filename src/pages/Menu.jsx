import React from 'react'
import See_all_header from '../components/See_all_header'
import { useNavigate } from 'react-router'
import Top_Quiz from '../components/Top_Quiz'
import Trending_Quiz from '../components/Trending_Quiz'
import themeColors, { accordianBtn, boxColor } from '../utils/colors'
import { MenuOptions } from '../utils/utils'
import Footer from '../components/Footer'
import Social_footer from '../components/Social_footer'

const Menu = ({ title, svgContent }) => {
    const navigate = useNavigate()
    const handleSeeAll = () => {
        navigate('/category')
    }
    return (
        <div>

            <div className="d-flex justify-content-center align-items-center">
                <div style={{ backgroundColor: themeColors.backgroundColor }}>
                    <See_all_header />
                    <div className="container p-0 text-center text-light rounded" style={{ maxWidth: '492px', width: '492px', border: '4px solid', borderColor: themeColors.borderColor, height: '100vh' }}>
                        <div className="">
                            <div>
                                <div className=' p-2 m-3' style={{ backgroundColor: themeColors.SecondbgColor, borderRadius: '10px' }} >

                                    {/* title */}
                                    <div className='d-flex justify-content-between align-items-center py-3 '>
                                        <div>
                                            <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '14px', color: themeColors.headingText }}>Trending Quiz Topics</p>
                                        </div>
                                        <div>
                                            <p onClick={handleSeeAll} className='p-0 m-0' style={{ color: themeColors.titlebtn, fontWeight: '500', fontSize: '11px', cursor: 'pointer' }}>
                                                SEE ALL
                                                <i style={{ fontSize: '14px' }} className="fa-solid fa-circle-chevron-right ms-1"></i>
                                            </p>
                                        </div>

                                    </div>
                                    <div className='mt-4'>
                                        <Trending_Quiz />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center py-3 '>
                                        <div>
                                            <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '14px', color: themeColors.headingText }}>Trending Quiz Topics</p>
                                        </div>
                                        <div>
                                            <p onClick={handleSeeAll} className='p-0 m-0' style={{ color: themeColors.titlebtn, fontWeight: '500', fontSize: '11px', cursor: 'pointer' }}>
                                                SEE ALL
                                                <i style={{ fontSize: '14px' }} className="fa-solid fa-circle-chevron-right ms-1"></i>
                                            </p>
                                        </div>

                                    </div>
                                    <div className='mt-4'>
                                        <Trending_Quiz />
                                    </div>
                                </div>

                                {/* <div className='col-12 p-3 m-2' style={{ backgroundColor: themeColors.buttonColor }} >

                                  
                                    <div className='d-flex justify-content-between align-items-center p-1 pb-3'>
                                        <div>
                                            <p className='p-0 m-0' style={{ fontWeight: '700', fontSize: '14px' }}>Trending Quiz Topics</p>
                                        </div>
                                        <div>
                                            <p onClick={handleSeeAll} className='p-0 m-0' style={{ color: '#FFCC5B', fontWeight: '500', fontSize: '11px', cursor: 'pointer' }}>
                                                SEE ALL
                                                <i style={{ fontSize: '14px' }} className="fa-solid fa-circle-chevron-right ms-1"></i>
                                            </p>
                                        </div>

                                    </div>
                                    <div className='mt-4'>
                                        <Trending_Quiz />
                                    </div>
                                </div> */}


                                <div className='col-12 p-3'>
                                    <div className="accordion" id="accordionExample" style={{ backgroundColor: themeColors.SecondbgColor, borderColor: accordianBtn.borderColor, color: accordianBtn.color }}>
                                        <div className="accordion-item" style={{ backgroundColor: themeColors.SecondbgColor, borderColor: accordianBtn.borderColor, color: accordianBtn.color, border: '1px solid' }}>
                                            <h2 className="accordion-header"  >
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: themeColors.SecondbgColor, borderColor: accordianBtn.borderColor, color: accordianBtn.color, padding: '10px' }}>
                                                    More Options
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                <div className="accordion-body text-start" style={{ backgroundColor: themeColors.SecondbgColor, borderColor: accordianBtn.borderColor, color: accordianBtn.color }}>
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
                                    <div className="accordion" id="accordionExample1" style={{ backgroundColor: themeColors.SecondbgColor, borderColor: accordianBtn.borderColor, color: accordianBtn.color }}>
                                        <div className="accordion-item" style={{ backgroundColor:themeColors.SecondbgColor, borderColor: accordianBtn.borderColor, color: accordianBtn.color, border: '1px solid' }}>
                                            <h2 className="accordion-header"  >
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style={{ backgroundColor: themeColors.SecondbgColor, borderColor: accordianBtn.borderColor, color: accordianBtn.color, padding: '10px' }}>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <p className='p-0 m-0'> More Options</p>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                <div className="accordion-body text-start" style={{ backgroundColor: themeColors.SecondbgColor, borderColor: accordianBtn.borderColor, color: accordianBtn.color }}>
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

                                {/* <div className='col-12 p-3'>
                                    <div className="accordion" id="accordionExample"  style={{  backgroundColor: boxColor.backgroundColor, borderColor: accordianBtn.borderColor,color:accordianBtn.color }}  >
                                        <div className="accordion-item" style={{ backgroundColor: boxColor.backgroundColor, borderColor: accordianBtn.borderColor,color:accordianBtn.color }}>
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style={{  backgroundColor: boxColor.backgroundColor,borderColor: accordianBtn.borderColor,color:accordianBtn.color ,padding:'10px'}}>
                                                    More Options
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                <div className="accordion-body text-start" style={{ backgroundColor: boxColor.backgroundColor, borderColor: accordianBtn.borderColor,color:accordianBtn.color }}>
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