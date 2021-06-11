import React from 'react'
import {Container, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item 
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>

                        <Menu.Item>
                        <div class="ui buttons">
                            <button class="ui yellow basic button">Sign Up</button>
                            <div class="or"></div>
                            <button class="ui green basic button">Sign In</button>
                        </div>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )
    
}