import React from 'react'
import { Dropdown, Icon, Input, Menu, Button } from 'semantic-ui-react'

export default function SideBar() {
    return (
        <div>
            <Menu inverted color='green' vertical>
                <Menu.Item>
                    <Input placeholder='Search...' />
                </Menu.Item>

                {/* <Menu.Item>Home<Menu.Menu>
                    <Menu.Item name='search'>Search</Menu.Item>
                    <Menu.Item name='add'>Add</Menu.Item>
                    <Menu.Item name='about'>Remove</Menu.Item>
                    </Menu.Menu>
                    </Menu.Item> */}
                     <Menu.Item name='browse'><Icon name='building' />Companies</Menu.Item>
                     <Menu.Item name='browse'><Icon name='user' />Canditates</Menu.Item>
                {/* <Menu.Item name='messages'>Messages</Menu.Item> */}
                <Dropdown item text='Job Positions'>
                    <Dropdown.Menu >
                        <Dropdown.Item color='green' icon='edit' text='Edit Profile' />
                        <Dropdown.Item icon='globe' text='Choose Language' />
                        <Dropdown.Item icon='settings' text='Account Settings' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </div>
    )
}
