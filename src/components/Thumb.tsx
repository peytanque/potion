import { Avatar, Badge, Box, Skeleton } from "@mui/material";
import {
  endpoints,
  IngredientApiResponse,
  IngredientType,
  PotionApiResponse,
  PotionType,
} from "@types";
import { FC, useEffect, useState } from "react";

type ThumbProps = {
  type: "ingredient" | "potion";
  name: string;
  quantity?: number;
};

type WithQuantityBadgeProps = {
  children: React.ReactNode;
  quantity: number;
};

const Thumb: FC<ThumbProps> = ({ name, type, quantity }) => {
  const [data, setData] = useState<
    IngredientApiResponse | PotionApiResponse | null
  >(null);

  useEffect(() => {
    switch (type) {
      case "ingredient":
        fetch(endpoints.ingredients +  name)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
        break;

      case "potion":
        fetch(endpoints.potions + name)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
        break;

      default:
        break;
    }
  }, [name, type]);

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
