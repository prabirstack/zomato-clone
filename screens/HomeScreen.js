import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Pressable,
  Image,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Categories from '../components/Categories'
import ItemComponent from '../components/ItemComponent'
import HotelsData from '../data/HotelsData'
import Hotel from '../components/Hotel'

const HomeScreen = () => {
  const data = HotelsData
  return (
    <ScrollView style={{ margin: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F8F8F8',
          padding: 8,
          borderRadius: 4,
          borderColor: '#B0B0B0',
        }}
      >
        <AntDesign name='search1' size={20} color='#E52B50' />
        <TextInput
          style={{ paddingLeft: 5 }}
          placeholder='Restaurant name, cuisines, or a dish'
        />
      </View>
      <Categories />
      <Pressable style={{ marginTop: 8 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg',
            }}
          />
        </View>
      </Pressable>
      <ItemComponent />
      {data.map((item) => (
        <Hotel restaurant={item} key={item.id} />
      ))}
    </ScrollView>
  )
}
export default HomeScreen
const styles = StyleSheet.create({
  image: {
    width: 172,
    height: 99,
    margin: 8,
    borderRadius: 8,
  },
})
