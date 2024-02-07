import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

import { styles } from './actionPanel.styles';

const ActionsPanel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <FontAwesome5 name="heart" size={24} color="black" />
        <FontAwesome5 name="comment" size={24} color="black" />
        <FontAwesome5 name="telegram-plane" size={24} color="black" />
      </View>
      <View>
        <FontAwesome5 name="bookmark" size={24} color="black" />
      </View>
    </View>
  );
};

export default ActionsPanel;
