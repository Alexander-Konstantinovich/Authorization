import styled, { keyframes } from "styled-components"
import { createGlobalStyle } from "styled-components"

export const layoutStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  textAlign: "center",
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
  background: "linear-gradient(135deg, #1f6578, #1ea187, #f4d6db)",
}

export const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 100,
  paddingInline: 48,
  lineHeight: "64px",
  background: "none",
}

export const contentStyle: React.CSSProperties = {
  minHeight: 120,
  minWidth: 500,
  lineHeight: "30px",
  color: "#fff",
}

export const GlobalStyle = createGlobalStyle`
  body {
  background-color:  #f6dfe3;
  }
`

const glowingAnimation = keyframes`
  0% {
    color: #0feafa;
  }
  50% {
    color: #fff;
  }
  100% {
    color: #0feafa;
  }
`

export const Title = styled.h1`
  font-size: 34px;
  font-weight: bold;
  animation: ${glowingAnimation} 5.5s linear infinite;
`
