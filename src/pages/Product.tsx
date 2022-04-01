import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "@/services/requests/products";
import { Product } from "@/types/products";
import { ProductLoading, ProductContent } from "@/components/pages/product";

const ProductPage: FC = () => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(parseInt(id as string));

        // api doesn't return 404 error :(
        if (!product) {
          navigate("/404");
        } else {
          setProduct(product);
        }
      } catch (error) {
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      setProduct(undefined);
    };
  }, [id]);

  return (
    <div>
      {loading ? (
        <ProductLoading />
      ) : (
        <ProductContent product={product as Product} />
      )}
    </div>
  );
};

export default ProductPage;
