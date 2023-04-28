
import React, { useState, useCallback } from 'react';
import classnames from "classnames";
import { Card, CardBody, Col, TabContent, TabPane, Container, Nav, NavItem, NavLink, Row } from 'reactstrap';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { photosLugar } from './photos-lugar';

function NuestroEspacio(props){ 
    const [state, setState] = useState({tabs: 1});
    // const state = {
    //     tabs: 1
    //   };
    const toggleNavs = (e, state, index) => {
        e.preventDefault();
        setState({
          [state]: index
        });
      };
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <>
            <section className="section section-lg pt-6 bg-secondary mt-5">
                <Container className="mb-6">
                    <Row className="row-grid align-items-center">
                        <Col className lg="12">
                        <div className="pl-4 align-component-enter">
                            <h4 className="display-3">Galería de Fotos</h4>
                        </div>
                        </Col>
                    </Row>
                    <Row style={{ 'justify-content': "center" }}>
                    <div className="nav-wrapper">
                        <Nav
                            className="nav-fill flex-column flex-md-row"
                            id="tabs-icons-text"
                            pills
                            role="tablist"
                        >
                            <NavItem>
                            <NavLink
                                aria-selected={state.tabs === 1}
                                className={classnames("mb-sm-3 mb-md-0", {
                                active: state.tabs === 1
                                })}
                                onClick={e => toggleNavs(e, "tabs", 1)}
                                href="#pablo"
                                role="tab"
                            >
                                <i className="ni ni-shop mr-2" />
                                Nuestro Lugar
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink
                                aria-selected={state.tabs === 2}
                                className={classnames("mb-sm-3 mb-md-0", {
                                active: state.tabs === 2
                                })}
                                onClick={e => toggleNavs(e, "tabs", 2)}
                                href="#pablo"
                                role="tab"
                            >
                                {/* <i className="ni ni-bell-55 mr-2" /> */}
                                <i class="fa fa-users mr-2" aria-hidden="true"></i>
                                Actividades
                            </NavLink>
                            </NavItem>
                        </Nav>
                        </div>
                        <Card className="shadow">
                        <CardBody>
                            <TabContent activeTab={"tabs" + state.tabs}>
                            <TabPane tabId="tabs1">
                                <Gallery photos={photosLugar} onClick={openLightbox} />
                                <ModalGateway>
                                    {viewerIsOpen ? (
                                    <Modal onClose={closeLightbox}>
                                        <Carousel
                                        currentIndex={currentImage}
                                        views={photosLugar.map(x => ({
                                            ...x,
                                            src: x.src,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                        />
                                    </Modal>
                                    ) : null}
                                </ModalGateway>
                            </TabPane>
                            <TabPane tabId="tabs2">
                                <p className="description">
                                Cosby sweater eu banh mi, qui irure terry richardson ex
                                squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                                quis cardigan american apparel, butcher voluptate nisi qui.
                                </p>
                            </TabPane>
                            </TabContent>
                        </CardBody>
                        </Card>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default NuestroEspacio;