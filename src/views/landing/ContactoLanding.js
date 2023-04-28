import classnames from 'classnames';
import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
    Spinner, 
    UncontrolledAlert
} from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import contactoService from 'backend/ContactoService';


function ContactoLanding(){  

    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const contactoForm = useFormik({
        initialValues: {
          nombre: '',
          email: '',
          mensaje: '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
              .required('Requerido'),
            email: Yup.string().email('Dirección de e-mail inválida').required('Requerido'),
            mensaje: Yup.string()
              .min(15, 'Debe tener más de 15 caracteres')
              .required('Requerido'),
          }),
        onSubmit: values => {
            setIsLoading(true)
            contactoService(values).then((response) => {
                setIsLoading(false)
                setIsSuccess(true)
                console.log(response);
            }).catch((err) => {
                setIsLoading(false)
                setIsError(true)
            });
            contactoForm.resetForm();
        },
      });

    return (
        <>
            <section className="section section-lg section-contact-us">
                <Container>
                    <Row className="justify-content-center">
                    <Col lg="8">
                        <Card className="bg-gradient-secondary shadow">
                            <CardBody className="p-lg-5">
                                <h4 className="mb-1">Contactate con nosotros</h4>
                                <p className="mt-0">
                                    Completa el formulario o envianos un mail a contacto@centrodediaensuenio.com.ar
                                </p>
                                { isLoading ?                         
                                <Spinner>
                                    <span className=" sr-only">Loading...</span>
                                </Spinner>  
                                : null}

                                { isSuccess ?
                                    <UncontrolledAlert color="success" fade={false}>
                                        <span className="alert-inner--text">
                                            <strong>Su consulta ha sido enviada!</strong> En breve nos contactaremos con usted
                                        </span>
                                    </UncontrolledAlert>
                                : null}

                                { isError ?
                                    <UncontrolledAlert color="danger" fade={false}>
                                        <span className="alert-inner--text">
                                            <strong>Error al enviar su consulta!</strong> Por favor intente más tarde
                                        </span>
                                    </UncontrolledAlert>
                                : null}
                                <form onSubmit={contactoForm.handleSubmit}>
                                    <FormGroup
                                    className={classnames("mt-5", {
                                        focused: nameFocused
                                    })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Nombre"
                                                type="text"
                                                name="nombre"
                                                value={contactoForm.values.nombre}
                                                onFocus={e => setNameFocused(true)}
                                                onBlur={e => setNameFocused(true)}
                                                onChange={contactoForm.handleChange}
                                            />

                                        </InputGroup>
                                        {contactoForm.touched.nombre && contactoForm.errors.nombre ? (
                                                <div className="text-danger">
                                                    <small>{contactoForm.errors.nombre}</small>
                                                </div>
                                            ) : null}
                                    </FormGroup>
                                    <FormGroup
                                    className={classnames({
                                        focused: emailFocused
                                    })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="E-mail"
                                                type="email"
                                                name="email"
                                                value={contactoForm.values.email}
                                                onFocus={e => setEmailFocused(true)}
                                                onBlur={e => setEmailFocused(false)}
                                                onChange={contactoForm.handleChange}
                                            />

                                        </InputGroup>
                                        {contactoForm.touched.email && contactoForm.errors.email ? (
                                                <div className="text-danger">
                                                    <small>{contactoForm.errors.email}</small>
                                                </div>
                                            ) : null}
                                    </FormGroup>
                                    <FormGroup className="mb-4">
                                        <Input
                                            className="form-control-alternative"
                                            cols="80"
                                            name="mensaje"
                                            placeholder="Escriba su mensaje..."
                                            rows="4"
                                            type="textarea"
                                            onChange={contactoForm.handleChange}
                                            value={contactoForm.values.mensaje}
                                        />
                                        {contactoForm.touched.mensaje && contactoForm.errors.mensaje ? (
                                            <div className="text-danger">
                                                <small>{contactoForm.errors.mensaje}</small>
                                            </div>
                                        ) : null}

                                    </FormGroup>
                                    <div>
                                        <Button
                                            block
                                            className="btn-round"
                                            color="default"
                                            size="lg"
                                            type="submit"
                                        >
                                            Envíe su consulta
                                        </Button>
                                    </div>
                                </form>
                            </CardBody>
                        
                        </Card>
                    </Col>
                    </Row>
                </Container>
                </section>
        </>);
 }


export default ContactoLanding;