const OrderCard = props => {
    const { id, title, imageURL, price } = props
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex justify-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover"
                        src={imageURL}
                        alt={title} />
                </figure>
                <p className="text-md font-light ">{title}</p>
            </div>
            <div className="flex justify-center gap-2">
                <p className="text-lg font-semibold">{price}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    )
}

export default OrderCard