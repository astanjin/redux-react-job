import styled from "styled-components";
const Logo = () => {
  return (
    <Wrapper className="logo">
      <span>JOB</span>World
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--primary-500);
  span {
    color: var(--primary-900);
  }
`;

export default Logo;
