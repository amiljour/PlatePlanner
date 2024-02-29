const Card = (prop) => {
  const { content } = prop;
  return (
    <div className="card normalCard w-96 glass">
      {/* <figure><img src={content} alt="car!"/></figure> */}
        <p className="card-title text-success">{content}</p>
    </div>
  );
};

export default Card;
