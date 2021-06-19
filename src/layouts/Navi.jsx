import React from 'react'
import { Link} from 'react-router-dom'
import {Container, Menu ,Button} from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu fixed="top">
                <Container>
                    <Menu.Menu position="left">
                    <Menu.Item>
                        <div class="ui buttons">
                            <Button color='yellow' as={Link} to={"/"}>HRMS</Button>
                        </div>
                    </Menu.Item>
                    </Menu.Menu>
                    
                    <Menu.Menu position='right'>
                    <Menu.Item>
                        <div class="ui buttons">
                            <Button color='pink'as={Link} to={"/jobAdvertisementAdd"}>
                                İlan Ver 
                            </Button>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div class="ui buttons">
                            <Button color='teal' as={Link} to={"/jobAdvertisements"}>İş Ara</Button>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div class="ui buttons">
                            <Button color='violet' disabled>Özgeçmiş Oluştur</Button>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div class="ui buttons">
                            <Button color="yellow" as={Link} to={"/register"}>Kayıt Ol</Button>
                            <div class="or"></div>
                            <Button color="green" as={Link} to={"/login"}>Giriş Yap</Button>
                        </div>
                    </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
    
}