import React, { useEffect, useState } from 'react'
import EmployerService from '../services/EmployerService'
import {Table,Card } from 'semantic-ui-react'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(()=>{
        let employerService= new EmployerService()
        employerService.getEmployer().then(result => setEmployers(result.data.data))
    },[])

    return (
        <div><Card fluid color='grey' header='İş Verenler' />
            <table class="ui red table">
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
            </Table></table>
        </div>
    )
}
