import SearchIcon from '../../Icon/Search.svg';
import './Search.css';

export const Search = ({ onSearchHandler }) => {
    return (
        <div className='mian-search col-3 col-25'>
            <input
                type="text"
                onChange={(e) => onSearchHandler(e.target.value)}
                className="input"
                name="txt"
                placeholder='Search posts'
            />
            <img src={SearchIcon} alt='Search' className='header-search' value="" />
        </div>
    )
}