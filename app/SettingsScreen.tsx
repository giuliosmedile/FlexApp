import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List, Switch, RadioButton, TextInput } from 'react-native-paper';

export default function SettingsScreen() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoUpdate: true,
    locationAccess: false,
    language: 'English',
    theme: 'Light',
  });

  const handleToggle = (key: string) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: !prevSettings[key],
    }));
  };

  const handleChange = (key: string, value: string) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>General Settings</List.Subheader>
        <List.Item
          title="Enable Notifications"
          right={() => (
            <Switch
              value={settings.notifications}
              onValueChange={() => handleToggle('notifications')}
            />
          )}
        />
        <List.Item
          title="Dark Mode"
          right={() => (
            <Switch
              value={settings.darkMode}
              onValueChange={() => handleToggle('darkMode')}
            />
          )}
        />
        <List.Item
          title="Auto-Update"
          right={() => (
            <Switch
              value={settings.autoUpdate}
              onValueChange={() => handleToggle('autoUpdate')}
            />
          )}
        />
        <List.Item
          title="Location Access"
          right={() => (
            <Switch
              value={settings.locationAccess}
              onValueChange={() => handleToggle('locationAccess')}
            />
          )}
        />
        <List.Item
          title="Language"
          description={settings.language}
          onPress={() => handleChange('language', settings.language === 'English' ? 'Spanish' : 'English')}
        />
        <List.Item
          title="Theme"
          description={settings.theme}
          onPress={() => handleChange('theme', settings.theme === 'Light' ? 'Dark' : 'Light')}
        />
      </List.Section>
    </ScrollView>
  );
}