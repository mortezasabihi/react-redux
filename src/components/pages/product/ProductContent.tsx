import type { FC } from "react";
import { useDispatch } from "react-redux";
import { Typography, CardMedia, Grid, Box, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Product } from "@/types/products";
import { actionCartAddItem } from "@/redux/modules/cart";

interface IProps {
  product: Product;
}

const ProductContent: FC<IProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(actionCartAddItem(product));
  };

  return (
    <Box>
      <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
        {product.title}
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Category: {product.category}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Typography variant="body1" sx={{ mt: 10, color: grey[600] }}>
            Description:
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {product.description}
          </Typography>

          <Box>
            <Typography
              variant="body1"
              component="span"
              sx={{ color: grey[600] }}
            >
              Rate:
            </Typography>
            <Typography variant="body1" component="span" sx={{ ml: 2 }}>
              {product.rating.rate}
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            color="info"
            sx={{ width: "100%", mt: 3 }}
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </Grid>
        <Grid item xs={12} sm={7}>
          <CardMedia
            src={product.image}
            component="img"
            sx={{ objectFit: "contain", height: "70%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductContent;
