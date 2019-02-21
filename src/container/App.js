import React, { Component, Fragment } from "react";
import uuid from "uuid";
import styled from "styled-components";
import { H1, H2, H3, Text } from "../components/Text";
import Sidebar from "../components/Sidebar";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Button from "../components/Button";
import InputFile from "../components/InputFile";
import ImagePreview from "../components/ImagePreview";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { harmful_ingredients_list_inline } from "../helpers/harmful_ingredients_list";

import { connect } from "react-redux";
import {
  handleUploadImage,
  handleOnSubmitAction
} from "../actions/ingredients";

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    display: block;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        {this.props.loading && <Loader />}
        <Sidebar />
        <Flex display="-webkit-box">
          <Container maxWidth="1024px">
            <Container>
              <Hero>
                <H1>Ingredient Checker</H1>
                <Text>
                  I have created application to help you find cosmetics without
                  harmful ingredients. Now you can scan label of your shampoo,
                  body lation or shower gel and find out if it contains any
                  unhealthy products. Application is looking for following words
                  from your product: <b>{harmful_ingredients_list_inline}</b> As
                  this application is a prototape, pleas take care when you
                  check the label.
                </Text>
              </Hero>
            </Container>
            <Container>
              <Flex alignItems="flex-start" flexDirection="column">
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

                <div>
                  <Text style={{ display: "inline" }}>
                    Harmfull ingredients:{" "}
                    {this.props.harmful_ingredients.length > 0 ? (
                      this.props.harmful_ingredients.map(item => (
                        <span
                          style={{ display: "inline", color: "red" }}
                          key={uuid()}
                        >
                          {item}
                        </span>
                      ))
                    ) : (
                      <span>No label has sent</span>
                    )}
                  </Text>
                </div>

                <ImagePreview src={this.props.image_preview} />
                <ErrorMessage error={this.props.error_message} />
              </Flex>
            </Container>
          </Container>
        </Flex>
      </AppWrapper>
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
