import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import "react-range-slider-input/dist/style.css";
import RangeSlider from "react-range-slider-input";
import "./slider.css";

const Slider = () => {
  const [sliderOne, setSliderOne] = useState([-100, 100]);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <Container fluid>
          <Row className="mb-2">
            <Col sm={6}>
              <h1>Sliders</h1>
            </Col>
            <Col sm={6}>
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Sliders</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content">
        <Container fluid>
          <Row>
            <Col>
              <Card
                // color="primary"
                className="card-primary"
              >
                <CardHeader>
                  <CardTitle tag={"h3"}>Ion Slider</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row className="margin">
                    <Col sm={6}>
                      {/* <input id="range_1" type="text" name="range_1" value="" /> */}
                    </Col>
                    <Col sm={6}>
                      {/* <input
                        id="range_2"
                        type="text"
                        name="range_2"
                        value="1000;100000"
                        data-type="double"
                        data-step="500"
                        data-postfix=" &euro;"
                        data-from="30000"
                        data-to="90000"
                        data-hasgrid="true"
                      /> */}
                    </Col>
                  </Row>
                  <Row className="margin">
                    <Col sm={6}>
                      {/* <input id="range_5" type="text" name="range_5" value="" /> */}
                    </Col>
                    <Col sm={6}>
                      {/* <input id="range_6" type="text" name="range_6" value="" /> */}
                    </Col>
                  </Row>
                  <Row className="margin">
                    <Col sm={12}>
                      {/* <input
                        id="range_4"
                        type="text"
                        name="range_4"
                        value="10000;100000"
                      /> */}
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className="card-primary">
                <CardHeader>
                  <CardTitle tag={"h3"}>Bootstrap Slider</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <p>
                        {sliderOne.map((item) => {
                          if (item > 0) {
                            return `+${item}`;
                          } else {
                            return item;
                          }
                        })}
                      </p>
                    </Col>
                  </Row>
                  <Row className="margin">
                    <Col sm={6}>
                      <div className="slider-red">
                        <RangeSlider
                          step={5}
                          id="range-slider"
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>

                      <p>.slider-red input.slider</p>
                      <div className="slider-blue">
                        <RangeSlider
                          id="range-slider-blue"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>

                      <p>.slider-blue input.slider</p>
                      <div className="slider-green">
                        <RangeSlider
                          id="range-slider-green"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>

                      <p>.slider-green input.slider</p>
                      <div className="slider-yellow">
                        <RangeSlider
                          id="range-slider-yellow"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>

                      <p>.slider-yellow input.slider</p>
                      <div className="slider-teal">
                        <RangeSlider
                          id="range-slider-teal"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>

                      <p>.slider-teal input.slider</p>
                      <div className="slider-purple">
                        <RangeSlider
                          id="range-slider-purple"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>

                      <p>.slider-purple input.slider</p>
                    </Col>
                    <Col sm={6} className="d-flex justify-content-center">
                      <div className="slider-red mx-3">
                        <RangeSlider
                          id="range-slider2"
                          orientation="vertical"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>
                      <div className="slider-blue mx-3">
                        <RangeSlider
                          id="range-slider-blue2"
                          orientation="vertical"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                        {/* <input
                          type="text"
                          value=""
                          className="slider form-control"
                          data-slider-min="-200"
                          data-slider-max="200"
                          data-slider-step="5"
                          data-slider-value="[-100,100]"
                          data-slider-orientation="vertical"
                          data-slider-selection="before"
                          data-slider-tooltip="show"
                        /> */}
                      </div>
                      <div className="slider-green mx-3">
                        <RangeSlider
                          id="range-slider-green2"
                          orientation="vertical"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>
                      <div className="slider-yellow mx-3">
                        <RangeSlider
                          id="range-slider-yellow2"
                          orientation="vertical"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>
                      <div className="slider-teal mx-3">
                        <RangeSlider
                          id="range-slider-teal2"
                          orientation="vertical"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>
                      <div className="slider-purple mx-3">
                        <RangeSlider
                          id="range-slider-purple2"
                          orientation="vertical"
                          step={5}
                          min={-200}
                          max={200}
                          value={sliderOne}
                          onInput={(value, userInteraction) => {
                            setSliderOne(value);
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Slider;
