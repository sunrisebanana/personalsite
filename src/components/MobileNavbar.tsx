import React, { Component } from 'react'
import {
  Menu, 
  Icon,
  Grid,
} from 'semantic-ui-react'
import _ from 'underscore'

const items = [
    { as: 'a', key:"github", content: <Icon link name='github' size='large'/>, href: "https://github.com/sunrisebanana"},
    { as: 'a', key:"linkedin", content: <Icon link name='linkedin' size='large'/>, href: "https://www.linkedin.com/in/jaime-herzog-75826713b"},
    { as: 'a', key:"chess", content: <Icon link name='chess' size='large'/>, href: "https://lichess.org/@/sunrisebanana"}
]

export default class MobileNavbar extends Component {

    render() {
        return (
            <Grid fixed={'bottom'}>
                <Grid.Row columns={1} only='mobile tablet'>       
                <Grid.Column>
                    <Menu widths={3}>
                    {_.map(items, item => <Menu.Item {...item}/>)}
                    </Menu>
                </Grid.Column>
                </Grid.Row>  
            </Grid>
        )
    }
}