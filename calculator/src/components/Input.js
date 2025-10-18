import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 24px;
  text-align: right;
  padding: 10px;
  background-color: #2E2E2E; /* Cinza Neutro mais escuro */
  color: #00E5FF; /* Azul Ciano Luminoso */
  font-weight: bold;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
`;

export default function Input({ value }) {
  return <StyledInput type="text" disabled value={value} />;
}
