import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const Password = memo(({ className = "" }) => {
  return (
    <Form
      className={`[border:none] bg-[transparent] self-stretch h-10 font-small-text font-medium text-xl text-gray-200 ${className}`}
    >
      <Form.Control type="text" placeholder="Password" />
      <Form.Text>Atleast 6 characters and Use number</Form.Text>
    </Form>
  );
});

Password.propTypes = {
  className: PropTypes.string,
};

export default Password;
