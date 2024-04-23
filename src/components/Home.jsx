import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../config/requests";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row
        title="Tendances actuelles"
        fetchUrl={requests.fetchTrending}
        isPoster={true}
      />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Films d'horreur" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="Programmes originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Films romantique" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />

      {/* video */}

      {/* quick view */}

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
