import React, { useState } from 'react';
import moment from 'moment';

// The list item that visualizes a Gist data
const GistItem = ({data}) => {
    const [expand, setExpand] = useState(false);

    // The Gist data itself - unused fields can be utilized as required.
    const {
        url,
        forks_url,
        commits_url,
        id,
        html_url,
        files,
        description,
        comments,
        user,
        comments_url,
        owner
    } = data;

    // The owner data of the Gist - unused fields can be utilized as required.
    const {
        login,
        id: owner_id,
        avatar_url,
        gravatar_id,
        url: owner_url,
        html_url: owner_html_url,
        followers_url,
        following_url,
        gists_url,
        starred_url,
        subscriptions_url,
        organizations_url,
        repos_url,
        events_url,
        received_events_url,
        type,
        site_admin
    } = owner;

    // Formatted date/time fields
    const created_at = moment(data.created_at).format('DD MMM YYYY hh:mm A');
    const updated_at = moment(data.updated_at).format('DD MMM YYYY hh:mm A');

    return (
        <div className='gist-item-container' onClick={() => setExpand(!expand)}>
            <div className='gist-avatar-container'>
                <img className='gist-avatar' src={avatar_url} />
            </div>

            <div className='gist-text-container'>
                <div className='gist-login-container'>
                    <h3>
                        {login}
                    </h3>
                </div>
                
                <div className='gist-datetime-container gist-created-at-container'>
                    Created: {created_at}
                </div>
                {
                // Updated time is only shown when it is not equal (up to the minute) to the created time
                created_at !== updated_at && <div className='gist-datetime-container gist-updated-at-container'>
                    Updated: {updated_at}
                </div>
                }

                <div className='gist-url-container'>
                    <a target='_blank' href={url}>{url}</a>
                </div>
            </div>

            {
            // Expanding the gist item (clicking) reveals the files' information
            expand &&
            <div className='gist-files-container'>
                <ul>
                    {Object.keys(files).map(file => {
                        return (
                            <div className='gist-file-container'>
                                <div className='gist-file-meta gist-file-name'>{file} ({files[file].size} bytes)</div>
                                <div className='gist-file-meta gist-file-language'>{files[file].language} ({files[file].type})</div>
                                <div className='gist-file-meta gist-file-url'><a target='_blank' href={files[file].raw_url}>Link</a></div>
                            </div>
                        )
                    })}
                </ul>
            </div>
            }

            {/* Ideally, the comments badge should be hidden if there are 0 comments; however, for demonstration, it is shown */}
            <div className="gist-comments-container">
                <span className='gist-comments' >{comments}</span>
            </div>

            {/* Making do without icons (including Font Awesome) for expand/collapse */}
            <div className="gist-expand-toggle">
                {expand ? '^' : 'v'}
            </div>
        </div>
    )
}

export default GistItem;