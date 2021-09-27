const RecappedBanner = (props) => {
    return (
        <div className='lg:px-32 flex justify-center'>
            <a href='https://www.recapped.io?utm_source=saastrmaplogo'>
                <img className='' alt='SaaStrmap curated by Recapped' src={process.env.PUBLIC_URL + '/SaaStr Map Header.png'} />
            </a>
        </div>
    )
}

export default RecappedBanner;