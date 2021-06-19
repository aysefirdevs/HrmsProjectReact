import React, { useEffect, useState } from 'react'

import {Table,Card } from 'semantic-ui-react'
import JobAdvertisementService from '../services/JobAdvertisementService'

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [])
    
    return (
        <div>
            <Card fluid color='grey' header='İş İlanları' />
            <table class="ui purple table">
                <Table celled>
                <Table.Header>
                <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Min Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Max Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row key={jobAdvertisement.id}>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobPosition.title}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.openPosition}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
                </Table>
            </table>
           
        </div>
    )
}
