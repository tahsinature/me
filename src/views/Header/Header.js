import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <Nav />
        <div className="header-continer">
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {name}.</h1>
              <h3>
                I'm a {city} based <span>{occupation}</span>. {description}.
              </h3>
              <hr />
              <ul className="social">{networks}</ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
