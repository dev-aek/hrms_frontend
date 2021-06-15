import React from 'react'
import { Button,Menu,Icon } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button color='green' animated onClick={signIn} >
                <Button.Content visible>Sign In</Button.Content>
                <Button.Content hidden>
                    <Icon name='sign-in alternate' />
                </Button.Content>
            </Button>
            <Button color='violet' animated  style={{ marginLeft: '0.5em' }}>
                <Button.Content visible>Sign Up</Button.Content>
                <Button.Content hidden>
                    <Icon name='signup' />
                </Button.Content>
            </Button>
            </Menu.Item>
        </div>
    )
}