import { Button, Form, Message, Segment } from 'semantic-ui-react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState, useEffect } from 'react'
import EmployerService from '../services/employerService';
import JobPositionService from '../services/jobPositionService';
import CityService from '../services/cityService';
import WayOfWorkingService from '../services/wayOfWorkingService';
import TypeOfWorkingService from '../services/typeOfWorkingService';


export default function PostingAdvertisement() {

    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [waysOfWorking, setWaysOfWorking] = useState([])
    const [typesOfWorking, setTypesOfWorking] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then((result) => setCities(result.data.data));

        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data));

        let wayOfWorkingService = new WayOfWorkingService();
        wayOfWorkingService.getWaysOfWorking().then(result => setWaysOfWorking(result.data.data));
        
        let typeOfWorkingService = new TypeOfWorkingService();
        typeOfWorkingService.getTypesOfWorking().then(result => setTypesOfWorking(result.data.data));
    }, []);

    return (
        <div>
            <Segment raised color='orange'>
            <Formik
                initialValues={{
                    applicationDeadline: '',
                    cityId: '',
                    employerId: '',
                    jobDescription: '',
                    jobPositionId: '',
                    minSalary: '',
                    maxSalary: '',
                    openPositionCount: '',
                    typeOfWorkingId: '',
                    wayOfWorkingId: '',
                    // name: '',
                    // email: '',
                    // agree: false,
                    // favoriteColor: '',
                }}
                validationSchema={Yup.object({
                    jobDescription: Yup.string().required('Açıklama boş bırakılamaz'),
                    openPositionCount: Yup.number().required('Açık pozisyon girilmelidir'),
                    applicationDeadline: Yup.date().required('İlan bitiş tarihi boş bırakılamaz'),
                    minSalary: Yup.number().required('Minimun maaş boş bırakılamaz'),
                    maxSalary: Yup.number().required('Maksimum maaş boş olamaz veya minumum maaştan fazla girilmelidir'),
                    employerId: Yup.number().required().default(3),
                    cityId: Yup.number().required('İş ilanınız için geçerli bir şehir seçmelisiniz!'),
                    jobPositionId: Yup.number().required('İş ilanınız için geçerli bir pozisyon seçmelisiniz'),
                    typeOfWorkingId: Yup.number().required('İş ilanınız için geçerli iş türü seçmelisiniz'),
                    wayOfWorkingId: Yup.number().required('İş ilanınız için geçerli çalışma zamanı seçmelisiniz'),


                    // name: Yup.string().required('İsim boş bırakılamaz'),
                    // email: Yup.string().email().required('Email boş bırakılamaz'),
                    // agree: Yup.bool().oneOf([true], 'Koşulları kabul etmelisiniz'),
                    // favoriteColor: Yup.string()
                    //   .required('Hadi ama herkesin sevdiği bir renk vardır!')
                    //   .oneOf(['red', 'blue', 'green']),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(values);
                    let employerService = new EmployerService();
                    employerService.add(values).then();

                    setTimeout(() => {
                        setSubmitting(false);
                        resetForm();
                    }, 2000);
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleSubmit,
                    handleReset,
                    handleChange,
                }) => (
                    <Form size='large' onSubmit={handleSubmit}>
                      <Segment vertical>
                      <h1>İş İlanı Gir</h1>
                      </Segment>
                        <Form.Group unstackable widths='equal' className="is-tanimi">
                            <Form.Input label='İş Tanımı' >
                                <label htmlFor="jobDescription" />
                                <input
                                    id="jobDescription"
                                    type="text"
                                    placeholder="İş tanımı giriniz"
                                    // className="input"
                                    value={values.jobDescription}
                                    onChange={handleChange}
                                />
                                {errors.jobDescription && touched.jobDescription && (
                                    <div>{errors.jobDescription}</div>
                                )}
                            </Form.Input>
                        </Form.Group>
                        <Form.Group unstackable widths={4} className="is-tanimi">
                            <Form.Input label='Açık Pozisyon'  >
                                <label htmlFor="openPositionCount" />
                                <input
                                    id="openPositionCount"
                                    type="number"
                                    placeholder="Örneğin; 10"
                                    // className="input"
                                    value={values.openPositionCount}
                                    onChange={handleChange}
                                />
                                {errors.openPositionCount && touched.openPositionCount && (
                                    <div>{errors.openPositionCount}</div>
                                )}
                            </Form.Input>
                            <Form.Input label='Minimum Maaş'>
                                <label htmlFor="minSalary" />
                                <input
                                    id="minSalary"
                                    type="number"
                                    placeholder="Minimum maaş değeri giriniz"
                                    value={values.minSalary}
                                    onChange={handleChange}
                                />
                                {errors.minSalary && touched.minSalary && (
                                    <div>{errors.minSalary}</div>
                                )}
                            </Form.Input>
                            <Form.Input label='Maksimum Maaş'>
                                <label htmlFor="maxSalary" />
                                <input
                                    id="maxSalary"
                                    type="number"
                                    placeholder="Maksisimum maaşı giriniz"
                                    className="input"
                                    value={values.maxSalary}
                                    onChange={handleChange}
                                />
                                {errors.maxSalary && touched.maxSalary && (
                                    <div>{errors.maxSalary}</div>
                                )}
                            </Form.Input>
                            <Form.Input label='Bitiş tarihi'>
                                <label htmlFor="applicationDeadline" />
                                <input
                                    id="applicationDeadline"
                                    type="date"
                                    placeholder="Bitiş tarihi giriniz"
                                    value={values.applicationDeadline}
                                    onChange={handleChange}
                                />
                                {errors.applicationDeadline && touched.applicationDeadline && (
                                    <div>{errors.applicationDeadline}</div>
                                )}
                            </Form.Input>
                        </Form.Group >
                        <Form.Group className="city" >
                            <Form.Input label='Şehir'>
                                <label htmlFor="cityId" />
                                <select id="cityId" name="cityId" value={values.cityId} onChange={handleChange}>
                                    <option value=""> Şehir Seç</option>
                                    {cities.map(city => (
                                        <option key={city.cityId.toString()} value={city.cityId} label={city.cityName}></option>
                                    ))}
                                </select>
                                {
                                    errors.cityId && touched.cityId &&
                                    <Message color='red'>{errors.cityId}</Message>
                                }
                            </Form.Input>
                            <Form.Input label='Çalışma Türü'>
                                <label htmlFor="typeOfWorkingId" />
                                <select id="typeOfWorkingId" name="typeOfWorkingId" value={values.typeOfWorkingId} onChange={handleChange}>
                                    <option value=""> Çalışma Türünü Seç</option>
                                    {typesOfWorking.map(typeOfWorking => (
                                        <option key={typeOfWorking.id.toString()} value={typeOfWorking.id} label={typeOfWorking.name}></option>
                                    ))}
                                </select>
                                {
                                    errors.typeOfWorkingId && touched.typeOfWorkingId &&
                                    <Message color='red'>{errors.typeOfWorkingId}</Message>
                                }
                            </Form.Input>
                            <Form.Input label='Çalışma Şekli'>
                                <label htmlFor="wayOfWorkingId" />
                                <select id="wayOfWorkingId" name="wayOfWorkingId" value={values.wayOfWorkingId} onChange={handleChange}>
                                    <option value=""> Çalışma Türünü Seç</option>
                                    {waysOfWorking.map(wayOfWorking => (
                                        <option key={wayOfWorking.id.toString()} value={wayOfWorking.id} label={wayOfWorking.name}></option>
                                    ))}
                                </select>
                                {
                                    errors.wayOfWorkingId && touched.wayOfWorkingId &&
                                    <Message color='red'>{errors.wayOfWorkingId}</Message>
                                }
                            </Form.Input>
                            <Form.Field>
                                <label htmlFor="jobPositionId">İş pozisyonu</label>
                                <select id="jobPositionId" name="jobPositionId" value={values.jobPositionId} onChange={handleChange}>
                                    <option value=""> İş pozisyonu seç</option>
                                    {jobPositions.map(jobPosition => (
                                        <option key={jobPosition.id.toString()} value={jobPosition.id} label={jobPosition.jobPositionName}></option>
                                    ))}
                                </select>
                                {
                                    errors.jobPositionId && touched.jobPositionId &&
                                    <Message color='red'>{errors.jobPositionId}</Message>
                                }
                            </Form.Field>
                            </Form.Group>
                            <Form.Group className="city">
                            <Form.Input label='Geçici Employer Id'  >
                                <label htmlFor="employerId" />
                                <input
                                    id="employerId"
                                    type="number"
                                    placeholder="Örneğin; 10"
                                    // className="input"
                                    value={values.employerId}
                                    onChange={handleChange}
                                />
                                {errors.employerId && touched.employerId && (
                                    <div>{errors.employerId}</div>
                                )}
                            </Form.Input>
                        </Form.Group>
                        {/* <label htmlFor="favoriteColor" className="topMargin">
                                Favori Renk
                            </label>
                            <select
                                id="favoriteColor"
                                value={values.favoriteColor}
                                onChange={handleChange}
                                style={{
                                    marginTop: 10,
                                    width: '150px',
                                    padding: '10px 15px',
                                    outline: 'none',
                                }}
                            >
                                <option value="" label="Renk seç.." />
                                <option value="red" label="Kırmızı" />
                                <option value="blue" label="Mavi" />
                                <option value="green" label="Yeşil" />
                            </select>

                            {errors.favoriteColor && touched.favoriteColor && (
                                <div className="input-feedback">{errors.favoriteColor}</div>
                            )}

                            <div>
                                <input
                                    id="agree"
                                    type="checkbox"
                                    value={values.agree}
                                    onChange={handleChange}
                                />
                                <label htmlFor="agree" className="checkbox-label">
                                    Sözleşmeyi okudum kabul ediyorum.
                                </label>
                            </div>
                            {errors.agree && (
                                <div className="input-feedback">{errors.agree}</div>
                            )} */}
                        <Button className="is-tanimi" type='submit' color='green' disabled={!dirty || isSubmitting} >Gönder</Button>
                        {/* <button type="submit" disabled={!dirty || isSubmitting}>
                                Kaydol
                            </button> */}
                    </Form>

                )}
            </Formik>
            </Segment>
        </div>
    )
}
