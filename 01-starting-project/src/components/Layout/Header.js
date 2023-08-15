import MealImage from '../../assets/meals.jpg'
import classes from './Header.module.css' 
import HeaderCart from './HeaderCart';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCart/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealImage} alt="meals image" />
            </div>
        </>
    );
}

export default Header;