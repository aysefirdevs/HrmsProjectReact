import React from 'react'
import {Container, Menu ,Header,Button} from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu fixed="top">
                <Container>
                    <Menu.Header>
                    <Header as='h2' disabled attached="bottom" color="violet" textAlign="center">
                        HRMS
                    </Header>
                    </Menu.Header>
                    
                    <Menu.Menu position='right'>
                    <Menu.Item>
                        <div class="ui bottoms">
                            <Button color='pink' disabled>İlan Ver</Button>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div class="ui bottoms">
                            <Button color='teal' disabled>İş Ara</Button>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div class="ui bottoms">
                            <Button color='violet' disabled>Özgeçmiş Oluştur</Button>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div class="ui buttons">
                            <Button color="yellow">Sign Up</Button>
                            <div class="or"></div>
                            <Button color="green">Sign In</Button>
                        </div>
                    </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
    
}