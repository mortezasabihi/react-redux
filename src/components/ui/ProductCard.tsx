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
      <Link to={`/${id}`}>
        <CardMedia component="img" height="300" image={image} alt={title} />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component={Link} to={`/${id}`}>
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

        <Button component={Link} to={`/${id}`} size="small">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
