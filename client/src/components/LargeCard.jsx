
const LargeCard = (prop) => {
  const { image, heading, subText1, subText2, subText3, btn } = prop
  return (
    
    <div className="largeCard glass">
            <h2 className="m-1 text-3xl font-bold">{heading}</h2>
            <p className="text-xl mb-3">{subText1}</p>
            <img src={image} alt="Meal" style={{maxWidth: "80%", maxHeight: "70%", height: "auto", width: "auto"}} className="mb-3" />
            {subText2 && <p className="">{subText2}</p>}
            {subText3 && <p className="m-3">{subText3}</p>}
            {btn && <button className="btn btn-error m-3">{btn}</button>}
    </div>
  )
}

export default LargeCard