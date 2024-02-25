
const Card = (prop) => {
  const { content } = prop
  return (
    <div className="card m-5 glass">
      <p>
        {content}
      </p>
    </div>
  );
};

export default Card;
