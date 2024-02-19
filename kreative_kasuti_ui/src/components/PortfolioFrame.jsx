
function PortfolioFrame({imageUrl, altText}){
    return (
        <>
        <div className="border bg-primary-text-color h-200 w-200">
                <img src={imageUrl} alt={altText} className="w-100 h-80" />
              </div>
        </>
    )
}

export default PortfolioFrame;

