import React, { useState, useEffect } from 'react';
import OctokitUtils from '../../classes/octokit';
import GistItem from '../GistItem';

// Displays the public gists, and filters them according to the search text, provided by the Search component
const Gists = ({searchText}) => {
    // Contains the gists from the GistUtils singleton
    const [gists, setGists] = useState([]);

    // Sets the loading message
    const [loading, setLoading] = useState(true);

    // Error message state
    const [error, setError] = useState(false);

    // Updates the state (renders/re-renders component) initially and when the search text is provided
    useEffect(async () => {
        try {
            // Gets or filters the gists and sets the loading to false (displays the gists instead of the loading message)
            const gists = await OctokitUtils.getPublicGists();
            setGists(gists.filter(gist => gist.owner.login.includes(searchText)));
            setLoading(false);
        } catch(err) {
            // Displays the error, if encountered
            setLoading(false);
            setError(true);
        }
    }, [searchText]);

    return (
        <div className='gists-container'>
            {
            gists.length > 0 ?
            <ul className='gists-list'>
                {gists.map(gist => (
                    <li>
                        <GistItem data={gist} />
                    </li>
                ))}
            </ul>
            :
            loading ?
            <div id='loading-message'>
                Loading...
            </div>
            :
            error ?
            <div id='error-message'>
                Error No gists found. Please try refreshing the page.
            </div>
            :
            <div id='no-gists-message'>
                No gists found. Please try searching for a different user, or refresh the page.
            </div>
            }
        </div>
    )
}

export default Gists;