import { View, Text, StyleSheet } from 'react-native'
import { useCallback, useMemo, useRef } from 'react'
import { usePathname } from 'expo-router';
import BottomSheet from '@gorhom/bottom-sheet';
import xlog from '@/src/xlog';

export default function Group() {
  const g = usePathname();
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '50%', '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={styles.container} >
      <Text>Group {g}</Text>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome {g} </Text>
        </View>
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
