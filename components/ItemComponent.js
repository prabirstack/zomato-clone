import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
const ItemComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 4 }}>
        Eat what makes you happy
      </Text>
      <Pressable>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 11,
          }}
        >
          <View style={{ margin: 6 }}>
            <Image
              style={styles.MiddleImage}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDb8hWL40qKbszAavTSLFkyOcAhvnPmgXw&usqp=CAU',
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'gray',
                margin: 10,
                textAlign: 'center',
              }}
            >
              Thalis
            </Text>
          </View>

          <View style={{ margin: 8 }}>
            <Image
              style={styles.MiddleImage}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fIIZ5yHqkqXHgg9TuQuJ_mFZbINJLt1ODQ&usqp=CAU',
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'gray',
                margin: 10,
                textAlign: 'center',
              }}
            >
              Pizzas
            </Text>
          </View>

          <View style={{ margin: 8 }}>
            <Image
              style={styles.MiddleImage}
              source={{
                uri: 'https://www.thedailymeal.com/img/gallery/the-healthiest-burger-king-items-you-can-eat/l-intro-1671467286.jpg',
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'gray',
                margin: 10,
                textAlign: 'center',
              }}
            >
              Burger
            </Text>
          </View>

          <View style={{ margin: 8 }}>
            <Image
              style={styles.MiddleImage}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsC7uWf7rd0qrXk2zCpasTV8W-HCcr9JeKQ&usqp=CAU',
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'gray',
                margin: 10,
                textAlign: 'center',
              }}
            >
              Dosas
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}
export default ItemComponent
const styles = StyleSheet.create({
  MiddleImage: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
})
