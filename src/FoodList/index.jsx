import './index.scss';
import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import foodLocations from './locations.json';
import RecappedBanner from '../RecappedBanner';

const OPTION_LUNCH = 'Lunch';
const OPTION_DRINKS = 'Drinks';
const OPTION_DINNER = 'Dinner';

const getTagColorClass = () => {
    // NOTE: need to spell these class names out so they don't get tree-shaken in prod https://tailwindcss.com/docs/optimizing-for-production
    const colorClasses = ['text-blue-600 bg-blue-100', 'text-purple-600 bg-purple-100', 'text-indigo-600 bg-indigo-100', 'text-green-600 bg-green-100', 'text-yellow-600 bg-yellow-100'];
    let idx = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[idx%colorClasses.length];
}

const FoodList = (props) => {
    const { shouldShow, onRestaurantClick } = props;
    const [currentOption, setCurrentOption] = useState(OPTION_LUNCH);
    const isCurrentOption = (optionName) => optionName === currentOption;
    const getOptionClass = (optionName) => isCurrentOption(optionName) && 'border-b-2 foodType-active';

    const foodOptions = useMemo(() => [OPTION_LUNCH, OPTION_DINNER, OPTION_DRINKS].map(option => {
        const foodOptions = foodLocations[option];

        const foodOptionsHTML = foodOptions && foodOptions.map((foodOption, idx) => {
            const { name, address, tags, description, discount, id, photo } = foodOption;
            return (
                <div className='py-4 border-b-2 last:border-b-0' key={name+idx} onClick={() => onRestaurantClick(id)}>
                    <img alt={name} className='w-32 max-h-24 rounded shadow-lg float-left object-cover mr-4' src={photo}/>
                    <h3 className='text-sm text-gray-700 font-semibold'>{name}</h3>
                    <p className='text-gray-600 text-xs'>{address}</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-wrap'>
                            { tags.split(',').map(tag => {
                                return (
                                    <p className={`inline my-1 mr-2 px-2 py-1  ${getTagColorClass()} rounded-lg text-xs font-semibold`}>{tag}</p>
                                );
                            })}
                        </div>
                    </div>
                    {discount ? <p className='text-gray-600 text-2xs font-semibold'>{discount}% off with code "Recapped"</p> : null}
                    <p className='text-gray-600 text-xs'>{description}</p>
                </div>
            );
        });

        return (
            <div>
                <h4 id={option} className='pt-4 text-gray-800 text-xl font-medium'>{option}</h4>
                { foodOptionsHTML }
            </div>
        )
    }), [onRestaurantClick]);

    return (
        <div className={`max-h-92vh overflow-y-scroll ${ !shouldShow && 'hidden'}`}>
            <RecappedBanner />
            <ul className='w-full bg-blue-50 px-8 pt-4 pb-2 flex justify-between sticky top-0'>
                <a href={`#${OPTION_LUNCH}`} className={`${getOptionClass(OPTION_LUNCH)} p-1 foodType cursor-pointer`} onClick={() => setCurrentOption(OPTION_LUNCH)}>{OPTION_LUNCH}</a>
                <a href={`#${OPTION_DINNER}`} className={`${getOptionClass(OPTION_DINNER)} p-1 foodType cursor-pointer`} onClick={() => setCurrentOption(OPTION_DINNER)}>{OPTION_DINNER}</a>
                <a href={`#${OPTION_DRINKS}`} className={`${getOptionClass(OPTION_DRINKS)} p-1 foodType cursor-pointer`} onClick={() => setCurrentOption(OPTION_DRINKS)}>{OPTION_DRINKS}</a>
            </ul>
            <div className='foodOptionContainer flex flex-col px-8'>
                { foodOptions }
            </div>
        </div>
    );
}

FoodList.propTypes = {
    shouldShow: PropTypes.bool.isRequired,
    onRestaurantClick: PropTypes.func.isRequired,
};

export default FoodList;