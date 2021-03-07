import React from 'react';

interface ResultsFilterProps {
    categories: string[];
}

export const ResultsFilter: React.FC<ResultsFilterProps> = ({categories}) => {
    const LinkTag = 'a';
    return (
        <div>
            <ul className="results-filter-links">
                {categories.map(category => (<li key={category}><LinkTag href={'?category='+ category}>{category}</LinkTag></li>))}
            </ul>
        </div>
    );
};
