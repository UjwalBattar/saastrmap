import './index.scss';
import { useState } from "react";
import PropTypes from "prop-types";
import foodLocations from './locations.json';

const OPTION_LUNCH = 'Lunch';
const OPTION_DRINKS = 'Drinks';
const OPTION_DINNER = 'Dinner';

const RecappedBanner = (props) => {
    return (
        <div className='px-20 pt-4 pb-2 flex justify-center'>
            <img className='max-w-220' alt='SaaStrmap curated by Recapped' src={process.env.PUBLIC_URL + '/SaaStrMap Curated By Recapped 2.png'} />
        </div>
    )
}

const FoodList = (props) => {
    const { shouldShow, onRestaurantClick } = props;
    const [currentOption, setCurrentOption] = useState(OPTION_LUNCH);
    const isCurrentOption = (optionName) => optionName === currentOption;
    const getOptionClass = (optionName) => isCurrentOption(optionName) && 'border-b-2 border-gray-500';
    const foodOptions = foodLocations[currentOption];

    return (
        <div className={`max-h-92vh overflow-y-scroll ${ !shouldShow && 'hidden'}`}>
            <RecappedBanner />
            <ul className='w-full bg-blue-50 px-4 pt-4 pb-2 flex justify-between sticky top-0'>
                <li className={`${getOptionClass(OPTION_LUNCH)} p-1 foodType cursor-pointer`} onClick={() => setCurrentOption(OPTION_LUNCH)}>{OPTION_LUNCH}</li>
                <li className={`${getOptionClass(OPTION_DINNER)} p-1 foodType cursor-pointer`} onClick={() => setCurrentOption(OPTION_DINNER)}>{OPTION_DINNER}</li>
                <li className={`${getOptionClass(OPTION_DRINKS)} p-1 foodType cursor-pointer`} onClick={() => setCurrentOption(OPTION_DRINKS)}>{OPTION_DRINKS}</li>
            </ul>
            <div className='foodOptionContainer flex flex-col px-4'>
                { foodOptions && foodOptions.map((foodOption, idx) => {
                    const { name, location, cuisine, description, id } = foodOption;
                    return (
                        <div className='py-4' key={name+idx} onClick={() => onRestaurantClick(id)}>
                            <img alt={name} className='h-20 w-20 rounded shadow-lg float-left mr-4' src='https://images.unsplash.com/photo-1632370339733-759652742546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI3Mzd8MHwxfHRvcGljfHx4alBSNGhsa0JHQXx8fHx8Mnx8MTYzMjQyNzI0MA&ixlib=rb-1.2.1&q=80&w=200'/>
                            <h3>{name}</h3>
                            <p className='text-gray-600 text-xs'>{location}</p>
                            <p className='text-gray-600 text-xs'>{cuisine}</p>
                            <p className='text-gray-600 text-xs'>{description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

FoodList.propTypes = {
    shouldShow: PropTypes.bool.isRequired,
    onRestaurantClick: PropTypes.func.isRequired,
};

export default FoodList;