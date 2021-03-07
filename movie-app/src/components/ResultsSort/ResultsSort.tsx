import React from 'react';

export const ResultsSort: React.FC<any> = () =>
     (
        <div className="results-sort-comp">
            Sort by
            <select defaultValue="release-date">
                <option value="release-date">release date</option>
                <option>A-Z</option>
                <option>Z-A</option>
            </select>
        </div>
    );
