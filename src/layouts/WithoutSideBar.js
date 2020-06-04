import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
const DefaultLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-0"
        lg={{ size: 4, offset: 4 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
          {children}
      </Col>
    </Row>
  </Container>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: true,
  noFooter: true
};

export default DefaultLayout;
