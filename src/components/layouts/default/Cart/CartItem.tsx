import type { FC } from "react";
import {
  ListItem,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";
import { truncate } from "@/lib/utils";

interface IProps {
  title: string;
  price: number;
  image: string;
  quantity: number;
  onDelete?: () => void;
  onAdd?: () => void;
  onRemove?: () => void;
}

const CartItem: FC<IProps> = ({
  title,
  price,
  image,
  quantity,
  onDelete,
  onAdd,
  onRemove,
}) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ flexBasis: "30%" }}>
        <CardMedia component="img" width="100" height="100" image={image} />
      </Box>

      <Box sx={{ flexBasis: "50%", p: 2 }}>
        <Typography fontWeight="bold">{truncate(title, 40)}</Typography>
        <Box sx={{ display: "flex" }}>
          <Chip label={`$${price}`} color="primary" size="small" />
          <Typography sx={{ ml: 1 }} variant="subtitle2">
            Quantity: {quantity}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flexBasis: "20%", display: "flex", alignItems: "center" }}>
        <IconButton onClick={onRemove} size="small" aria-label="remove">
          <Remove fontSize="small" />
        </IconButton>
        <IconButton onClick={onDelete} size="small" aria-label="delete">
          <Delete fontSize="small" />
        </IconButton>
        <IconButton onClick={onAdd} size="small" aria-label="add">
          <Add fontSize="small" />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default CartItem;
