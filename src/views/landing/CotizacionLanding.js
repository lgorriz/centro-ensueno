import cotizacionService from 'backend/CotizacionService';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import Select from 'react-select';
import { Col, Container, FormGroup, Input, Row, Spinner, UncontrolledAlert } from 'reactstrap';
import * as Yup from 'yup';



function CotizacionLanding(){  
  const [typeCotizacion, setTypeCotizacion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

    const options = [
        { value: 'Accidentes Personales', label: 'Accidentes Personales' },
        { value: 'Automotores ', label: 'Automotores' },
        { value: 'Bicicletas', label: 'Bicicletas' },
        { value: 'Caución', label: 'Caución' },
        { value: 'Combinado Familiar', label: 'Combinado Familiar' },
        { value: 'Embarcaciones de Placer', label: 'Embarcaciones de Placer' },
        { value: 'Flota de Vehículos o Vida Puro', label: 'Flota de Vehículos o Vida Puro' },
        { value: 'Incendio', label: 'Incendio' },
        { value: 'Integral de Comercio', label: 'Integral de Comercio' },
        { value: 'Integral de Consorcio ', label: 'Integral de Consorcio' },
        { value: 'Ley Contrato de Trabajo', label: 'Ley Contrato de Trabajo' },
        { value: 'Motos', label: 'Motos' },
        { value: 'RC Patronal', label: 'RC Patronal' },
        { value: 'Responsabilidad Civil', label: 'Responsabilidad Civil' },
        { value: 'Riesgos del trabajo  ART', label: 'Riesgos del trabajo  ART' },
        { value: 'Robo', label: 'Robo' },
        { value: 'Incendio', label: 'Incendio' },
        { value: 'Seguro Ambiental Obligatorio', label: 'Seguro Ambiental Obligatorio' },
        { value: 'Seguro Técnico Equipo Contratista', label: 'Seguro Técnico Equipo Contratista' },
        { value: 'Seguro Técnico Equipo Electrónico', label: 'Seguro Técnico Equipo Electrónico' },
        { value: 'Seguro Técnico Maquinaria Agrícola', label: 'Seguro Técnico Maquinaria Agrícola' },
        { value: 'Seguro Técnico Rotura de Maquinaria', label: 'Seguro Técnico Rotura de Maquinaria' },
        { value: 'Seguro Todo Riesgo Construcción', label: 'Seguro Todo Riesgo Construcción' },
        { value: 'Todo Riesgo Operativo', label: 'Todo Riesgo Operativo' },
        { value: 'Transporte', label: 'Transporte' },
        { value: 'Vida', label: 'Vida' },
        { value: 'Vida Obligatorio', label: 'Vida Obligatorio' },
      ];

    const cotizacionForm = useFormik({
        initialValues: {
          razonSocial: '',
          cuit: '',
          email: '',
          nombre: '',
          telefono: '',
          rubroActividad: '',
          tipoCotizacion: '',
          medioContacto: ''
        },
        validationSchema: Yup.object({
            razonSocial: Yup.string().required('Requerido'),
            cuit: Yup.string().required('Requerido'),
            email: Yup.string().email('Dirección de e-mail inválida').required('Requerido'),
            nombre: Yup.string()
              .required('Requerido'),
            telefono: Yup.string()
              .required('Requerido'),
            rubroActividad: Yup.string().required('Requerido'),
            tipoCotizacion: Yup.string().required('Requerido'),
          }),
        onSubmit: values => {            
            setIsLoading(true)
            values.medioContacto = typeCotizacion;
            cotizacionService(values).then((response) => {
                const numeroCotizacion = response.data.id;
                setIsLoading(false)
                setIsSuccess(true)
                if(typeCotizacion === 'Whatsapp'){
                  window.open('https://api.whatsapp.com/send?phone=5491154998787&text=*Pedido%20de%20Cotización%20'+numeroCotizacion+'*%0ANombre:%20'+values.nombre+'%0ARazon%20Social:%20'+values.razonSocial
                  +'%0ACuit:%20'+values.cuit+'%0ARubro%20o%20Actividad:%20'+values.rubroActividad+'%0ATipo%20Cotización:%20'+values.tipoCotizacion+
                  '%0ATeléfono:%20'+values.telefono+'%0AEmail:%20'+values.email, '_blank');
                }
            }).catch((err) => {
              setIsLoading(false)
              setIsError(true)
            });
            cotizacionForm.resetForm();
        },
      });


return (
    <>
        <section className="section bg-gradient-warning bg-gradient-custom-home" id="cotizatuseguro">
              <Container className="pb-100">
                <Row className="text-center justify-content-center">
                  <Col lg="10">
                    <h2 className="display-3 text-white">Cotizá tu seguro</h2>
                    <p className="lead text-white">
                      Completa tus datos y te enviaremos la cotización solicitada por Whatsapp o por e-mail
                    </p>
                  </Col>
                </Row>
                <Row className="text-center justify-content-center">
                  <Col lg="12">

                    <div className="shadow card">
                      <div className="p-lg-4 card-body"> 
                        <h2 className="mb-5">Solicitá la cotización de tu seguro</h2>
                        { isLoading ?                         
                          <Spinner>
                            <span className=" sr-only">Loading...</span>
                          </Spinner>  
                        : null}
                        { isSuccess ?
                            <UncontrolledAlert color="success" fade={false}>
                                <span className="alert-inner--text">
                                  <strong>Solicitud de cotización enviada!</strong> En breve nos contactaremos con usted
                                </span>
                            </UncontrolledAlert>
                         : null}

                          { isError ?
                            <UncontrolledAlert color="danger" fade={false}>
                                <span className="alert-inner--text">
                                  <strong>Error al enviar la solicitud de cotización!</strong> Por favor intente más tarde
                                </span>
                            </UncontrolledAlert>
                         : null}

                        <form onSubmit={cotizacionForm.handleSubmit}>
                          <Row>
                            <Col md="6">
                              <FormGroup>
                                <Input
                                  id="exampleFormControlInput3"
                                  placeholder="Razón Social"
                                  type="text"
                                  name="razonSocial"
                                  value={cotizacionForm.values.razonSocial}
                                  onChange={cotizacionForm.handleChange}
                                />
                                  {cotizacionForm.touched.razonSocial && cotizacionForm.errors.razonSocial ? (
                                      <div className="text-danger text-left">
                                          <small>{cotizacionForm.errors.razonSocial}</small>
                                      </div>
                                  ) : null}                                
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup>
                                <Input
                                  id="exampleFormControlInput4"
                                  placeholder="CUIT"
                                  type="text"
                                  name="cuit"
                                  value={cotizacionForm.values.cuit}
                                  onChange={cotizacionForm.handleChange}
                                />
                                {cotizacionForm.touched.cuit && cotizacionForm.errors.cuit ? (
                                      <div className="text-danger text-left">
                                          <small>{cotizacionForm.errors.cuit}</small>
                                      </div>
                                  ) : null}        
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6">
                              <FormGroup>
                                <Input
                                  id="exampleFormControlInput5"
                                  placeholder="E-mail"
                                  type="email"
                                  name="email"
                                  value={cotizacionForm.values.email}
                                  onChange={cotizacionForm.handleChange}
                                />
                                {cotizacionForm.touched.email && cotizacionForm.errors.email ? (
                                      <div className="text-danger text-left">
                                          <small>{cotizacionForm.errors.email}</small>
                                      </div>
                                  ) : null}      
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup>
                                <Input
                                  id="exampleFormControlInput6"
                                  placeholder="Telefono"
                                  type="text"
                                  name="telefono"
                                  value={cotizacionForm.values.telefono}
                                  onChange={cotizacionForm.handleChange}
                                />
                                {cotizacionForm.touched.telefono && cotizacionForm.errors.telefono ? (
                                      <div className="text-danger text-left">
                                          <small>{cotizacionForm.errors.telefono}</small>
                                      </div>
                                  ) : null}      
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6">
                              <FormGroup>
                                <Input
                                  placeholder="Nombre"
                                  type="text"
                                  name="nombre"
                                  value={cotizacionForm.values.nombre}
                                  onChange={cotizacionForm.handleChange}
                                />
                                {cotizacionForm.touched.nombre && cotizacionForm.errors.nombre ? (
                                      <div className="text-danger text-left">
                                          <small>{cotizacionForm.errors.nombre}</small>
                                      </div>
                                  ) : null}      
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup>
                                <Input
                                  placeholder="Rubro o actividad de la empresa"
                                  type="text"
                                  name="rubroActividad"
                                  value={cotizacionForm.values.rubroActividad}
                                  onChange={cotizacionForm.handleChange}
                                />
                                {cotizacionForm.touched.rubroActividad && cotizacionForm.errors.rubroActividad ? (
                                      <div className="text-danger text-left">
                                          <small>{cotizacionForm.errors.rubroActividad}</small>
                                      </div>
                                  ) : null}      
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="6" className="buttons-cotizacion">
                                <FormGroup>
                                  <Select 
                                    name="tipoCotizacion"
                                    type="select"
                                    placeholder="Seleccioná el tipo de cotización" 
                                    options={options} 
                                    isSearchable={true}
                                    value={cotizacionForm.values.tipoCotizacion}
                                    onChange={(selectedOption) =>
                                      cotizacionForm.setFieldValue(
                                        'tipoCotizacion',
                                        selectedOption.value,
                                       )
                                     }/>
                                    {cotizacionForm.touched.tipoCotizacion && cotizacionForm.errors.tipoCotizacion ? (
                                      <div className="text-danger">
                                          <small>{cotizacionForm.errors.tipoCotizacion}</small>
                                      </div>
                                  ) : null}      
                                </FormGroup>
                              </Col>
                          </Row>
                          <Row className="pt-3">
                            <Col md="12" className="buttons-cotizacion">
                              <button type="submit" className="btn btn-success" onClick={() => setTypeCotizacion('Whatsapp')}> 
                                <i className="ni ni-chat-round" /> Solicitalo por Whatsapp
                              </button>
                              <button type="submit" className="btn btn-primary" onClick={() => setTypeCotizacion('Mail')}> 
                                <i className="ni ni-email-83" /> Solicitalo por Email
                              </button>
                            </Col>
                          </Row>
                        </form>
                      </div>
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
    </>
);
}


export default CotizacionLanding;