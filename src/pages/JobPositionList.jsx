import React, { useEffect, useState } from 'react'
import { Table ,Card} from 'semantic-ui-react'
import JobPositionService from '../services/JobPositionService'

export default function JobPositionList() {

    const [jobPositions, setJobPositions] = useState([])
    
    useEffect(() =>{  //komponent yüklendiğinde yapılmasını istediğim kodu buraya yazıyorum.
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))
    },[])

    return (
        <div>
            <Card fluid color='grey' header='İş Pozisyonları' />
            <table class="ui red table">
            <Table celled >
                <Table.Header  color="orange">
                    <Table.Row>
                        <Table.HeaderCell>İş Pozisyonları</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPositions.map(jobPosition => (
                            <Table.Row key={jobPosition.id}>
                                <Table.Cell>{jobPosition.title}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
            </table>
        </div>
    )
}
