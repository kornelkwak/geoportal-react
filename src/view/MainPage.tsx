import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Map, Cuboid as Cube3D, ArrowRight } from 'lucide-react';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #0f172a, #1e293b);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
`;

const Subtitle = styled.p`
  color: #cbd5e1;
  font-size: 1.25rem;
  max-width: 42rem;
  margin: 0 auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 72rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const CardContent = styled.div`
  background-color: #1e293b;
  border-radius: 1rem;
  padding: 1.5rem;
  height: 100%;
  transition: all 0.3s;
  border: 1px solid #475569;

  &:hover {
    background-color: #334155;
    border-color: rgb(236, 48, 48);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgb(196, 5, 5);
  padding: 0.5rem;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledIcon = styled.div`
  color: white;
  width: 1.5rem;
  height: 1.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const CardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  display: block;
`;

const StyledArrowIcon = styled(ArrowRight)`
  width: 1.25rem;
  height: 1.25rem;
  transform: translateX(0);
  transition: transform 0.3s;

  ${StyledNavLink}:hover & {
    transform: translateX(0.5rem);
  }
`;

const CardDescription = styled.p`
  color: #cbd5e1;
`;

const MainPage: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>GeoPortal</Title>
          <Subtitle>
            Advanced geospatial visualization platform for mapping and 3D point cloud analysis
          </Subtitle>
        </Header>

        <CardGrid>
          <StyledNavLink to="/map">
            <CardContent>
              <ImageWrapper>
                <CardImage
                  src="map.webp"
                  alt="Digital map interface"
                />
                <IconWrapper>
                  <StyledIcon as={Map} />
                </IconWrapper>
              </ImageWrapper>
              <CardTitle>
                2D Mapping
                <StyledArrowIcon />
              </CardTitle>
              <CardDescription>
                Explore high-resolution satellite imagery, create custom maps, and analyze geographical data.
              </CardDescription>
            </CardContent>
          </StyledNavLink>

          <StyledNavLink to="/3d">
            <CardContent>
              <ImageWrapper>
                <CardImage
                  src="pointcloud.webp"
                  alt="Point cloud visualization"
                />
                <IconWrapper>
                  <StyledIcon as={Cube3D} />
                </IconWrapper>
              </ImageWrapper>
              <CardTitle>
                3D Pointcloud
                <StyledArrowIcon />
              </CardTitle>
              <CardDescription>
                Visualize and analyze LiDAR data, drone scans, and 3D point clouds with our powerful tools.
              </CardDescription>
            </CardContent>
          </StyledNavLink>
        </CardGrid>
      </ContentWrapper>
    </Container>
  );
};

export default MainPage;