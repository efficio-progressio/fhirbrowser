import React, { Component } from 'react';
import { Container, Row,Col } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
            <NavMenu />
            <Container fluid={true}>
                <Row>
                    <Col md={{span: 4, offset: 2 }}>
                        {this.props.children}
                    </Col>
                </Row>
        </Container>
      </div>
    );
  }
}
