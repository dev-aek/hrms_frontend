import React from 'react'
import { Button, Dropdown, Menu, Icon, Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted color='green' size='large' fixed='top' >
               <Container>   
                <Menu.Item>
                {/* <img src='/images/bbb.png'/> */}
                <Icon size='big' name='users'/>HRMS
                </Menu.Item>
               <Menu.Item>
                    <Button color='green' animated='fade'>
                        <Button.Content visible > Home</Button.Content>
                        <Button.Content hidden>
                            <Icon name='home' />
                        </Button.Content>
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button color='green' animated>
                        <Button.Content visible>Advertisements</Button.Content>
                        <Button.Content hidden>
                            <Icon name='announcement' />
                        </Button.Content>
                    </Button>
                </Menu.Item>
                <Menu.Menu position='right'>
                    {/* <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}

                    <Menu.Item>
                        <Button color='green' animated='fade'>
                            <Button.Content visible > Sign In</Button.Content>
                            <Button.Content hidden>
                                <Icon name='sign in alternate' />
                            </Button.Content>
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button color='violet' animated='fade' size='tiny'>
                            <Button.Content visible > Sign Up</Button.Content>
                            <Button.Content hidden>
                                <Icon name='signup' />
                            </Button.Content>
                        </Button>
                    </Menu.Item>
                </Menu.Menu>            
               </Container>
            </Menu>
        </div>
    )
}
