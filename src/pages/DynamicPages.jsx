import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetPage } from '../api/Api'; 

const DynamicPage = () => {
    const { id } = useParams(); 
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const data = await fetchGetPage(id); 
                console.log(data);
                
                setPageData(data);
            } catch (error) {
                console.error(`Error fetching data for page "${id}":`, error);
            }
        };

        fetchPageData();
    }, [id]); 

    if (!pageData) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px', color: 'white' }}>
            <h1>{pageData.pagename || 'Page Title Not Available'}</h1>
            <p>{pageData.description || 'No description available.'}</p> 
        </div>
    );
};

export default DynamicPage;