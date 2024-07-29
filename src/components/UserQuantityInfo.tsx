import { Typography } from "@mui/material";
import { FC } from "react";

type UserQuantityInfoProps = {
  isNotEmpty: boolean;
  userQuantity: number;
};

export const UserQuantityInfo: FC<UserQuantityInfoProps> = ({
  isNotEmpty,
  userQuantity,
}) => {
  const notEmptyText = "Votre sac en contient"
  const emptyText = "Vous n'en possédez pas."
  return (
    <Typography
      variant="subtitle1"
      color={isNotEmpty ? "green" : "text.secondary"}
      component="div"
      lineHeight={1}
    >
      {isNotEmpty ? (
        <>
          {notEmptyText} <b>{userQuantity}</b>
        </>
      ) : (
        <>{emptyText}</>
      )}
    </Typography>
  );
};

export default UserQuantityInfo;
