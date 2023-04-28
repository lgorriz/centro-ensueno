import React from 'react';
import { Col, Container, Row } from 'reactstrap';

function Nosotros(props){ 
    return (
        <>
            <section className="section section-lg pt-6 bg-secondary mt-5">
                <Container className="mb-6">
                    <Row className="row-grid align-items-center">
                        <Col className lg="12">
                        <div className="pl-4 align-component-enter">
                            <h4 className="display-3">Nosotros</h4>
                        </div>
                        </Col>
                    </Row>
                    <Row className="mt-5" id="vision">
                        <Col className="text-center" lg="2">
                            <img
                            alt="..."
                            className="img-fluid rounded-circle shadow"
                            src={require("assets/img/nosotros/vision.png")}
                            style={{ width: "150px" }}
                            />
                        </Col>
                        <Col className lg="10">
                            <h4>Visión</h4>
                            <p>
                                Nos proponemos ser un servicio referente en la implementación del Modelo de Calidad de Vida orientado a la plena participación e inclusión en la comunidad de las personas con discapacidad, generando además procesos de apoyo a las familias.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-6" id="mision">
                        <Col className lg="10">
                            <h4>Misión</h4>
                            <p>
                            Contribuir a mejorar la calidad de vida de la población con discapacidad y sus familias proporcionando oportunidades y apoyos para el desarrollo de sus proyectos de vida, a través de la implementación de acciones que promuevan la inclusión y la participación como ciudadanos de pleno derecho.
                            </p>
                        </Col>
                        <Col className="text-center" lg="2">
                            <img
                            alt="..."
                            className="img-fluid rounded-circle shadow"
                            src={require("assets/img/nosotros/mision.jpg")}
                            style={{ width: "250px" }}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-6" id="valores">
                        <Col className="text-center" lg="2">
                            <img
                            alt="..."
                            className="img-fluid rounded-circle shadow"
                            src={require("assets/img/nosotros/values.png")}
                            style={{ width: "150px" }}
                            />
                        </Col>
                        <Col className lg="10">
                            <h4>Valores</h4>
                            <ul>
                                <li>
                                    Defensa de los derechos de las personas con discapacidad: Fortaleciendo el poder de definir el proyecto de vida de las personas con discapacidad para su plena participación e inclusión en la comunidad.
                                </li>
                                <li>
                                    Trabajo en equipo: Desarrollando el sentimiento de pertenencia, unión y participación en el cumplimiento de la misión.
                                </li>
                                <li>
                                    Compromiso social: A través del aprendizaje continuo que garantice el mejor servicio prestado a los usuarios y sus familias
                                </li>
                                <li>
                                    Adaptación al cambio: Con la prestación de un servicio abierto a nuevas propuestas de innovación y transformación para el cumplimiento de la misión
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>   
        </>   
    );


}


export default Nosotros;