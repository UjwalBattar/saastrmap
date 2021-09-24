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

    return (
        <div className={`max-h-92vh overflow-y-scroll ${ !shouldShow && 'hidden'}`}>
            <RecappedBanner />
            <ul className='w-full bg-blue-50 px-8 pt-4 pb-2 flex justify-between sticky top-0'>
                <a href={`#${OPTION_LUNCH}`} className={`${getOptionClass(OPTION_LUNCH)} p-1 foodType cursor-pointer`} onClick={() => setCurrentOption(OPTION_LUNCH)}>{OPTION_LUNCH}</a>
                <a href={`#${OPTION_DINNER}`} className={`${getOptionClass(OPTION_DINNER)} p-1 foodType cursor-pointer`} onClick={() => setCurrentOption(OPTION_DINNER)}>{OPTION_DINNER}</a>
                <a href={`#${OPTION_DRINKS}`} className={`${getOptionClass(OPTION_DRINKS)} p-1 foodType cursor-pointer`} onClick={() => setCurrentOption(OPTION_DRINKS)}>{OPTION_DRINKS}</a>
            </ul>
            <div className='foodOptionContainer flex flex-col px-8'>
                { [OPTION_LUNCH, OPTION_DINNER, OPTION_DRINKS].map(option => {
                    const foodOptions = foodLocations[option];

                    const foodOptionsHTML = foodOptions && foodOptions.map((foodOption, idx) => {
                        const { name, location, cuisine, description, discount, id } = foodOption;
                        return (
                            <div className='py-4' key={name+idx} onClick={() => onRestaurantClick(id)}>
                                <img alt={name} className='h-20 w-20 rounded shadow-lg float-left mr-4' src='https://images.unsplash.com/photo-1632370339733-759652742546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI3Mzd8MHwxfHRvcGljfHx4alBSNGhsa0JHQXx8fHx8Mnx8MTYzMjQyNzI0MA&ixlib=rb-1.2.1&q=80&w=200'/>
                                <h3 className='text-sm text-gray-700 font-semibold'>{name}</h3>
                                <p className='text-gray-600 text-xs'>{location}</p>
                                <div className='flex justify-between'>
                                    <p className='text-gray-600 text-xs font-semibold'>{cuisine}</p>
                                    {discount ? <p className='text-green-600 text-2xs'>{discount}% off</p> : null}
                                </div>
                                <p className='text-gray-600 text-xs'>{description}</p>
                            </div>
                        );
                    });

                    return (
                        <>
                            <h4 id={option} className='pt-4 text-gray-600 text-md font-light'>{option}</h4>
                            { foodOptionsHTML }
                        </>
                    )
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