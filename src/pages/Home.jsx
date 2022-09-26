import {Categories, SortPopup, PizzaBlock} from '../components';
import {useSelector} from 'react-redux';

export default function Home () {
    const {items} = useSelector(({pizzas, filters}) => {
        return {
            items: pizzas.items,
        }
    });

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые',
                    ]}
                />

                <SortPopup
                    items={[
                        {name: 'популярности', type: 'popular'},
                        {name: 'цене', type: 'price'},
                        {name: 'алфавиту', type: 'alphabet'},
                    ]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)}
            </div>
        </div>
    );
};