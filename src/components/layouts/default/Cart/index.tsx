import type { FC } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  Divider,
  Button,
  Fab,
  Badge,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartIsOpen,
  getCartItems,
  getCartItemsTotalQuantity,
  getCartItemsTotalPrice,
  actionCartToggleIsOpen,
  actionCartRemoveItem,
  actionCartIncreaseItemQuantity,
  actionCartDecreaseItemQuantity,
  actionCartClearItems,
} from "@/redux/modules/cart";
import CartItem from "./CartItem";
import { formatPrice } from "@/lib/utils";

const Cart: FC = () => {
  const disapcth = useDispatch();

  const handleToggle = () => {
    disapcth(actionCartToggleIsOpen());
  };
  const handleDelete = (id: number) => {
    disapcth(actionCartRemoveItem(id));
  };
  const handleAdd = (id: number) => {
    disapcth(actionCartIncreaseItemQuantity(id));
  };
  const handleRemove = (id: number) => {
    disapcth(actionCartDecreaseItemQuantity(id));
  };
  const handleClear = () => {
    disapcth(actionCartClearItems());
  };

  const isOpen = useSelector(getCartIsOpen);
  const cartItems = useSelector(getCartItems);
  const totalQuantity = useSelector(getCartItemsTotalQuantity);
  const totalPrice = useSelector(getCartItemsTotalPrice);

  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={handleToggle}>
        <Box
          sx={{
            width: 400,
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
          role="presentation"
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Cart: {totalQuantity}</Typography>

            {cartItems.length > 0 && (
              <Button onClick={handleClear}>Clear</Button>
            )}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Divider />

              <List>
                {cartItems.map(
                  ({ product: { title, price, image, id }, quantity }) => (
                    <CartItem
                      key={id}
                      title={title}
                      price={price}
                      image={image}
                      quantity={quantity}
                      onDelete={() => handleDelete(id)}
                      onAdd={() => handleAdd(id)}
                      onRemove={() => handleRemove(id)}
                    />
                  )
                )}
              </List>
            </Box>

            <Box sx={{ p: 2 }}>
              {cartItems.length > 0 && (
                <Button
                  size="large"
                  style={{ width: "100%" }}
                  variant="contained"
                >
                  Proceed to checkout{" "}
                  {totalPrice > 0 && ` - ${formatPrice(totalPrice)}`}
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Drawer>

      <Fab
        onClick={handleToggle}
        sx={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
        }}
        color="primary"
      >
        <Badge
          badgeContent={totalQuantity}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <ShoppingCart />
        </Badge>
      </Fab>
    </>
  );
};

export default Cart;
