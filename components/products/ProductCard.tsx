import { IProduct } from "@/interfaces";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import React, { FC, useMemo, useState } from "react";

interface Props {
  product: IProduct;
}
export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setisHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            className="fadeIn"
            component="img"
            image={productImage}
            alt={product.title}
            onLoad={() => <CircularProgress />}
          />
        </CardActionArea>
      </Card>
      <Box className="fadeIn" sx={{ mt: 1 }}>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  );
};
