import React, { Component, Fragment } from "react";
import { H1, H2, H3, Text } from "../components/Text";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Button from "../components/Button";
import InputField from "../components/InputField";
import InputFile from "../components/InputFile";

export default class App extends Component {
  render() {
    return (
      <Fragment>
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
                <H2>Enter basic information</H2>
                <InputField label="Product name" />
                <InputField label="Product name" />
                <Button fluid type="submit">
                  Submit
                </Button>
              </Container>
              <Container>
                <H2>Scan product label</H2>
                <InputFile
                  fluid
                  type="file"
                  label="Upload file"
                  id="file_upload"
                />
              </Container>
            </Flex>
          </Container>
        </Flex>
      </Fragment>
    );
  }
}
