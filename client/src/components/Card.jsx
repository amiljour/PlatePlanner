const Card = (prop) => {
  const { content } = prop;
  return (
    <div className="card normalCard glass">
      {/* <figure><img src={content} alt="car!"/></figure> */}
        <p className="card-title text-success">{content}</p>
    </div>
  );
};

export default Card;
