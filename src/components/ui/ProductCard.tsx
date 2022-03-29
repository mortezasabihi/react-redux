import type { FC } from "react";
import type { Product } from "@/types/products";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { truncate } from "@/utils";

interface IProps {
  product: Product;
}

const ProductCard: FC<IProps> = ({
  product: { image, title, price, description, id },
}) => {
  return (
    <Card
      component="article"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" height="300" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title} - ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncate(description, 140)}
        </Typography>
      </CardContent>
      <CardActions style={{ flexGrow: 1, alignItems: "flex-end" }}>
        <Button size="small" variant="outlined" startIcon={<AddShoppingCart />}>
          Add to cart
        </Button>
        <Link to={`/${id}`}>
          <Button size="small">View</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
