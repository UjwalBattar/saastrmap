import PropTypes from 'prop-types';
import RecappedBanner from '../RecappedBanner';

const Heart = (props) => {
    const { shouldShow } = props;
    return (
        <div className={`p-4 pt-0 lg:px-64 h-screen relative ${!shouldShow && 'hidden'}`}>
            <RecappedBanner />
            <div className='py-4 text-md'>
                <p className='text-gray-700 py-2'>Hey! We realize this may be your first time in the Bay Area, so the Recapped.io team made this simple curated guide of some of the great spots.</p>
                <p className='text-gray-700 py-2'>We believe in delivering as much value as possible to our community, so hopefully you find it useful. </p>
                <p className='text-gray-700 py-2'>Recapped.io is the easiest way for Sales and Success teams to collaborate internally <b>and with their customers</b> on complex deals. We integrate directly into your tools and help accelerate revenue by 28%, create a consistent playbook, see what's actually happening in a deal, and ensure seamless handoffs to post-sales.</p>
            </div>
            <div className='flex justify-center pt-8'>
                <a className='bg-blue-700 shadow-lg rounded text-white py-2 px-4 text-xs font-semibold' href='https://www.recapped.io/demo.html?utm_source=saastrmap'>Learn More</a>
            </div>
        </div>
    )
}

Heart.propTypes = {
    shouldShow: PropTypes.bool.isRequired,
};

export default Heart;