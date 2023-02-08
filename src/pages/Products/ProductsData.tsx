import { Col, Container, Row, Button } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Data {
  title?: string;
  image?: HTMLImageElement;
  content?: any;
  id?: number;
}

const notify = () => {
  toast.success("ADDED");
};

function ProductsData({ content }: Data) {
  return (
    <>
      <Container>
        <Row md={3} lg={6}>
          {content.map((product: any) => {
            return (
              <Col key={product.id} className="text-center">
                <h4>{product.attributes.title}</h4>
                <img
                  className="w-100 h-50"
                  src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
                  alt="test"
                />

                <Button onClick={notify} className="p-3 m-3" id={product.id}>
                  Add to cart
                </Button>
                <ToastContainer />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ProductsData;
