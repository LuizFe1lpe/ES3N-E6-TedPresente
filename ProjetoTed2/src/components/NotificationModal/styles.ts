import styled from "styled-components";
interface CardProps {
  visualized: boolean;
}
export const NotificationCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px solid #133777;
  margin: 0 0 10px 0;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => (props.visualized ? "#dcdcdc" : "#fff")};
  font-size: 20px;
  padding: 10px;
`;
