import { useEffect, useRef } from "react";
import { IoPlay, IoStar } from "react-icons/io5";

import { useMovies, useMoviesTest, useOnScreen } from "../../hooks";
import { formatDuration } from "../../utils";
import {
  ButtonLink,
  Caption,
  Card,
  Container,
  Figure,
  Header,
  Poster,
  Rating,
  Row,
  Runtime,
  Summary,
  Title,
  TitleSmall,
  Year,
} from "./style";

export const Main: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { movies, isError, isLoading } = useMovies({
    sort_by: "download_count",
    limit: 48,
  });
  const isVisible = useOnScreen(ref);

  // const {
  //   movies,
  //   isLoadingMore,
  //   isReachingEnd,
  //   isRefreshing,
  //   setSize,
  //   size,
  // } = useMoviesTest({});
  // console.log(movies);

  // useEffect(() => {
  //   if (isVisible && !isReachingEnd && !isRefreshing) {
  //     setSize(size + 1);
  //   }
  // }, [isVisible, isRefreshing, isReachingEnd, setSize, size]);

  return (
    <Container>
      {movies?.map(
        (
          {
            title,
            medium_cover_image,
            year,
            rating,
            runtime,
            summary,
            imdb_code,
            torrents,
          },
          key
        ) => (
          <Card key={key}>
            <Figure>
              <Poster src={medium_cover_image} alt={title} />
              <Caption>
                <Header>
                  <TitleSmall>{title}</TitleSmall>
                  <Runtime>{formatDuration(runtime)}</Runtime>
                </Header>
                <Summary>{summary}</Summary>
                <ButtonLink
                  to={{
                    pathname: "player",
                    search: `?title=${title}&imdb=${imdb_code}&hash=${
                      torrents.find(({ quality }) => quality === "1080p")?.hash
                    }`,
                  }}
                >
                  <IoPlay />
                  ASSISTIR
                </ButtonLink>
              </Caption>
            </Figure>
            <Title>{title}</Title>
            <Row>
              <Year>{year}</Year>
              <IoStar color="#d2be39" width={14} height={14} />
              <Rating>{rating.toFixed(1)}</Rating>
            </Row>
          </Card>
        )
      )}
      {/* <div ref={ref}>
        {isLoadingMore ? "loading..." : isReachingEnd ? "no more issues" : ""}
      </div> */}
    </Container>
  );
};
