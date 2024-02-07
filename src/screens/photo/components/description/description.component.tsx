import { Text } from 'react-native';

import { useAppSelector } from '../../../../hooks/redux.hook';

import { styles } from './description.styles';

const Description = () => {
  const { description, username } = useAppSelector((state) => state.postSlice);

  return (
    <>
      {username && description && (
        <Text>
          <Text style={styles.name}>{username}</Text> <Text>{description}</Text>
        </Text>
      )}
    </>
  );
};

export default Description;
