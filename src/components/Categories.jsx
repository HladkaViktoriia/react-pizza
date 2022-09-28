import {memo, useState} from 'react';

const Categories = memo(function Categories ({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (i) => {
        setActiveItem(i);
        onClickItem(i);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>

                {items && items.map((item, i) =>
                    <li
                        className={activeItem === i ? 'active' : ''}
                        onClick={() => onSelectItem(i)}
                        key={`${item}_${i}`}
                    >
                        {item}
                    </li>
                )}

            </ul>
        </div>
    );
})

export default Categories;