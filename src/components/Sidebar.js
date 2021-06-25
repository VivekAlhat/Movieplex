import {
  StyledSidebar,
  SidebarOptions,
  SidebarOptionItem,
  SidebarLogo,
} from "./styled/styled";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SidebarLogo>Movieplex</SidebarLogo>
      <SidebarOptions>
        <NavLink to="/">
          <SidebarOptionItem>Latest</SidebarOptionItem>
        </NavLink>
        <NavLink to="/nowplaying">
          <SidebarOptionItem>Now Playing</SidebarOptionItem>
        </NavLink>
        <NavLink to="/popular">
          <SidebarOptionItem>Popular</SidebarOptionItem>
        </NavLink>
        <NavLink to="/toprated">
          <SidebarOptionItem>Top Rated</SidebarOptionItem>
        </NavLink>
        <NavLink to="/upcoming">
          <SidebarOptionItem>Upcoming</SidebarOptionItem>
        </NavLink>
        <NavLink to="/genres">
          <SidebarOptionItem>Genres</SidebarOptionItem>
        </NavLink>
        <NavLink to="/favorites">
          <SidebarOptionItem>Favorites</SidebarOptionItem>
        </NavLink>
        <NavLink to="/watchlist">
          <SidebarOptionItem>Watch Later</SidebarOptionItem>
        </NavLink>
      </SidebarOptions>
    </StyledSidebar>
  );
};

export default Sidebar;
