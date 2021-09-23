import './index.scss';

const Footer = (props) => {
    return (
        <footer className='footer flex justify-between items-center h-16 px-8 bg-gray-200 w-screen absolute bottom-0'>
            <a className='icon-list2'></a>
            <a className='icon-location'></a>
            <a className='icon-heart'></a>
        </footer>
    )
}
export default Footer;