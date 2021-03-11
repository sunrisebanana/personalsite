import React, { Component } from 'react'
import {
  Container,
  Menu,
  Image,
  Visibility,
  Icon,
  Grid
} from 'semantic-ui-react'
import _ from 'underscore'

//todo: move these to module.css
 const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
    background: 'white',
}

const fixedMenuStyle = {
    border: '1px solid',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
    marginBottom: '1em',
    background: 'white',
}
const leftItems = [
    { as: 'a', key:'about', content: "About", href: "/about"}
]
const rightItems = [
    { as: 'a', key:'github', content: <Icon link name='github' size='large'/>, href: "https://github.com/sunrisebanana"},
    { as: 'a', key:'linkedin', content: <Icon link name='linkedin' size='large'/>, href: "https://www.linkedin.com/in/jaime-herzog-75826713b"},
    { as: 'a', key:'chess', content: <Icon link name='chess' size='large'/>, href: "https://lichess.org/@/sunrisebanana"}
]

export default class Navbar extends Component {
    state = {
        menuFixed: false,
    }
    stickNavbar = () => this.setState({ menuFixed: true })
    unStickNavbar = () => this.setState({ menuFixed: false })
    render() {
        const { menuFixed } = this.state 
        return (
              
        <Visibility onBottomPassed={this.stickNavbar} onBottomVisible={this.unStickNavbar}  offset={[0, -50]} once={false}>

            <Grid>
            <Grid.Row only='computer'>
            <Menu secondary fixed={'top'} style={menuFixed ? fixedMenuStyle : menuStyle}  >
                <Container text aria-label="Navbar">
                    <Menu.Item aria-label="Home" href='/'>
                        <Image  alt='me' size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                        It's My Website
                    </Menu.Item>
                    
                    {_.map(leftItems, item => <Menu.Item {...item} />)}
                    <Menu.Menu position="right">
                        {_.map(rightItems, item => <Menu.Item {...item} />)}
                    </Menu.Menu>
                </Container>
            </Menu>

            </Grid.Row>
            </Grid>
            
            <Grid>
            <Grid.Row only='mobile tablet'>
            <Menu widths={2} borderless position="middle" fixed={'top'} style={menuFixed ? fixedMenuStyle : menuStyle} >
                <Container aria-label="Navbar">
                    <Menu.Item aria-label="Home" href='/'>
                        <Image  alt='me' size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                        It's My Website
                    </Menu.Item>
                    
                    {_.map(leftItems, item => <Menu.Item {...item} />)}
                    
                </Container>
            </Menu>
            </Grid.Row>
            </Grid>
        </Visibility>
        )
        
    }
}
