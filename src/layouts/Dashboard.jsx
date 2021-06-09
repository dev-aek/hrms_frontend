import React from 'react'
import AdvertisementList from '../pages/AdvertisementList'
import SideBar from './SideBar'
import { Grid } from "semantic-ui-react";


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <AdvertisementList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
