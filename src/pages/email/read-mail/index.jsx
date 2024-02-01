import React from "react";
import Folder from "../../../components/email/folder";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
} from "reactstrap";

const ReadMail = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Compose</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Compose</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <Container fluid>
          <Row>
            <Folder />
            <Col md={9}>
              <Card className="card-primary card-outline">
                <CardHeader>
                  <CardTitle tag={"h3"}>Read Mail</CardTitle>

                  <div className="card-tools">
                    <a href="#" className="btn btn-tool" title="Previous">
                      <i className="fas fa-chevron-left"></i>
                    </a>
                    <a href="#" className="btn btn-tool" title="Next">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="mailbox-read-info">
                    <h5>Message Subject Is Placed Here</h5>
                    <h6>
                      From: support@adminlte.io
                      <span className="mailbox-read-time float-right">
                        15 Feb. 2015 11:03 PM
                      </span>
                    </h6>
                  </div>
                  <div className="mailbox-controls with-border text-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-default btn-sm"
                        data-container="body"
                        title="Delete"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-sm"
                        data-container="body"
                        title="Reply"
                      >
                        <i class="fa-solid fa fa-reply"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-sm"
                        data-container="body"
                        title="Forward"
                      >
                        <i className="fas fa-share"></i>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="btn btn-default btn-sm"
                      title="Print"
                    >
                      <i className="fas fa-print"></i>
                    </button>
                  </div>
                  <div className="mailbox-read-message">
                    <p>Hello John,</p>

                    <p>
                      Keffiyeh blog actually fashion axe vegan, irony biodiesel.
                      Cold-pressed hoodie chillwave put a bird on it aesthetic,
                      bitters brunch meggings vegan iPhone. Dreamcatcher vegan
                      scenester mlkshk. Ethical master cleanse Bushwick, occupy
                      Thundercats banjo cliche ennui farm-to-table mlkshk fanny
                      pack gluten-free. Marfa butcher vegan quinoa, bicycle
                      rights disrupt tofu scenester chillwave 3 wolf moon
                      asymmetrical taxidermy pour-over. Quinoa tote bag fashion
                      axe, Godard disrupt migas church-key tofu blog locavore.
                      Thundercats cronut polaroid Neutra tousled, meh food truck
                      selfies narwhal American Apparel.
                    </p>

                    <p>
                      Raw denim McSweeney's bicycle rights, iPhone trust fund
                      quinoa Neutra VHS kale chips vegan PBR&amp;B literally
                      Thundercats +1. Forage tilde four dollar toast, banjo
                      health goth paleo butcher. Four dollar toast Brooklyn
                      pour-over American Apparel sustainable, lumbersexual
                      listicle gluten-free health goth umami hoodie. Synth Echo
                      Park bicycle rights DIY farm-to-table, retro kogi sriracha
                      dreamcatcher PBR&amp;B flannel hashtag irony Wes Anderson.
                      Lumbersexual Williamsburg Helvetica next level.
                      Cold-pressed slow-carb pop-up normcore Thundercats
                      Portland, cardigan literally meditation lumbersexual
                      crucifix. Wayfarers raw denim paleo Bushwick, keytar
                      Helvetica scenester keffiyeh 8-bit irony mumblecore
                      whatever viral Truffaut.
                    </p>

                    <p>
                      Post-ironic shabby chic VHS, Marfa keytar flannel lomo
                      try-hard keffiyeh cray. Actually fap fanny pack yr artisan
                      trust fund. High Life dreamcatcher church-key gentrify.
                      Tumblr stumptown four dollar toast vinyl, cold-pressed
                      try-hard blog authentic keffiyeh Helvetica lo-fi tilde
                      Intelligentsia. Lomo locavore salvia bespoke, twee fixie
                      paleo cliche brunch Schlitz blog McSweeney's messenger bag
                      swag slow-carb. Odd Future photo booth pork belly, you
                      probably haven't heard of them actually tofu ennui
                      keffiyeh lo-fi Truffaut health goth. Narwhal sustainable
                      retro disrupt.
                    </p>

                    <p>
                      Skateboard artisan letterpress before they sold out High
                      Life messenger bag. Bitters chambray leggings listicle,
                      drinking vinegar chillwave synth. Fanny pack hoodie
                      American Apparel twee. American Apparel PBR listicle,
                      salvia aesthetic occupy sustainable Neutra kogi. Organic
                      synth Tumblr viral plaid, shabby chic single-origin coffee
                      Etsy 3 wolf moon slow-carb Schlitz roof party tousled
                      squid vinyl. Readymade next level literally trust fund.
                      Distillery master cleanse migas, Vice sriracha flannel
                      chambray chia cronut.
                    </p>

                    <p>
                      Thanks,
                      <br />
                      Jane
                    </p>
                  </div>
                </CardBody>
                <CardFooter className="bg-white">
                  <ul className="mailbox-attachments d-flex align-items-stretch clearfix">
                    <li>
                      <span className="mailbox-attachment-icon">
                        <i className="far fa-file-pdf"></i>
                      </span>

                      <div className="mailbox-attachment-info">
                        <a href="#" className="mailbox-attachment-name">
                          <i className="fas fa-paperclip"></i>{" "}
                          Sep2014-report.pdf
                        </a>
                        <span className="mailbox-attachment-size clearfix mt-1">
                          <span>1,245 KB</span>
                          <a
                            href="#"
                            className="btn btn-default btn-sm float-right"
                          >
                            <i className="fas fa-cloud-download-alt"></i>
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <span className="mailbox-attachment-icon">
                        <i className="far fa-file-word"></i>
                      </span>

                      <div className="mailbox-attachment-info">
                        <a href="#" className="mailbox-attachment-name">
                          <i className="fas fa-paperclip"></i> App
                          Description.docx
                        </a>
                        <span className="mailbox-attachment-size clearfix mt-1">
                          <span>1,245 KB</span>
                          <a
                            href="#"
                            className="btn btn-default btn-sm float-right"
                          >
                            <i className="fas fa-cloud-download-alt"></i>
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <span className="mailbox-attachment-icon has-img">
                        <img src="/images/photo1.png" alt="Attachment" />
                      </span>

                      <div className="mailbox-attachment-info">
                        <a href="#" className="mailbox-attachment-name">
                          <i className="fas fa-camera"></i> photo1.png
                        </a>
                        <span className="mailbox-attachment-size clearfix mt-1">
                          <span>2.67 MB</span>
                          <a
                            href="#"
                            className="btn btn-default btn-sm float-right"
                          >
                            <i className="fas fa-cloud-download-alt"></i>
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <span className="mailbox-attachment-icon has-img">
                        <img src="/images/photo2.png" alt="Attachment" />
                      </span>

                      <div className="mailbox-attachment-info">
                        <a href="#" className="mailbox-attachment-name">
                          <i className="fas fa-camera"></i> photo2.png
                        </a>
                        <span className="mailbox-attachment-size clearfix mt-1">
                          <span>1.9 MB</span>
                          <a
                            href="#"
                            className="btn btn-default btn-sm float-right"
                          >
                            <i className="fas fa-cloud-download-alt"></i>
                          </a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </CardFooter>
                <CardFooter>
                  <div className="float-right">
                    <button type="button" className="btn btn-default">
                      <i class="fa-solid fa fa-reply"></i> Reply
                    </button>
                    <button type="button" className="btn btn-default">
                      <i className="fas fa-share"></i> Forward
                    </button>
                  </div>
                  <button type="button" className="btn btn-default">
                    <i className="far fa-trash-alt"></i> Delete
                  </button>
                  <button type="button" className="btn btn-default">
                    <i className="fas fa-print"></i> Print
                  </button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ReadMail;
