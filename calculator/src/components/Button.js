import styled from "styled-components";

const getButtonColors = (variant) => {
  switch (variant) {
    case "equal":
      return {
        bg: "#00E5FF", // Ciano Suave
        hover: "#00E5FF", // Azul Ciano Luminoso
        text: "#0A0A0A", // Preto Absoluto para contraste
      };
    case "action":
      return {
        bg: "#2E2E2E", // Cinza Neutro
        hover: "#3E3E3E",
        text: "#00E5FF", // Azul Ciano Luminoso
      };
    default: // numbers
      return {
        bg: "#006CFF", // Azul Profundo
        hover: "#0080FF",
        text: "#FFFFFF",
      };
  }
};

const StyledButton = styled.button`
  flex: ${({ $span }) => $span || 1};
  height: 50px;
  margin: 3px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  background-color: ${({ $variant }) => getButtonColors($variant).bg};
  color: ${({ $variant }) => getButtonColors($variant).text};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${({ $variant }) => getButtonColors($variant).hover};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 229, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
`;

export default function Button({ label, onClick, span, variant }) {
  return (
    <StyledButton onClick={onClick} $span={span} $variant={variant}>
      {label}
    </StyledButton>
  );
}
