import Image from "next/image";
import { Inter } from "next/font/google";
import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ShopLayout
      title={"Shop | WRK"}
      pageDescription={"Encuentra los mejores productos de ropa e idumentaria"}
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }} component="h1">
        Todos los productos
      </Typography>
    </ShopLayout>
  );
}
