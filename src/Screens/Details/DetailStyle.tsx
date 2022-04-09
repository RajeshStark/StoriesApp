import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    key: {
        marginVertical: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1
    },
    textInput: {
        width: 260,
        alignSelf: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 10,
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 60,
        width: 160
    },
    header: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingVertical: 12,
        elevation: 5,
    }
})

export default styles
