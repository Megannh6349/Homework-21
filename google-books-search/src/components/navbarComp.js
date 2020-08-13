import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

class NavbarComp extends React.Component {
    render() {
        return (
            <div>
                <Navbar
                    className="green lighten-1"
                    alignLinks="right"
                    brand={<a className="brand-logo" href="/">Google Books</a>}
                    centerLogo
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                >
                    <NavItem href="/">
                        Search
                    </NavItem>
                    <NavItem href="/saved">
                        Saved
                    </NavItem>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComp;