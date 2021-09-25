const RecappedBanner = (props) => {
    return (
        <div className='lg:px-32 flex justify-center'>
            <img className='' alt='SaaStrmap curated by Recapped' src={process.env.PUBLIC_URL + '/Header - Max Width.png'} />
        </div>
    )
}

export default RecappedBanner;