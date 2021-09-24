import PropTypes from 'prop-types';
import RecappedBanner from '../RecappedBanner';

const Heart = (props) => {
    const { shouldShow } = props;
    return (
        <div className={`p-4 pt-0 h-screen relative ${!shouldShow && 'hidden'}`}>
            <RecappedBanner />
            <div className='py-4 text-md'>
                <h4 className='font-medium'>Why you're reading this</h4>
                <p className='text-gray-700 py-2'>We realize this may be your first time in the Bay Area, so the Recapped team made this simple curated guide of our favorites spots.</p>
                <h4 className='font-medium'>Who we are</h4>
                <p className='text-gray-700 py-2'><a className='text-blue-500' href='https://www.recapped.io'>Recapped.io</a> is the easiest way for sales and success teams to collaborate with their customers on complex deals. If you struggle with a lengthy sales cycle, we'd love to help you out.</p>
                <p className='text-gray-700 py-2'>See you around SaaStr!</p>
                <p className='text-gray-700 py-2 text-right'>- ❤️ the Recapped Team</p>
            </div>
            <div className='flex justify-center pt-8'>
                <a className='bg-blue-700 shadow-lg rounded text-white py-2 px-4 text-xs font-semibold' href='https://www.recapped.io/demo.html'>Request demo</a>
            </div>
        </div>
    )
}

Heart.propTypes = {
    shouldShow: PropTypes.bool.isRequired,
};

export default Heart;