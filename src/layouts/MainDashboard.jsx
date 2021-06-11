import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Section from './Section'
import SideBar from './SideBar'


export default function MainDashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <SideBar/>
                    </GridColumn>
                    <GridColumn>
                        <Section/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
