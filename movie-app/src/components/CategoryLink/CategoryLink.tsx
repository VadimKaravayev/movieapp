import React from 'react';

interface CategoryLinkProps {
    category: string;
}

export const CategoryLink: React.FC<CategoryLinkProps> = ({category}) => {

    const handleSelected = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        const ul: any = e.currentTarget.closest('ul');
        [...ul?.children].forEach(li => li.classList.remove('selected'));
        e.currentTarget.closest('li')?.classList.add('selected');
    }
    return (
        <li>
            <a href={'?category='+ category} onClick={handleSelected}>{category}</a>
        </li>
    );
}
