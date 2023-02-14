import { useNavigate } from "react-router-dom";
import {
  Body,
  DirectoryItemContainer,
  BackgroundImage,
} from "./DirectoryItem.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const nav = useNavigate();

  const navHandler = () => nav(route);

  return (
    <DirectoryItemContainer onClick={navHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
