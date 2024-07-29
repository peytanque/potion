import { CardMedia } from "@mui/material";
import { FC } from "react";

type CardItemMediaProps = {
  src: string;
  alt?: string;
};

const CardItemMedia: FC<CardItemMediaProps> = ({ src, alt }) => {
  return (
    <CardMedia
      component="img"
      sx={{
        width: { xs: 100, md: 75, lg: 125 },
        height: { xs: 100, md: 75, lg: 125 },
      }}
      image={src}
      alt={alt}
    />
  );
};

export default CardItemMedia;
