import styled from "@emotion/styled";

export const Cabecalho = styled.header`
  background: ${(props) => props.theme.cores.primarias.a};
  color: ${(props) => props.theme.cores.branco};
  font-size: ${(props) => props.theme.espacamentos.s};
  padding: ${(props) => props.theme.espacamentos.m};
`;

export const Card = ({ children }) => {
  return <Cabecalho>{children}</Cabecalho>;
};
