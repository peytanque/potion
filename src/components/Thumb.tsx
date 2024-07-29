import { useUserContext } from "@context";
import { useIngredient, usePotion } from "@hooks";
import { Avatar, Badge, Skeleton } from "@mui/material";
import { IngredientSlug, IngredientType, PotionSlug, PotionType } from "@types";
import { FC } from "react";

type ThumbProps = {
  type: "ingredient" | "potion";
  slug: PotionSlug | IngredientSlug;
  quantity?: number;
};

type WithQuantityBadgeProps = {
  children: React.ReactNode;
  quantity: number;
  userQuantity?: number;
};

const Thumb: FC<ThumbProps> = ({ slug, type, quantity }) => {
  const { data: potionData, isLoading: isLoadingPotions } = usePotion(
    slug as PotionSlug,
    type === "potion"
  );
  const { data: ingredientData, isLoading: isLoadingIngredients } =
    useIngredient(slug as IngredientSlug, type === "ingredient");
  const { user } = useUserContext();
  const userQuantity =
    user.inventory.ingredients.find(
      (ingredient) => ingredient.item.slug === slug
    )?.quantity ?? 0;

  const data = potionData || ingredientData;
  const isLoading = isLoadingPotions || isLoadingIngredients;

  if (isLoading) {
    <Skeleton variant="circular" width={40} height={40} />;
  }

  if (quantity && data?.data) {
    return (
      <WithQuantityBadge quantity={quantity} userQuantity={userQuantity}>
        <ItemAvatar {...data.data} />
      </WithQuantityBadge>
    );
  }

  if (data?.data) {
    return <ItemAvatar {...data.data} />;
  }
};

const WithQuantityBadge: FC<WithQuantityBadgeProps> = ({
  children,
  quantity,
  userQuantity,
}) => {
  return (
    <Badge
      overlap="circular"
      color="primary"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={quantity ? `${userQuantity}/${quantity}` : false}
    >
      {children}
    </Badge>
  );
};

const ItemAvatar: FC<IngredientType | PotionType> = ({ asset, name }) => {
  return <Avatar alt={name} src={asset.src} />;
};

export default Thumb;
