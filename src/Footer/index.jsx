import { TAB_HEART, TAB_LIST, TAB_MAP } from '../utils';
import PropTypes from 'prop-types';
import './index.scss';
import { useEffect } from 'react';

const FooterTab = (props) => {
    const { className, onClick, tab } = props;
    return (
        <div className='w-20 h-full flex items-center justify-center' onClick={() => onClick(tab)}>
            <span className={`${className} cursor-pointer`}></span>
        </div>
    )
}

const SAFARI_MOBILE_BOTTOM_MENU_HEIGHT = 44;

const Footer = (props) => {
    const { onClick } = props;
    useEffect(() => {
        // for safari positioning https://medium.com/turo-engineering/react-stick-to-bottom-accessible-safari-fixed-bottom-elements-9ed761fbeecb
        const footer = document.getElementById('footer');
        const { bottom } = footer.getBoundingClientRect();
        if (Math.floor(bottom) > window.innerHeight) {
            footer.style.bottom = SAFARI_MOBILE_BOTTOM_MENU_HEIGHT;
        } else {
            footer.style.bottom = 0;
        }
    }, []);
    return (
        <footer id='footer' className='footer flex justify-between items-center lg:px-64 w-screen h-16 px-4 bg-gray-200 w-screen fixed bottom-0'>
            <FooterTab tab={TAB_LIST} className='icon-list2' onClick={onClick}/>
            <FooterTab tab={TAB_MAP} className='icon-location' onClick={onClick}/>
            <FooterTab tab={TAB_HEART} className='icon-heart' onClick={onClick}/>
        </footer>
    )
}

Footer.propTypes = {
    onClick: PropTypes.func.isRequired,
    currentTab: PropTypes.string.isRequired,
}

export default Footer;