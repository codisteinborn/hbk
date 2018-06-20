import React from 'react';


const Entry = props => {
    return (
        <div className="entry" entry={props.entry}>
            <p>
                {props.entry}
            </p>
            <button onClick={() => props.removeEntry(props.entry)}>Remove</button>
        </div>
    );
}

export default Entry;