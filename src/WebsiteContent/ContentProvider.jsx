import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';



export const ContentContext = createContext('');

const ContentProvider = ({children}) => {

    const [websiteContents, setWebsiteContents] = useState('')

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setWebsiteContents(data))
    }, [])


    const contentInfo = {websiteContents};

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