import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "reactstrap";
import "./accordion.css";

function Accordions() {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Collapsible Accordion</CardTitle>
      </CardHeader>
      <CardBody>
        <Accordion open={open} toggle={toggle}>
          <AccordionItem className="mb-3">
            <AccordionHeader targetId="1" className="accordion-one">
              {" "}
              Collapsible Group Item #1
            </AccordionHeader>
            <AccordionBody accordionId="1" className="p-2">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="mb-3">
            <AccordionHeader targetId="2" className="accordion-two">
              Collapsible Group Danger
            </AccordionHeader>
            <AccordionBody accordionId="2" className="p-2">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS..
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="mb-3">
            <AccordionHeader targetId="3" className="accordion-three">
              Collapsible Group Success
            </AccordionHeader>
            <AccordionBody accordionId="3" className="p-2">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
}

export default Accordions;
