
const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    
    return (
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>{currentDate}</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard