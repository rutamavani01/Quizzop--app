import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';
import { accordianBtn } from '../utils/colors';
import { fetchGetPage, getPageAllData } from '../api/Api'; // Import your fetch function
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Footer = () => {
    const { themeColors } = useAuth();
    const [footerLinks, setFooterLinks] = useState([]);
    const [selectedPageData, setSelectedPageData] = useState(null);
    const navigate = useNavigate(); // Use navigate hook

    useEffect(() => {
        const fetchFooterData = async () => {
            try {
                // If you have another function for fetching all footer data, replace fetchGetPage accordingly
                const data = await getPageAllData('all');  // Assuming the function fetches all footer data
                setFooterLinks(data.data || []);
            } catch (error) {
                console.error("Error fetching footer data:", error);
            }
        };
        fetchFooterData();
    }, []);

    const handleLinkClick = async (id) => {
        try {
            const pageData = await fetchGetPage(id); // Fetch the data
            setSelectedPageData(pageData); // Set the data in state

            // Navigate to the new page (assuming the dynamic route is '/page/:id')
            navigate(`/dynamicpage/${id}`);
        } catch (error) {
            console.error('Error fetching page data:', error);
        }
    };

    return (
        <div>
            <div className='footer ' style={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '484px', zIndex: 1000, margin: '0 auto', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="accordion bg-dark-custom" id="accordionExample" style={{ backgroundColor: themeColors.colors.backgroundColor }}>
                    <div className="accordion-item" style={{ backgroundColor: themeColors.colors.backgroundColor, borderColor: accordianBtn.borderColor }}>
                        <h2 className="" style={{ backgroundColor: themeColors.colors.backgroundColor, borderColor: accordianBtn.borderColor }}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: themeColors.colors.backgroundColor, borderColor: accordianBtn.borderColor }}>
                                <div>{themeColors.logo && <img src={themeColors.logo} alt="Logo" />}</div>
                                <div>{themeColors.title && <p className='p-0 m-0 ms-1' style={{ color: themeColors.colors.headingText }}>{themeColors.title.title}</p>}</div>
                            </button>
                        </h2>

                        <div id="collapseOne" className="accordion-collapse collapse" style={{ backgroundColor: themeColors.colors.backgroundColor }} data-bs-parent="#accordionExample">
                            <div className="accordion-body container" style={{ width: '55%', color: 'white', fontSize: '13px' }}>
                                <div className='d-flex flex-wrap align-items-center justify-content-center gap-4 fs-bold'>
                                    {footerLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            onClick={() => handleLinkClick(link.id)}
                                            style={{ cursor: 'pointer', textDecoration: 'underline', color: 'inherit' }}
                                        >
                                            {link.pagename} {/* Display only the pagename */}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <p style={{ width: '65%', margin: '0 auto', fontSize: '11px', color: '#8789c3' }}>
                                © 2024 Advergame Technologies Pvt. Ltd. ("ATPL"). Gamezop ® & Quizzop ® are registered trademarks of ATPL.
                            </p>
                            {selectedPageData && (
                                <div style={{ marginTop: '20px', color: 'white' }}>
                                    <h4>{selectedPageData.pagename}</h4>
                                    <p>{selectedPageData.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;