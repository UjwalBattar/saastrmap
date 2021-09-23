import PropTypes from 'prop-types';

const Heart = (props) => {
    const { shouldShow } = props;
    return (
        <div className={`p-4 h-screen relative ${!shouldShow && 'hidden'}`}>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-sm text-gray-700 py-2'>We realize this may be your first time in the Bay Area, so the Recapped team made this simple curated guide of our favorites spots.</p>
                <p className='text-sm text-gray-700 py-2'>We believe giving as much value as we possibly can.</p>
                <p className='text-sm text-gray-700 py-2'>Recapped.io is the easiest way for sales and success teams to collaborate with their customers on complex deals. If you struggle with a lengthy sales cycle, we'd love to help you out.</p>
                <span className='text-gray-700 absolute bottom-40'>Made with ❤️ by <a className='text-blue-500' href='https://www.recapped.io'>Recapped.io</a></span>
            </div>
        </div>
    )
}

Heart.propTypes = {
    shouldShow: PropTypes.bool.isRequired,
};

export default Heart;