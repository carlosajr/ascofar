export async function deslogar() {
    await AsyncStorage.removeItem("ASCOFAR_app_usuario");
    await AsyncStorage.removeItem("ASCOFAR_app_senha");

    await this.props.navigation.navigate('Login')
}