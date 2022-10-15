import React, { useEffect, useState } from "react";
import "../../css/common.css";
import "../../css/Thivanka/report.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import VoiceOverOffSharpIcon from "@mui/icons-material/VoiceOverOffSharp";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

function UserReport() {
  const [graph, setGraphDetails] = useState([]);
  const [userData, setUserData] = useState([]);
  const [inactiveUsers, setInactiveUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [incompleteUsers, setIncompleteUsers] = useState([]);
  const [count, setcount] = useState(false);

  function graphData() {
    setInactiveUsers([]);
    return new Promise((resolve) => {
      axios
        .get("http://localhost:8000/user/details/getall")
        .then((res) => {
          if (res.data.status === false) {
            alert(res.data.message);
          } else {
            setGraphDetails(res.data);
            setUserData(res.data);
            console.log(
              getDifferenceInDays(new Date(res.data[1].loginDate), new Date())
            );

            resolve(true);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  }

  async function callFunc() {
    await graphData();
  }

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  const checkData = async () => {
    setInactiveUsers([]);
    setIncompleteUsers([]);
    userData.map((element) => {
      const dif = getDifferenceInDays(new Date(), new Date(element.loginDate));
      console.log(element);
      if (element.bdate == "0") {
        let userArray = incompleteUsers;
        userArray.push(element);
        setIncompleteUsers(userArray);
      }

      if (Math.round(dif) > 7) {
        let array = inactiveUsers;
        array.push(element);
        setInactiveUsers(array);
      } else {
        let array2 = activeUsers;
        array2.push(element);
        setActiveUsers(array2);
      }

      setcount(true);
    });
  };

  useEffect(() => {
    callFunc();
  }, []);

  useEffect(() => {
    if (!count) checkData();
  }, [userData]);

  const data01 = [
    { name: "Active Clients", value: activeUsers.length },
    { name: "Inactive Clients", value: inactiveUsers.length },
  ];

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="report-header-container">
          <div className="report-header-section-wrapper">
            <div style={{ width: "30%", textAlign: "end" }}>
              <PersonAddAltSharpIcon fontSize="large" color="success" />
            </div>
            <div style={{ width: "70%", textAlign: "center" }}>
              <p className="report-header-answer">{userData.length}</p>
              <p className="report-header-question">Total Registered Clients</p>
            </div>
          </div>

          <div className="report-header-section-wrapper">
            <div style={{ width: "30%", textAlign: "end" }}>
              <VoiceOverOffSharpIcon fontSize="large" color="error" />
            </div>
            <div style={{ width: "70%", textAlign: "center" }}>
              <p className="report-header-answer2">{inactiveUsers.length}</p>
              <p className="report-header-question">Total Inactive Clients</p>
            </div>
          </div>
          <div className="report-header-section-wrapper">
            <div style={{ width: "30%", textAlign: "end" }}>
              <HowToRegSharpIcon fontSize="large" color="error" />
            </div>
            <div style={{ width: "70%", textAlign: "center" }}>
              <p className="report-header-answer2">{incompleteUsers.length}</p>
              <p className="report-header-question">Total Incomplete Users</p>
            </div>
          </div>
        </div>
        <div className="report-graph-container">
          <div className="report-graph-section-wrapper2 ">
            <h5 style={{ color: "gray" }}>Clients Status</h5>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#032A3E"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default UserReport;
