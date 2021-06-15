import React, { useState } from 'react'
import { Button, Dropdown, Menu, Icon, Container } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useHistory } from "react-router";

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()
    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted color='green' size='large' fixed='top' >
                <Container>
                    <Menu.Item size='large'>
                        {/* <img  src="https://i.ibb.co/c3hBW3g/Ads-z-tasar-m-4-removebg-preview.png" alt="Ads-z-tasar-m-4-removebg-preview" border="0"/> */}
                        <Icon size='big' name='users' />HRMS
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
                        <Button color='orange' animated>
                            <Button.Content visible>Add Job Add</Button.Content>
                            <Button.Content hidden>
                                <Icon name='add' />
                            </Button.Content>
                        </Button>
                        </Menu.Item>

                        {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" />
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
