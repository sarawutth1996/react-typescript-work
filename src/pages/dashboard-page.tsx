import { Box, Card, CardBody, Container, Flex, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import Chart from "react-apexcharts";

import ChartArea from "../components/Chart/Area";
import ChartPie from "../components/Chart/Pie";

function Dashboard() {
  const [data, setData] = useState<[]>([]);

  return (
    <Container maxW="container.xl">
        <Card>
          <CardBody>
            <ChartArea />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <ChartPie />
          </CardBody>
        </Card>
    </Container>
  );
}

export default Dashboard;
