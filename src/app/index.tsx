import { 
    View,
    Text,
    StyleSheet, 
    TextInput, 
    Pressable, 
} from "react-native";
import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "@/constants/colors";
import { useState } from "react";

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = () => {
        setLoading(true);

        console.log({
            email,
            password
        });
    };
    
    return (
        <KeyboardAwareScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid
            extraScrollHeight={20}
            keyboardShouldPersistTaps='handled'
        >
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logoText}>
                        Dev<Text style={{ color: colors.green }}>App</Text>
                    </Text>
                    <Text style={styles.slogan}>
                        O futuro da{'\n'}programação
                    </Text>
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            placeholder="Digite seu email..." 
                            style={styles.input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                
                    <View>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            placeholder="Digite sua senha..." 
                            style={styles.input}
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <Pressable style={styles.button} onPress={handleSignIn}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </Pressable>

                    <Link href='/(auth)/signUp/page' style={styles.link}>
                        <Text>Ainda não possui uma conta? Cadastre-se</Text>
                    </Link>
                </View>
            </View>            
        </KeyboardAwareScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor: colors.zinc,
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14, 
        paddingTop: 130,
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 8,
    },
    slogan: {
        fontSize: 34,
        color: colors.white,
        marginBottom: 37,
    },
    form: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 15,
        paddingLeft: 14,
        paddingRight: 14,
    },
    label: {
        color: colors.zinc,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingTop: 14,
        paddingBottom: 14,
    },
    button: {
        backgroundColor: colors.green,
        padding: 14,
        paddingBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 8,
    },
    buttonText: {
        color: colors.zinc,
        fontWeight: 'bold',
    },
    link: {
        textAlign: 'center',
        paddingTop: 12,
        fontSize: 13
    }
});