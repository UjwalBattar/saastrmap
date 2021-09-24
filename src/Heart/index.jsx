import PropTypes from 'prop-types';

const Heart = (props) => {
    const { shouldShow } = props;
    return (
        <div className={`p-4 h-screen relative ${!shouldShow && 'hidden'}`}>
            <div>
                <p className='text-sm text-gray-700 py-2'>We realize this may be your first time in the Bay Area, so the Recapped team made this simple curated guide of our favorites spots.</p>
                <p className='text-sm text-gray-700 py-2'><a className='text-blue-500' href='https://www.recapped.io'>Recapped.io</a> is the easiest way for sales and success teams to collaborate with their customers on complex deals. If you struggle with a lengthy sales cycle, we'd love to help you out.</p>
                <p className='text-sm text-gray-700 py-2'>See you around SaaStr!</p>
                <p className='text-sm text-gray-700 py-2 text-right'>- ❤️ the Recapped Team</p>
            </div>
        </div>
    )
}

Heart.propTypes = {
    shouldShow: PropTypes.bool.isRequired,
};

export default Heart;