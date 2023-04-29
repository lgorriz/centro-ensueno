import 'assets/scss/particular/home.scss';

import React  from 'react';
import { Badge, Button, Card, CardBody, CardImg, Col, Container, Row } from 'reactstrap';
import ContactoLanding from 'views/landing/ContactoLanding';

// reactstrap components
// core components
// index page sections

function Home(props){   

    return (
        <>
            <div className="position-relative">
              {/* shape Hero */}
              <section className="section section-lg section-shaped pb-250">
                <div className="shape shape-style-1 shape-default">
                  <div className="layer">

                  </div>
                </div>
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col lg="8">
                        <p className="lead text-white">
                        Es un servicio destinado a jóvenes adultos con discapacidad intelectual, que tiene como  objetivo mejorar la calidad de vida de los usuarios y sus familias; favoreciendo su proyecto de vida personal y su inclusión social, mediante diferentes propuestas  ocupacionales, artísticas, deportivas, recreativas y terapéuticas.
                            
                        </p>
                        <div className="btn-wrapper">
                          <Button
                            className="btn-icon mb-3 mb-sm-0 ml-1"
                            color="success" type="button"
                            href="#cotizatuseguro"
                          >
                            <span className="btn-inner--text">
                              Conocenos
                            </span>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                  >
                    <polygon
                      className="fill-white"
                      points="2560 0 2560 100 0 100"
                    />
                  </svg>
                </div>
              </section>
              {/* 1st Hero Variation */}
            </div>
            <section className="section section-lg pt-lg-0 mt--200" id="coberturas">
            </section>
            <section className="section bg-gradient-secondary">
            <Container className="mb-6">
              <Row className="row-grid align-items-center">
                <Col lg="12">
                  <div className="pl-4 align-component-enter">
                      <h4 className="display-3">Nuestros programas</h4>
                      <p className="align-component-enter">
                        Nuestra propuesta se encuentra organizada en torno a cuatro programas.
                      </p>
                  </div>
                </Col>
                <Row className="row-grid mt-4">
                  <Col className="order-lg-1" lg="3">
                    <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/theme/img-1-1200x1000.jpg")}
                          top
                        />
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Autodeterminación
                          </h6>
                          <p className="description mt-3">
                            Implica la combinación de habilidades, conocimiento 
                              y creencias que capacitan a una persona para comprometerse en una conducta autónoma, 
                              autorregulada y dirigida a metas. 
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/programas#autodeterminacion"
                            onClick={(e) => e.preventDefault()}
                          >
                            Leer más...
                          </Button>
                        </CardBody>
                      </Card>
                  </Col>
                  <Col className="order-lg-1" lg="3">
                    <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/theme/img-1-1200x1000.jpg")}
                          top
                        />
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Transición a la vida adulta
                          </h6>
                          <p className="description mt-3">
                              La transición a la vida adulta es un proceso multidimensional que incluye la necesidad de trabajar competencias 
                              y habilidades relacionadas con la autonomía, el cuidado personal, el conocimiento del entorno, 
                              y habilidades sociales. 
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/programas#transicion-vida-adulta"
                            onClick={(e) => e.preventDefault()}
                          >
                            Leer más...
                          </Button>
                        </CardBody>
                      </Card>
                  </Col>
                  <Col className="order-lg-1" lg="3">
                    <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/theme/img-1-1200x1000.jpg")}
                          top
                        />
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                          Formación laboral
                          </h6>
                          <p className="description mt-3">
                          Este proyecto propone dar oportunidades de formación laboral 
                            a los usuarios del Centro de Día a través de la puesta en marcha de talleres productivos de autogestión. 
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/programas#formacion-laboral"
                            onClick={(e) => e.preventDefault()}
                          >
                            Leer más...
                          </Button>
                        </CardBody>
                      </Card>
                  </Col>
                  <Col className="order-lg-1" lg="3">
                    <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/theme/img-1-1200x1000.jpg")}
                          top
                        />
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                          Deportivo, cultural y de expresión artística
                          </h6>
                          <p className="description mt-3">
                            Se propone promover, fomentar y propiciar diferentes espacios tanto desde 
                            el Centro de Día como en las propuestas de espacios externos donde se trabajen actividades artísticas,
                            culturales y deportivas para y con los usuarios...
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/programas#transicion-laboral"
                            onClick={(e) => e.preventDefault()}
                          >
                            Leer más...
                          </Button>
                        </CardBody>
                      </Card>
                  </Col>
                </Row>
              </Row>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-lightblue">
              <Container>
                <Row>
                  <Col lg="12">
                    <div className="pl-4 align-component-enter">
                        <h4 className="display-3 text-white">Nuestros Servicios</h4>
                    </div>
                  </Col>
                </Row>
                <Row className="row-grid align-items-center">
                  <Col className="order-md-2" md="6">
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={require("assets/img/servicios.jpg")}
                    />
                  </Col>
                  <Col className="order-md-1 mt-5" md="6">
                    <div className="pr-md-5">
                      <ul className="list-unstyled mt-2 ml-4">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="default"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <p className="mb-0 text-white">
                                Coordinación de Admisión a cargo de la Institución. Entrevistas de Admisión.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="default"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <p className="mb-0 text-white">Se realiza una planificación centrada en la persona. Trabajo de seguimiento por parte de un equipo interdisciplinario</p>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="default"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <p className="mb-0 text-white">
                                Talleres a cargo de profesionales y orientadores.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="default"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <p className="mb-0 text-white">
                                Servicio de Desayuno, Almuerzo y Merienda.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="default"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <p className="mb-0 text-white">
                                Servicio de transporte.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="default"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <p className="mb-0 text-white">
                                Servicio de Emergencias Médicas UDEC
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="default"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <p className="mb-0 text-white">
                                Servicio de  WIFI
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="default"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <p className="mb-0 text-white">
                                Seguridad Privada SP. Cámaras de seguridad en el interior de las instalaciones.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <div id="contacto">
            <ContactoLanding />
          </div>
        </>
      );
}


export default Home;