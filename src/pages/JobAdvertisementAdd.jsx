import React, { useEffect, useState } from 'react'
import JobAdvertisementService from "../services/JobAdvertisementService";
import JobPositionService from "../services/JobPositionService";
import { Button, Dropdown, Form, Label, TextArea } from "semantic-ui-react";
import { useFormik } from "formik";
import moment from "moment";

export default function JobAdvertisementAdd(){
    let jobAdvertisementService = new JobAdvertisementService()
    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))
    }, [])

    const jobPositionSelect = jobPositions.map(position => ({
        key: position.id, value: position.id, text: position.title
    }))

    const workType = [
        { key: 'Yerinde', value: 'Yerinde', text: 'Yerinde' },
        { key: 'Uzaktan', value: 'Uzaktan', text: 'Uzaktan' }
    ]

    const workTime = [
        { key: 'Yarı Zamanlı', value: 'Yarı Zamanlı', text: 'Yarı Zamanlı' },
        { key: 'Tam Zamanlı', value: 'Tam Zamanlı', text: 'Tam Zamanlı' },
        { key: 'Sözleşmeli', value: 'Sözleşmeli', text: 'Sözleşmeli' },
        { key: 'Stajyer', value: 'Stajyer', text: 'Stajyer' },
        { key: 'Geçici', value: 'Geçici', text: 'Geçici' }
    ]

    const formik = useFormik({
        initialValues: {
            employerId: "7",
            jobPositionId: "",
            jobDescription: "",
            city: "",
            minSalary: "",
            maxSalary: "",
            openPosition: "",
            deadline: "",
            isActive: "",
            workType: "",
            workTime: "",
            isConfirmed: "",
            releaseDate: ""
        },
        onSubmit: values => {
            console.log(values)
            let jobAdvertisement = {
                employer: { id: values.employerId },
                jobPosition: { id: values.jobPositionId },
                jobDescription: values.jobDescription,
                city: values.city,
                minSalary: values.minSalary,
                maxSalary: values.maxSalary,
                openPosition: values.openPosition,
                deadline: values.deadline,
                isActive: values.isActive,
                workType: values.workType,
                workTime: values.workTime,
                isConfirmed: values.isConfirmed,
                releaseDate: moment().format("YYYY-MM-DD")
            };
            console.log(jobAdvertisement)
            jobAdvertisementService.add(jobAdvertisement).then(result => console.log(result.data.message))
        },
    });

    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Field>
                        <Dropdown fluid selection placeholder="Pozisyon" options={jobPositionSelect} value={formik.values.jobPositionId}
                            id="jobPositionId" onChange={(event, data) => formik.setFieldValue("jobPositionId", data.value)} />
                        {formik.touched.jobPositionId && formik.errors.jobPositionId ? (
                            <Label color="red" pointing>{formik.errors.jobPositionId}</Label>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <Form.Input fluid labelPosition="left" placeholder="Şehir"
                            id="city" value={formik.values.city} onChange={formik.handleChange} />
                        {formik.touched.city && formik.errors.city ? (
                            <Label color="red" pointing>{formik.errors.city}</Label>
                        ) : null}
                    </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Field>
                        <Dropdown fluid selection placeholder="İş Tipi" options={workType} value={formik.values.workType}
                            id="workType" onChange={(event, data) => formik.setFieldValue("workType", data.value)} />
                        {formik.touched.workType && formik.errors.workType ? (
                            <Label color="red" pointing>{formik.errors.workType}</Label>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <Dropdown fluid selection placeholder="İş Zamanı" options={workTime} value={formik.values.workTime}
                            id="workTime" onChange={(event, data) => formik.setFieldValue("workTime", data.value)} />
                        {formik.touched.workTime && formik.errors.workTime ? (
                            <Label color="red" pointing>{formik.errors.workTime}</Label>
                        ) : null}
                    </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Field>
                        <Form.Input fluid labelPosition="left" placeholder="Min Maaş"
                            id="minSalary" value={formik.values.minSalary} onChange={formik.handleChange} />
                        {formik.touched.minSalary && formik.errors.minSalary ? (
                            <Label color="red" pointing>{formik.errors.minSalary}</Label>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <Form.Input fluid labelPosition="left" placeholder="Max Maaş"
                            id="maxSalary" value={formik.values.maxSalary} onChange={formik.handleChange} />
                        {formik.touched.maxSalary && formik.errors.maxSalary ? (
                            <Label color="red" pointing>{formik.errors.maxSalary}</Label>
                        ) : null}
                    </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Field>
                        <Form.Input fluid labelPosition="left" placeholder="Açık Pozisyon"
                            id="openPosition" value={formik.values.openPosition} onChange={formik.handleChange} />
                        {formik.touched.openPosition && formik.errors.openPosition ? (
                            <Label color="red" pointing>{formik.errors.openPosition}</Label>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <Form.Input fluid labelPosition="left" placeholder="Son Başvuru Tarihi"
                            id="deadline" value={formik.values.deadline} onChange={formik.handleChange} />
                        {formik.touched.deadline && formik.errors.deadline ? (
                            <Label color="red" pointing>{formik.errors.deadline}</Label>
                        ) : null}
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <TextArea
                        placeholder="İş Açıklaması"
                        id="jobDescription"
                        value={formik.values.jobDescription}
                        onChange={formik.handleChange}
                        style={{ minHeight: 100, maxHeight: 100 }}
                    />
                    {formik.touched.jobDescription && formik.errors.jobDescription ? (
                        <Label color="red" pointing>
                            {formik.errors.jobDescription}
                        </Label>
                    ) : null}
                </Form.Field>
                <Button type="submit">Gönder</Button>
            </Form>
        </div>
    )

}