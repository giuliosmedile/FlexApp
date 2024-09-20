import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, DefaultTheme, Text, withTheme } from "react-native-paper";
import { ScrollView } from "react-native";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

function HomeScreen() {
  const mockProps = {
    flexResidua: "+200",
    orarioIngresso: "08:23",
    orarioUscita: "17:34",
  };

  return (
    <ScrollView>
      <Card style={styles.titleCard}>
        <Text style={styles.flexResiduaText}>{mockProps.flexResidua}</Text>
        <Text style={styles.flexSubtitleText}>Flex residua</Text>
      </Card>
      <Card style={styles.titleCard}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.orariText}>{mockProps.orarioIngresso}</Text>
            <Text style={styles.flexSubtitleText}>Orario di ingresso</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.orariText}>{mockProps.orarioUscita}</Text>
            <Text style={styles.flexSubtitleText}>Orario di uscita</Text>
          </View>
        </View>
        <View>
          <Text style={styles.infoText}>
            Negli ultimi giorni hai accumulato in media {5} minuti di flex al
            giorno.
          </Text>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleCard: {
    marginVertical: 8,
    marginHorizontal: 16, // Reduced margin to bring cards closer
    padding: 16,
  },
  flexResiduaText: {
    textAlign: "center",
    flex: 1,
    fontSize: 60,
    fontWeight: "bold",
  },
  flexSubtitleText: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  orariText: {
    textAlign: "center",
    flex: 1,
    fontSize: 48,
    fontWeight: "600", // Heavy but not bold
  },
  infoText: {
    marginTop: 16,
    textAlign: "left",
    flex: 1,
    fontSize: 16,
    fontWeight: "400", // Light
  },
});

export default HomeScreen;