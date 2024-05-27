import { StyleSheet, Text, View, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Hotel = ({ restaurant }) => {
  return (
    <View>
      <View
        style={{
          position: 'relative',
          margin: 10,
          backgroundColor: '#fff',
          elevation: 3,
          shadowOffset: { width: 1, height: 1 },
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        <Image
          style={{
            width: '100%',
            aspectRatio: 16 / 9,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          source={{ uri: restaurant.featured_image }}
        />
        <View
          style={{
            position: 'absolute',
            right: 20,
            top: 140,
            backgroundColor: '#ffffff',
            padding: 4,
            borderRadius: 4,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <AntDesign name='clockcircleo' size={16} color='black' />
          <Text>{restaurant.time}</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 120,
            backgroundColor: '#007FFF',
            padding: 8,
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#ffffff' }}>
            {restaurant.offer}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Upto ₹40</Text>
        </View>
        <View
          style={{
            padding: 12,
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                marginBottom: 2,
              }}
            >
              {restaurant.name}
            </Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>
              {restaurant.cuisines}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#17B169',
              padding: 4,
              gap: 4,
              borderRadius: 4,
            }}
          >
            <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '600' }}>
              {restaurant.aggregate_rating}
            </Text>
            <AntDesign name='star' size={16} color='#fff' />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 12,
          }}
        >
          <Text
            style={{
              borderColor: '#D3D3D3',
              borderWidth: 1,
              height: 1,
              marginBottom: 12,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#6CB4EE',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AntDesign name='doubleright' size={16} color='white' />
              </View>
              <Text>{restaurant.no_of_Delivery} + Orders placed here</Text>
            </View>
            <View
              style={{
                backgroundColor: '#00563B',
                padding: 4,
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  backgroundColor: '#FFAC1C',
                  paddingHorizontal: 4,
                }}
              >
                MAX SAFETY
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '600',
                  color: '#fff',
                  marginTop: 2,
                  textAlign: 'center',
                  letterSpacing: 4,
                }}
              >
                DELIVERY
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Hotel
const styles = StyleSheet.create({})
