import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  gap: 2rem;
  padding: 60px;
  flex-direction: ${({ odd }) => odd || "row-reverse"};
  img {
    width: 300px;
  }
  & div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export default StyledCard;
