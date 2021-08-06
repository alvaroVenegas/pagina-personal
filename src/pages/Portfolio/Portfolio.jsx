import { portfolioFront, portfolioBack } from "../../data";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Portfolio.scss';



const Portfolio = () => {

    return (
        <Container className="container-portfolio">
            <h3 >Front-End</h3>
            <Row className="row-portfolio">
                {portfolioFront.map(item => {
                    return (
                        <Col key={JSON.stringify(item)} className="col-portfolio" >
                            <a href={item.url} className="col-portfolio--a">
                                <Card className="card-portfolio">
                                    <p>{item.nameApp}</p>
                                    <p>{item.tecnology}</p>
                                </Card>
                            </a>
                        </Col>
                    )
                })}
            </Row>
            <h3>Back-End</h3>
            <Row className="row-portfolio">
                {portfolioBack.map(item => {
                    return (
                        <Col key={JSON.stringify(item)} className="col-portfolio">
                            <a href={item.url} className="col-portfolio--a">
                                <Card className="card-portfolio">
                                    <p>{item.nameApp}</p>
                                    <p>{item.tecnology}</p>
                                </Card>
                            </a>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )

}
export default Portfolio;
