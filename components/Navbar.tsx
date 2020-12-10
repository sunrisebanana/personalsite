import React, { Component } from 'react'
import Link from 'next/link'
import {
  Container,
  Menu,
  Image,
  Visibility
} from 'semantic-ui-react'

//todo: move these to module.css
const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
    
}

const fixedMenuStyle = {
    border: '1px solid',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

export default class Navbar extends Component {
    state = {
        menuFixed: false,
    }
    stickNavbar = () => this.setState({ menuFixed: true })
    unStickNavbar = () => this.setState({ menuFixed: false })
    render() {
        const { menuFixed } = this.state
        return (
        <Visibility onBottomPassed={this.stickNavbar} onBottomVisible={this.unStickNavbar} once={false}>
            <Menu fixed={menuFixed ? 'top' : undefined} style={menuFixed ? fixedMenuStyle : menuStyle} inverted={true}>
                <Container>
                    <Menu.Item>
                        <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                        My Website
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/users">
                            <a>Users List</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/api/users">Users API</a>
                    </Menu.Item>
                </Container>
            </Menu>
        </Visibility>
        )
        
    }
}
