import styled from "styled-components";

export const AppContainer = styled.div`
  position: absolute;
  min-width: calc(100% - 15rem);
  left: 15rem;
  background: #393e46;
`;

export const StyledSidebar = styled.div`
  position: absolute;
  min-height: 100vh;
  background: #222831;
  color: #dddddd;
  width: 15rem;
`;

export const SidebarOptions = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SidebarOptionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 1rem;
  :hover {
    background: #393e46;
  }
`;

export const SidebarLogo = styled.h3`
  height: 3rem;
  padding: 0.5rem 1rem 0;
  font-size: 1.7rem;
  letter-spacing: 2px;
  background: #435560;
`;

export const MovieSearchBar = styled.div`
  background: #435560;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 3rem;
`;

export const MovieSearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  color: #dddddd;
  padding: 0.5rem 1rem;
  min-width: calc(100vw - 25rem);

  ::placeholder {
    color: #dddddd;
  }
`;

export const SearchButton = styled.button`
  display: none;
`;

export const MoviesContainer = styled.div`
  overflow-y: scroll;
  height: 100vh;
  padding: 1.5rem 3rem 5rem;
`;

export const LoadingContainer = styled.div`
  min-height: calc(100vh - 3rem);
  display: grid;
  place-items: center;
`;

export const MoviesTitle = styled.h1`
  color: #dddddd;
  text-align: right;
  font-size: 2.5rem;
`;

export const MovieList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const MovieItem = styled.div`
  overflow: hidden;
`;

export const MovieImg = styled.img`
  cursor: pointer;
  width: 14rem;
  height: 100%;
  transition: all linear 200ms;

  :hover {
    transform: scale(1.1);
    opacity: 0.5;
  }
`;
