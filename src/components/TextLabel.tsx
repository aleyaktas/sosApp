import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from '../themes/Icon';

const TextLabel: React.FC<{
  title: string;
  content: string | null;
  onPress?: () => void;
}> = ({title, content, onPress}) => (
  <View style={styles.labelContainer}>
    <Text style={styles.labelText}>{title}</Text>
    {content ? (
      <TouchableOpacity
        onPress={onPress}
        style={styles.flexRow}
        activeOpacity={0.7}>
        <Text style={styles.labelContent}>
          {content.charAt(0).toUpperCase() + content.slice(1)}
        </Text>
      </TouchableOpacity>
    ) : (
      <Icon name="Lock" color="#6c6c6c" width={16} height={16} />
    )}
  </View>
);

const styles = StyleSheet.create({
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelText: {
    fontWeight: 'bold',
    color: 'black',
  },
  labelContent: {
    color: '#6c6c6c',
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

export default TextLabel;
