import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  //background-color: #f8f8f8;
`;

export const ErrorContent = styled.div`
  text-align: center;
  margin-bottom: 200px;
`;

export const ErrorTitle = styled.h1`
  font-size: 24px;
  color: #e63946;
  margin-bottom: 16px;
`;

export const ErrorDescription = styled.p`
  font-size: 16px;
  color: #555555;
`;

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorContent>
        <ErrorTitle>404 Error</ErrorTitle>
        <ErrorDescription>
          Oops! Something went wrong. Please try again later or contact the
          administrator.
        </ErrorDescription>
      </ErrorContent>
    </ErrorContainer>
  );
};

export { ErrorPage };
