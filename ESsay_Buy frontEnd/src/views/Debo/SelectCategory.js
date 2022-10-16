import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

import {
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Table
} from "reactstrap";

import { ReactSession } from "react-client-session";

function SelectCategory() {
  const history = useHistory();

  document.documentElement.classList.remove("nav-open");

  const clickMenFash = () => {
    history.push({
      pathname: "/AddItemsMen",
    });
  };
  const clickJewelery = () => {
    history.push({
      pathname: "/AddItemJewelery",
    });
  };
  const clickBags = () => {
    history.push({
      pathname: "/AddItemsBags",
    });
  };

  return (
    <>
        <div>
            <Table>
                <Row
                     className="dashboard-card"
                    onClick={clickMenFash}
                    >
                        Men's Fashion
                </Row>
                
                <Row
                className="dashboard-card"
                onClick={clickJewelery}
                >
                    Jewelery
                </Row>
                <Row
                    className="dashboard-card"
                    onClick={clickBags}
                    >
                        Bags
                </Row>
            </Table>
        </div>
    </>
  );
}

export default SelectCategory;
