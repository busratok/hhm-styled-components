import StyledCard from "./styled/Card.Styled";

const Card = ({ data }) => {
  const { id, title, body, image } = data;
  return (
    <StyledCard odd={id % 2 && "row"}>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
