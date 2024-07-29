import { Card, colors } from "@mui/material"
import { FC } from "react"

type DynamicBackgroundCard = {
  children: React.ReactNode,
  isNotEmpty: boolean
}

export const DynamicBackgroundCard: FC<DynamicBackgroundCard> = ({children, isNotEmpty}) => {
  const emptyColor = colors.grey[50]
  const initiatedColor = colors.green[50]

  return (
    <Card
      sx={{
        display: "flex",
        height: "100%",
        p: 2,
        backgroundColor: isNotEmpty
          ? initiatedColor
          : emptyColor,
      }}
    >
      {children}
    </Card>
  )
}

export default DynamicBackgroundCard