import styled from "styled-components";
import Image from "next/image";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  position: relative;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  
  img {
    width: 100% !important;
    height: auto !important;
    object-fit: contain;
    position: relative !important;
  }
`;

const Title = styled.h1`
  color: #61dafb;
  font-size: 24px;
  margin: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <StyledImageWrapper>
        <Image 
          src="/CAPA-FIVE.png" 
          alt="Logo" 
          width={260} 
          height={104}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </StyledImageWrapper>
    </HeaderContainer>
  );
}
