import PropTypes from 'prop-types';

const Heart = (props) => {
    const { shouldShow } = props;
    return (
        <div className={`py-4 flex justify-center ${!shouldShow && 'hidden'}`}>
            <span>Made with ❤️ by <a className='text-blue-500' href='https://www.recapped.io'>Recapped.io</a></span>
        </div>
    )
}

Heart.propTypes = {
    shouldShow: PropTypes.bool.isRequired,
};

export default Heart;