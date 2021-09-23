import { TAB_HEART, TAB_LIST, TAB_MAP } from '../constants';
import PropTypes from 'prop-types';
import './index.scss';

const FooterTab = (props) => {
    const { className, onClick, tab } = props;
    return (
        <a className={className} onClick={() => onClick(tab)}></a>
    )
}

const Footer = (props) => {
    const { onClick } = props;
    return (
        <footer className='footer flex justify-between items-center h-16 px-8 bg-gray-200 w-screen absolute bottom-0'>
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