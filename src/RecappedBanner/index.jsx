const RecappedBanner = (props) => {
    return (
        <div className='px-20 pt-4 pb-2 flex justify-center'>
            <img className='max-w-220' alt='SaaStrmap curated by Recapped' src={process.env.PUBLIC_URL + '/SaaStrMap Curated By Recapped 2.png'} />
        </div>
    )
}

export default RecappedBanner;