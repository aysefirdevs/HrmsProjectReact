import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Card, Table,Image,Icon,Grid, GridColumn, GridRow} from 'semantic-ui-react'
import CurriculumVitaeService from '../services/CurriculumVitaeService'
import SchoolService from '../services/SchoolService'
import ExperienceService from '../services/ExperienceService'
import TechnologyService from '../services/TechnologyService'
import ForeignLanguageService from '../services/ForeignLanguageService'


export default function CandidateDetailCv() {
    let { id } = useParams()

    const [curriculumVitae, setCurriculumVitae] = useState({}) //bir obje döndürdüğünü unutma

    useEffect(() => {
        let curriculumVitaeService = new CurriculumVitaeService()
        curriculumVitaeService.getByCandidate_id(id).then(result => setCurriculumVitae(result.data.data))
    })

    let curriculumVitaeId = curriculumVitae.id  //cvnin idsini bu idye atıyorum school,experience,teknoloji ve languagede kullanmak için

    const [schools, setSchools] = useState([])
    useEffect(() => {
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
            <Card fluid color='yellow' header='Özgeçmiş' />
            <Grid>
                <GridRow>
                    <GridColumn width={3}>
                        <Image
                        floated='right'
                        verticalAlign="top"
                        size='small'
                        spaced="right"
                        rounded
                        src={curriculumVitae.profilePhoto}
                        />
                    </GridColumn>
                    <GridColumn width={13}>
                    <Card fluid>
                    <Card.Content>
                    <Card.Header textAlign="left">{curriculumVitae.candidate?.firstName}  {curriculumVitae.candidate?.lastName}</Card.Header>
                    </Card.Content></Card>
                    <Card fluid>
                    <Card.Content>
                        <Card.Description textAlign="left">{curriculumVitae.coverLetter}</Card.Description>
                </Card.Content></Card></GridColumn>
                </GridRow>
            </Grid>
           <Card fluid>
                <Card.Content textAlign="left">
                <Icon name='linkedin' corner="left" size="large"/>{curriculumVitae.linkedin}
                </Card.Content>
            </Card>
            <Card fluid>
                <Card.Content textAlign="left">
                <Icon name='github' corner="left" size="large"/>{curriculumVitae.github}
                </Card.Content>
            </Card>
            <h3 verticalAlign="right">Okullar</h3>
            <table class="ui red table">
            <Table celled>
                <Table.Header  color="orange">
                    <Table.Row>
                        <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                        <Table.HeaderCell>Bölümü</Table.HeaderCell>
                        <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    schools.map(school => (
                        <Table.Row key={school.id}>
                                <Table.Cell>{school.schoolName}</Table.Cell>
                                <Table.Cell>{school.schoollDepartment}</Table.Cell>
                                <Table.Cell>{school.startDate}</Table.Cell>
                                <Table.Cell>{school.finishDate}</Table.Cell>
                        </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
            </table>
            
            <h3>Araçlar ve Teknolojiler</h3>
            <table class="ui purple table">     
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Araç/Teknoloji Adı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    technologies.map(technology => (
                        <Table.Row key={technology.id}>
                                <Table.Cell>{technology.technology_name}</Table.Cell>
                               
                        </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
            </table>

            <h3>Deneyimler</h3>
            <table class="ui orange table">     
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    experiences.map(experience => (
                        <Table.Row key={experience.id}>
                                <Table.Cell>{experience.workplaceName}</Table.Cell>
                                <Table.Cell>{experience.positionName}</Table.Cell>
                                <Table.Cell> {experience.startDate}</Table.Cell>
                                <Table.Cell>{experience.endDate}</Table.Cell>
                        </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
            </table>

           
            <h3>Yabancı Diller</h3>
            <table class="ui pink table">     
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Dil</Table.HeaderCell>
                        <Table.HeaderCell>Seviye</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    foreignLanguages.map(foreignLanguage => (
                        <Table.Row key={foreignLanguage.id}>
                                <Table.Cell>{foreignLanguage.languageName}</Table.Cell>
                                <Table.Cell>{foreignLanguage.level}</Table.Cell>
                        </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
            </table>
        </div>
    )
}
