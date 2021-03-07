import React from 'react';
import { CategoryLink } from "../CategoryLink/CategoryLink";


interface ResultsFilterProps {
    categories: string[];
}

export const ResultsFilter: React.FC<ResultsFilterProps> = ({categories}) =>
    (
        <div>
            <ul className="results-filter-links">
                {categories.map(category => (<CategoryLink key={category} category={category} />))}
            </ul>
        </div>
    );
