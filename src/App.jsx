import React from 'react';
import Container from 'react-bootstrap/Container';
import DayCards from './Components/DayCards';
import { Row, Col } from 'react-bootstrap'
import { DAYCARDINFO } from './data';

import './App.scss';

const App = () => (
    <body data-bs-theme='dark'>
        <Container>
            
            <Row>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[0]}/>
                </Col>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[1]}/>
                </Col>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[2]}/>
                </Col>
            </Row>
            <Row>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[3]}/>
                </Col>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[4]}/>
                </Col>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[5]}/>
                </Col>
            </Row>
            <Row>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[6]}/>
                </Col>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[7]}/>
                </Col>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[8]}/>
                </Col>
            </Row>
            <Row>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[9]}/>
                </Col>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[10]}/>
                </Col>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[11]}/>
                </Col>
            </Row>
            <Row>
                <Col>                                                   
                    <DayCards {...DAYCARDINFO[12]}/>
                </Col>
            </Row>
            
        </Container>
    </body>
);

export default App;