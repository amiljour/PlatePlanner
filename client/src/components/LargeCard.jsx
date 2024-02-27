const LargeCard = (prop) => {
  const {
    image,
    imageDescription,
    heading,
    subText1,
    subText2,
    subText3,
    btn,
  } = prop;
  return (
    <div className="card largeCard w-96 glass">
      <h2 className="card-title">{heading}</h2>
        {subText1 && <p className="">{subText1}</p>}
      
        <img
          src={image}
          alt={imageDescription}
          style={{
            maxWidth: "70%",
            maxHeight: "70%",
            height: "auto",
            width: "auto",
          }}
        />
      
      <div className="card-body">
        {subText2 && <p className="">{subText2}</p>}
        {subText3 && <p className="">{subText3}</p>}
        {btn && (
          <div className="card-actions justify-center">
            <button className="btn btn-error">{btn}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LargeCard;
