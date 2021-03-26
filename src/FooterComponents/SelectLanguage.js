import { Component } from "react";
import uuid from "react-uuid";
import SelectLanguageOption from "./SelectLanguageOption";

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
    const languages = [
      "English",
      "English-UK",
      "French",
      "Spanish",
      "German",
      "Hindi",
      "Gujarati",
    ];

    const languageOptions = languages.map((language) => {
      return <SelectLanguageOption key={uuid()} language={language} />;
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
