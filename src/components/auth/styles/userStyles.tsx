import styled from "styled-components"

export const DivForm = styled.div<{ mode?: string }>`
  margin-top: 40px;
  margin-right: 20%;
`
export const DivButton = styled.div<{ mode?: string }>`
  display: flex;
  flex-direction: column;
`
export const DivAuthDetails = styled.div<{ mode?: string }>`
  margin-left: 33%;
`
// export const ParagraphError = styled.p<{error?: string}>`
//   color: ${props => props.error ? 'red' : 'none'};
// `;
