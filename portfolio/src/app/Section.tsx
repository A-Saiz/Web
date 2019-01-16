import * as React from 'react';
import './Section.css';

export default function Section( {title, id} : {title: any, id: any}) {
    return (
        <div className="section">
            <div className="section-content" id={id}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}