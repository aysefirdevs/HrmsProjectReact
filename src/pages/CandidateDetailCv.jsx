import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { List } from 'semantic-ui-react'
import CurriculumVitaeService from '../services/CurriculumVitaeService'
import SchoolService from '../services/SchoolService'
import ExperienceService from '../services/ExperienceService'
import TechnologyService from '../services/TechnologyService'
import ForeignLanguageService from '../services/ForeignLanguageService'

export default function CandidateDetailCv() {
    let{id} = useParams()

    const [curriculumVitae, setCurriculumVitae] = useState({}) //bir obje döndürdüğünü unutma

    useEffect(() =>{  
        let curriculumVitaeService = new CurriculumVitaeService()
        curriculumVitaeService.getByCandidate_id(id).then(result => setCurriculumVitae(result.data.data))
    })
    
    let curriculumVitaeId= curriculumVitae.id  //cvnin idsini bu idye atıyorum school,experience,teknoloji ve languagede kullanmak için

    const [schools, setSchools] = useState([])
    useEffect(() =>{  
        let schoolService = new SchoolService()
        schoolService.getByCurriculumVitae_id(curriculumVitaeId).then(result1 => setSchools(result1.data.data))
    })

    const [experiences, setExperiences] = useState([])
    useEffect(() => {
        let experienceService = new ExperienceService()
        experienceService.getByCurriculumVitae_id(curriculumVitaeId).then(result2 => setExperiences(result2.data.data))
    })

    const [technologies, setTechnologies] = useState([])
    useEffect(() => {
        let technologyService = new TechnologyService()
        technologyService.getByCurriculumVitae_id(curriculumVitaeId).then(result3 => setTechnologies(result3.data.data))
    })

    const [foreignLanguages, setForeignLanguages] = useState([])
    useEffect(() => {
        let foreignLanguageService = new ForeignLanguageService()
        foreignLanguageService.getByCurriculumVitae_id(curriculumVitaeId).then(result4 => setForeignLanguages(result4.data.data))
    })

    return (
        <div>
            <h1>Cirruculum Vitaes</h1>
            <List>
            <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                        <h3>School List</h3>
                        <List.List>
                            {
                                schools.map(school => (
                                    <List.Item key={school.id}>
                                        <List.Icon name='file' />
                                        <List.Content>
                                            <List.Header>School Name : {school.schoolName}</List.Header>
                                            <List.Description>School Department : {school.schoolDepartment}</List.Description>
                                            <List.Description>Start Date : {school.startDate}</List.Description>
                                            <List.Description>Finish Date : {school.finishDate}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                ))
                            }
                        </List.List>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                        <h3>Experience List</h3>
                        <List.List>
                            {
                                experiences.map(experience => (
                                    <List.Item key={experience.id}>
                                        <List.Icon name='file' />
                                        <List.Content>
                                            <List.Header>Workplace Name : {experience.workplaceName}</List.Header>
                                            <List.Description>Position : {experience.positionName}</List.Description>
                                            <List.Description>Start Date : {experience.startDate}</List.Description>
                                            <List.Description>Finish Date : {experience.endDate}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                ))
                            }
                        </List.List>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                        <h3>Technology List</h3>
                        <List.List>
                            {
                                technologies.map(technology => (
                                    <List.Item key={technology.id}>
                                        <List.Icon name='file' />
                                        <List.Content>
                                            <List.Header>Technology Name : {technology.technology_name}</List.Header>
                                        </List.Content>
                                    </List.Item>
                                ))
                            }
                        </List.List>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                        <h3>Language List</h3>
                        <List.List>
                            {
                                foreignLanguages.map(foreignLanguage => (
                                    <List.Item key={foreignLanguage.id}>
                                        <List.Icon name='file' />
                                        <List.Content>
                                            <List.Header>Language Name : {foreignLanguage.languageName}</List.Header>
                                            <List.Description>Language Level : {foreignLanguage.level}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                ))
                            }
                        </List.List>
                    </List.Content>
                </List.Item>
                
            </List>
        </div>
    )
}
