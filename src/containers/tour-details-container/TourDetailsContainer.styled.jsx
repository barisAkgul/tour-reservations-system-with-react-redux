import styled from "styled-components";

export const ToursDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  gap: 20px;
  padding: 30px 25px;
  width: 94vw;
  //margin: auto;

  .left-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 50px;

    img {
      border-radius: 8px;
      height: 60vh;
      object-fit: cover;
      object-position: bottom;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 30px;

      .name {
        padding-bottom: 15px;
        border-bottom: 1px solid gainsboro;
      }

      .tour-features-product {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));

        gap: 30px;
        .feature {
          display: flex;
          gap: 18px;

          .icon {
            color: rgb(253, 76, 92);
            font-size: 28px;
          }

          .title-desc {
            .title {
              margin: 0 0 10px;
              font-weight: 700;
              font-size: 16px;
              line-height: 20px;
            }
            .desc {
              margin: 0;
              font-weight: 700;
              font-size: 16px;
              line-height: 20px;
              color: var(--text);
              opacity: 0.7;
            }
          }
        }
      }

      .overview {
        border-radius: 4px;
        margin-bottom: 20px;

        .overview-title {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .overview-content {
          font-size: 18px;

          margin: 25px 0px;
          opacity: 0.6;
        }
      }
    }
  }

  .right-section {
    .sticky-component {
      position: sticky;
      top: 100px;
    }
  }

  @media (max-width: 768px) {
    & {
      grid-template-columns: 1fr;

      .left-section {
        padding: 0px;
      }
    }
  }
`;
