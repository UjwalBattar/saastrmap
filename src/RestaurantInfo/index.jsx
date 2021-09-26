const getTagColorClass = () => {
    // NOTE: need to spell these class names out so they don't get tree-shaken in prod https://tailwindcss.com/docs/optimizing-for-production
    const colorClasses = ['text-blue-600 bg-blue-100', 'text-purple-600 bg-purple-100', 'text-indigo-600 bg-indigo-100', 'text-green-600 bg-green-100', 'text-yellow-600 bg-yellow-100'];
    let idx = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[idx%colorClasses.length];
}


const RestaurantInfo = ({id, name, address, tags}) => {
    return (
        <>
            <h3 className='text-sm text-gray-700 font-semibold'>{name}</h3>
            <p className='text-gray-600 text-xs'>{address}</p>
            <div className='flex justify-between'>
                <div className='flex flex-wrap'>
                    { tags.split(',').map(tag => {
                        return (
                            <p key={id+tag} className={`inline my-1 mr-2 px-2 py-1  ${getTagColorClass()} rounded-lg text-2xs font-semibold`}>{tag}</p>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default RestaurantInfo;