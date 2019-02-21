import React, { Component, Fragment } from "react";
import uuid from "uuid";
import { H1, H2, H3, Text } from "../components/Text";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Button from "../components/Button";
import InputFile from "../components/InputFile";
import ImagePreview from "../components/ImagePreview";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

import { connect } from "react-redux";
import {
  handleUploadImage,
  handleOnSubmitAction
} from "../actions/ingredients";

class App extends Component {
  render() {
    return (
      <Fragment>
        {this.props.loading && <Loader />}
        <Hero>
          <Flex flexDirection="column">
            <H1 color="white">Ingredient Checker</H1>
            <H2 color="white">Your health matter</H2>
          </Flex>
        </Hero>
        <Flex>
          <Container maxWidth="1024px">
            <Flex alignItems="flex-start">
              <Container>
                <H2>Scan product label</H2>
                <InputFile
                  fluid
                  type="file"
                  label="Upload file"
                  id="file_upload"
                  onChange={e => this.props.dispatch(handleUploadImage(e))}
                />
                <Button
                  fluid
                  label="Check ingredients"
                  type="submit"
                  disabled={this.props.image_preview ? false : true}
                  onClick={() =>
                    this.props.dispatch(
                      handleOnSubmitAction(this.props.image_preview)
                    )
                  }
                />
              </Container>
              <Container>
                <H3>Harmfull ingredients: </H3>
                {this.props.harmful_ingredients.length > 0 ? (
                  this.props.harmful_ingredients.map(item => (
                    <Text color="red" key={uuid()}>
                      {item}
                    </Text>
                  ))
                ) : (
                  <Text>Upload file and click "Check ingredients"</Text>
                )}
                <ImagePreview src={this.props.image_preview} />
                <ErrorMessage error={this.props.error_message} />
              </Container>
            </Flex>
          </Container>
        </Flex>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    image_preview: state.ingredients.image_preview,
    harmful_ingredients: state.ingredients.harmful_ingredients,
    error_message: state.ingredients.error_message,
    loading: state.ingredients.loading
  };
};

export default connect(mapStateToProps)(App);
