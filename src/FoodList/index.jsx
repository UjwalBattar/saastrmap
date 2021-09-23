import './index.scss';
import { useState } from "react";
import PropTypes from "prop-types";
import foodLocations from './locations.json';

const OPTION_LUNCH = 'Lunch';
const OPTION_DRINKS = 'Drinks';
const OPTION_DINNER = 'Dinner';

const FoodList = (props) => {
    const { shouldShow } = props;
    const [currentOption, setCurrentOption] = useState(OPTION_LUNCH);
    const isCurrentOption = (optionName) => optionName === currentOption;
    const getOptionClass = (optionName) => isCurrentOption(optionName) && 'border-b-2 border-gray-500';
    const foodOptions = foodLocations[currentOption];

    return (
        <div className={`p-4 max-h-92vh overflow-y-scroll ${ !shouldShow && 'hidden'}`}>
            <ul className='w-full flex justify-between'>
                <li className={`${getOptionClass(OPTION_LUNCH)} p-1 foodType`} onClick={() => setCurrentOption(OPTION_LUNCH)}>{OPTION_LUNCH}</li>
                <li className={`${getOptionClass(OPTION_DINNER)} p-1 foodType`} onClick={() => setCurrentOption(OPTION_DINNER)}>{OPTION_DINNER}</li>
                <li className={`${getOptionClass(OPTION_DRINKS)} p-1 foodType`} onClick={() => setCurrentOption(OPTION_DRINKS)}>{OPTION_DRINKS}</li>
            </ul>
            <div className='foodOptionContainer flex flex-col'>
                { foodOptions && foodOptions.map((foodOption, idx) => {
                    const { name, location, cuisine, description } = foodOption;
                    return (
                        <div className='py-4' key={name+idx}>
                            <img className='h-20 w-20 rounded float-left mr-4' src='https://images.unsplash.com/photo-1632370339733-759652742546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI3Mzd8MHwxfHRvcGljfHx4alBSNGhsa0JHQXx8fHx8Mnx8MTYzMjQyNzI0MA&ixlib=rb-1.2.1&q=80&w=200'/>
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
};

export default FoodList;