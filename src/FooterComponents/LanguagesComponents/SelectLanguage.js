import { Component } from "react";
import uuid from "react-uuid";
import { languages } from "../FooterData";

class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "English",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ language: event.target.value });
  }

  render() {
    const languageOptions = languages.map((language) => {
      return (
        <option key={uuid()} value={language}>
          {language}
        </option>
      );
    });

    return (
      <select
        id="selectLanguages"
        value={this.state.language}
        onChange={this.handleChange}
      >
        {languageOptions}
      </select>
    );
  }
}

export default SelectLanguage;
