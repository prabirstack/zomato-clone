import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'

const items = [
  {
    id: '1',
    name: 'Fastest delivery',
  },
  {
    id: '2',
    name: 'Rating 4.0+',
  },
  {
    id: '3',
    name: 'Offers',
  },
  {
    id: '4',
    name: 'Cuisines',
  },
  {
    id: '5',
    name: 'MAX Safety',
  },
  {
    id: '6',
    name: 'Pro',
  },
]
const Categories = () => {
  return (
    <View style={{ marginTop: 12 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={items}
        renderItem={({ item }) => (
          <Pressable
            style={{
              backgroundColor: '#ff8080',
              marginHorizontal: 8,
              padding: 4,
              borderRadius: 4,
            }}
          >
            <Text style={{ color: '#fff' }}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}
export default Categories
const styles = StyleSheet.create({})
