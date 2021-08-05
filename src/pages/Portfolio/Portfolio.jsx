import { portfolioFront, portfolioBack } from "../../data";
import {Container, Row, Col} from 'react-bootstrap';
import './Portfolio.scss';



const Portfolio = () => {

    return (
        <div>
            <Container >
                <Row className="azul">
                    <Col>
                      
                            <p >Front-End</p>
                                </Col>
                                <Col>
                                <p >Front-End</p>
                                </Col>
            
            
                            </Row>
                        </Container>
                            <div>
                                {portfolioFront.map(item => {
                                    return (
                                        <div key={JSON.stringify(item)}>
                                            <a href={item.url}>
                                                <span>{item.nameApp}</span>
                                                <span>{item.tecnology}</span>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                       
                       
                            <p>Back-End</p>
                            <div>
                                {portfolioBack.map(item => {
                                    return (
                                        <div key={JSON.stringify(item)}>
                                            <a href={item.url}>
                                                <span>{item.nameApp}</span>
                                                <span>{item.tecnology}</span>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        
        </div>
    )

}
export default Portfolio;
