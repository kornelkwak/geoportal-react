import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MapPinned } from 'lucide-react';

const TopBarContainer = styled.div`
    display: flex;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #363636;
    color: white;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    z-index: 10;
`;

const Title = styled.h1`
    font-size: 2rem;
`;

const StyledIcon = styled.div`
  color: red;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const NavLinks = styled.div`
    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        gap: 10px;
        font-weight: 600;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &.active {
        background-color: rgb(196, 5, 5);;
    }

    &:hover {
        color: #363636!important;
        background-color: rgb(196, 5, 5);;
    }

    &:visited {
        color: white;
    }
    `;

const TopBar: React.FC = () => {

    return (
        <TopBarContainer>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/">
                    <StyledIcon as={MapPinned} />
                </NavLink>
                <Title style={{ marginLeft: '10px' }}>GeoPortal</Title>
            </div>
            <NavLinks>
                <ul>
                    <li>
                        <StyledNavLink to="/">
                            Home
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/map">
                            2D Map
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/3d">
                            3D Pointcloud
                        </StyledNavLink>
                    </li>
                </ul>
            </NavLinks>
        </TopBarContainer>
    );
};

export default TopBar;