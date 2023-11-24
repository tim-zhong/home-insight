import { keyframes, styled } from "styled-components";

export function LoadingIcon() {
  return (
    <Container>
      <svg
        fill="currentColor"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        id="loading-copy"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="primary"
          d="M12,3V6M5.64,5.64,7.76,7.76M3,12H6m-.36,6.36,2.12-2.12M12,18v3m6.36-2.64-2.12-2.12M21,12H18m.36-6.36L16.24,7.76"
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
          }}
        ></path>
      </svg>
    </Container>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  animation: ${rotate} 2s linear infinite;
`;
