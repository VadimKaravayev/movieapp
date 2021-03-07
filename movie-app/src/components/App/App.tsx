import React from "react";
import { Header } from '../Header/Header';
import { Logo } from '../Logo/Logo';
import { AddMovie } from "../AddMovie/AddMovie";
import { SearchMovie } from '../SearchMovie/SearchMovie';
import { Container } from '../Container/Container';
import { ResultsFilter } from '../ResultsFilter/ResultsFilter';
import { ResultsSort } from '../ResultsSort/ResultsSort';
import { MovieGrid } from '../MovieGrid/MovieGrid'
import { Footer } from '../Footer/Footer';
import { categories } from "../../dummyData";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export const App: React.FC<React.ReactNode> = () => (
        <>
            <Header>
                <Logo text="netflix roulette" />
                <AddMovie text="+ add movie" />
                <SearchMovie heading="find your movie" placeholder="What do you want to watch?" cta="search" />
            </Header>
            <Container>
                <ResultsFilter categories={categories} />
                <ResultsSort />
                <ErrorBoundary>
                    <MovieGrid />
                </ErrorBoundary>
            </Container>
            <Footer />
        </>
    );
