import {
  StyledSidebar,
  SidebarOptions,
  SidebarOptionItem,
  SidebarLogo,
} from "./styled/styled";
import { Link } from "react-router-dom";
import { WatchLater, Favorite, Movie } from "@material-ui/icons";
import styled from "styled-components";

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SidebarOptionItemSelected = styled(SidebarOptionItem)`
  background: #393e46;
`;

const Sidebar = ({ selected }) => {
  return (
    <StyledSidebar>
      <SidebarLogo>Movieplex</SidebarLogo>
      <SidebarOptions>
        <NavLink to="/">
          {selected === "/" ? (
            <SidebarOptionItemSelected>
              <Movie />
              Movies
            </SidebarOptionItemSelected>
          ) : (
            <SidebarOptionItem>
              <Movie />
              Movies
            </SidebarOptionItem>
          )}
        </NavLink>
        <NavLink to="/favorites">
          {selected === "/favorites" ? (
            <SidebarOptionItemSelected>
              <Favorite />
              Favorites
            </SidebarOptionItemSelected>
          ) : (
            <SidebarOptionItem>
              <Favorite />
              Favorites
            </SidebarOptionItem>
          )}
        </NavLink>
        <NavLink to="/watchlist">
          {selected === "/watchlist" ? (
            <SidebarOptionItemSelected>
              <WatchLater />
              Watch Later
            </SidebarOptionItemSelected>
          ) : (
            <SidebarOptionItem>
              <WatchLater />
              Watch Later
            </SidebarOptionItem>
          )}
        </NavLink>
      </SidebarOptions>
    </StyledSidebar>
  );
};

export default Sidebar;
