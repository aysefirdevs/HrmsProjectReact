import React from 'react'
import { Route } from 'react-router'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'

import EmployerList from '../pages/EmployerList'
import JobPositionList from '../pages/JobPositionList'
import CandidateDetailCv from '../pages/CandidateDetailCv'




export default function Section() {
    return (
        <div>
              <Grid>
                <GridRow>
                    <GridColumn>
                        <Route exact path="/"/>
                        <Route exact path="/candidates" component={CandidateList}/>
                        <Route exact path="/curriculumVitaes/:id" component={CandidateDetailCv} />
                        <Route exact path="/job-positions" component={JobPositionList}/>
                        <Route exact path="/employers" component={EmployerList}/>
                    </GridColumn>
                </GridRow>
            </Grid>

        </div>
    )
}
