import React from "react";
import "./App.css";
import { Signup } from "./components/signUpForm";
<<<<<<< HEAD
// import Homepage from "./components/Homepage.js";
import Container from "@material-ui/core/Container";
import Footer from "./components/Footer";
// import ActivityCard from "./components/ActivityCard";
import SignInSide from "./components/signUpImage";
=======
import ActivityCard from "./components/ActivityCard";
import Container from "@material-ui/core/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainTextHeroImg from "./components/MainTextHeroImg";
import SearchBar from "./components/SearchBar";
import JoinButton from "./components/JoinButton.js";


>>>>>>> master
class App extends React.Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
      <Container maxWidth="lg">
        <Signup />
      </Container>
=======
        <Container maxWidth="lg">
          <Header />
          <MainTextHeroImg />
          <JoinButton />
          <SearchBar />
          <ActivityCard />
        </Container>
>>>>>>> master
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
