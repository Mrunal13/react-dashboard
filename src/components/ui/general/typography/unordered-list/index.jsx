import React from "react";
import { Card, CardBody, CardHeader, CardTitle, List } from "reactstrap";

function UnorderedList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle class="card-title">
          <i class="fa fa-text-width mr-1"></i>
          Unordered List
        </CardTitle>
      </CardHeader>
      <CardBody>
        <List>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </List>
      </CardBody>
    </Card>
  );
}

export default UnorderedList;
