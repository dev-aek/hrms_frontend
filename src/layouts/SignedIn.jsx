import React from 'react'
import { Dropdown, Menu,Image, Button } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://i.ibb.co/zxvjBTN/1619528562505.jpg" alt="1619528562505" border="0"/>
                <Dropdown pointing="top left" text="Engin">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item text="İlan Ver" icon="add">

                        </Dropdown.Item>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}