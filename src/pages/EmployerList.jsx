import React, { useEffect, useState } from 'react'
import EmployerService from '../services/EmployerService'
import { Icon, Menu, Table } from 'semantic-ui-react'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(()=>{
        let employerService= new EmployerService()
        employerService.getEmployer().then(result => setEmployers(result.data.data))
    },[])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.webAddress}</Table.Cell>
                                <Table.Cell>{employer.phone}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
