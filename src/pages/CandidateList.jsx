import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Table,Card } from 'semantic-ui-react'
import CandidateService from '../services/CandidateService'

export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

        useEffect(() =>{  //komponent yüklendiğinde yapılmasını istediğim kodu buraya yazıyorum.
            let candidateService = new CandidateService()
            candidateService.getCandidate().then(result => setCandidates(result.data.data))
        },[])
        
    return (
        <div>
            <Card fluid color='grey' header='İş Arayanlar' />
            <table class="ui red table">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ad</Table.HeaderCell>
                        <Table.HeaderCell>Soyad</Table.HeaderCell>
                        <Table.HeaderCell>Tc Kimlik</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Yılı</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map(candidate => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell><Link to={`/curriculumVitaes/${candidate.id}`}>{candidate.firstName}</Link></Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.identificationNumber}</Table.Cell>
                                <Table.Cell>{candidate.birthDate}</Table.Cell>
                                <Table.Cell>{candidate.email}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table></table>
        </div>
    )
}
