
import React from 'react';
import { Link } from 'react-router';
import { Container, Content, Row, Col } from 'rsuite';
import { Markdown } from '../fixtures/Markdown';

import DocHeader from '../fixtures/DocHeader';
import DocSidebar from '../fixtures/DocSidebar';



const PageComponents = React.createClass({
    render: function () {
        return (
            <div>
                <Row>
                    <Col md={12}>
                        <Markdown>
                            {require('./components.md')}
                        </Markdown>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} sm={12}>
                        <DocSidebar />
                    </Col>
                    {this.props.children}
                </Row>

            </div>
        );
    }
});

export default PageComponents;