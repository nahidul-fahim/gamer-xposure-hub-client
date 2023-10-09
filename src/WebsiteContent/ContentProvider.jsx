import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';



export const ContentContext = createContext('');




const ContentProvider = ({children}) => {

    const [websiteContents, setWebsiteContents] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            setWebsiteContents(data);
            setLoading(false);
        })
    }, [])


    const contentInfo = {websiteContents, loading};

    return (
        <ContentContext.Provider value={contentInfo}>
            {children}
        </ContentContext.Provider>
    );
};

export default ContentProvider;


ContentProvider.propTypes = {
    children: PropTypes.node,
}