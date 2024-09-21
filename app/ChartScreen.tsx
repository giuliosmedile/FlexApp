import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryLine,
} from "victory-native";
import { Card } from "react-native-paper";

// Function to generate mock data for the last 5 days
const generateMockData = () => {
  const today = new Date();
  const data = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const startHour = 7 + i;
    const endHour = startHour + Math.floor(Math.random() * 4) + 5; // Random between 5 and 8 hours
    data.push({ x: `${day}/${month}`, y: endHour, y0: startHour });
  }
  return data.reverse(); // Reverse to have ascending order
};

let mockData = generateMockData();

function ChartScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Card style={{ marginBottom: 20 }}>
        <Card.Content>
          <Text>Bar Chart for Last 5 Days</Text>
          <VictoryChart domainPadding={30}>
            <VictoryAxis tickFormat={(t) => `${t}`} label="Date (dd/mm)" />
            <VictoryAxis
              dependentAxis
              tickFormat={(t) => `${t}:00`}
              domain={[7, 20]}
            />
            <VictoryBar data={mockData} x="x" y="y" />
            <VictoryLine
              data={mockData}
              x="x"
              y="y0"
              style={{
                data: { stroke: "red", strokeDasharray: "4,4" },
              }}
            />
            <VictoryLine
              data={mockData}
              x="x"
              y="y"
              style={{
                data: { stroke: "red", strokeDasharray: "4,4" },
              }}
            />
          </VictoryChart>
          <Text>{JSON.stringify(mockData, null, 2)}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

export default ChartScreen;
