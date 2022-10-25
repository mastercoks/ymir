import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 112px;
  gap: 40px;
`;

export const Card = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Figure = styled.figure`
  position: relative;
  min-height: 350px;
  border-radius: 8px;
  overflow: hidden;
  transition-delay: 100ms;
  transition: all 300ms;
  margin-bottom: 32px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0;
  }
  &:hover {
    transform: scale(1.25);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    img {
      filter: blur(10px);
      transform: scale(1.25);
    }
    figcaption {
      opacity: 1;
      transition: opacity 0.15s ease-in-out;
    }
    &::after {
      opacity: 0.3;
    }
  }
`;

export const Caption = styled.figcaption`
  color: white;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  transition: all 300ms;
  transition-delay: 100ms;
  padding-top: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 8px;
  background-image: url("https://yts.mx/assets/images/movies/theres_no_place_like_this_place_anyplace_2020/medium-cover.jpg");
  background-size: contain;
`;

export const Title = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  white-space: pre;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
  gap: 8px;
`;

export const Year = styled.span`
  color: #7a7a87;
  font-weight: 600;
  font-size: 16px;
  flex: 1;
`;

export const Rating = styled.span`
  color: #d2be39;
  font-weight: 600;
  font-size: 16px;
`;

export const Header = styled.div`
  display: flex;
  gap: 8px;
`;

export const TitleSmall = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  flex: 1;
`;

export const Runtime = styled.span`
  font-size: 12px;
  line-height: 20px;
`;

export const Summary = styled.p`
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  flex: 1;
  overflow: hidden;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: #ffffff;
  border-radius: 20px;
  text-align: center;
  padding: 12px 16px;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`;
