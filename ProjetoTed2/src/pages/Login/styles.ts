import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;

  iframe {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  text-align: center;
  justify-content:center;
  color: #133777;
  overflow: auto;
  gap: 20px;
  .input-field{
    margin: 0 20px;
    width:50%
  }
  .form-button{
    margin: 0 20px;
  }
  img {
    width: 30%;
    height: auto;
  }
  .input-forms {
    display:flex;
    align-items:center;
    flex-direction: column;
    gap: 10px;
    width:100%
  }
`;

export const IframeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  iframe {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;