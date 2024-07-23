import { useIngredient, usePotion } from "@hooks";
import { Avatar, Badge, Skeleton } from "@mui/material";
import {
  IngredientSlug,
  IngredientType,
  PotionSlug,
  PotionType,
} from "@types";
import { FC } from "react";

type ThumbProps = {
  type: "ingredient" | "potion";
  slug: PotionSlug | IngredientSlug;
  quantity?: number;
};

type WithQuantityBadgeProps = {
  children: React.ReactNode;
  quantity: number;
};

const Thumb: FC<ThumbProps> = ({ slug, type, quantity }) => {
  const { data: potionData } = usePotion(
    slug as PotionSlug,
    type === "potion"
  );
  const { data: ingredientData } =
    useIngredient(slug as IngredientSlug, type === "ingredient");

  const data = potionData || ingredientData;

  if (quantity && data?.data) {
    return (
      <WithQuantityBadge quantity={quantity}>
        <ItemAvatar {...data.data} />
      </WithQuantityBadge>
    );
  }

  if (data?.data) {
    return <ItemAvatar {...data.data} />;
  }

  return <Skeleton variant="circular" width={40} height={40} />;
};

const WithQuantityBadge: FC<WithQuantityBadgeProps> = ({
  children,
  quantity,
}) => {
  return (
    <Badge
      overlap="circular"
      color="primary"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={`0/${quantity}`}
    >
      {children}
    </Badge>
  );
};

const ItemAvatar: FC<IngredientType | PotionType> = ({ asset, name }) => {
  return <Avatar alt={name} src={asset.src} />;
};

export default Thumb;
