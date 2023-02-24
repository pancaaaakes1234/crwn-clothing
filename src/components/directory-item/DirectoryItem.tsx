import { useNavigate } from "react-router-dom";
import { Category } from "../directory/Directory";
import {
  Body,
  DirectoryItemContainer,
  BackgroundImage,
} from "./DirectoryItem.styles";

type DirectoryItemProps = {
  category: Category;
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
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
