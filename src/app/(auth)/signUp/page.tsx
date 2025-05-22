import { View, Text, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { router } from "expo-router";
import colors from "@/constants/colors";
import { Ionicons } from '@expo/vector-icons';
import { supabase } from "@/src/lib/supabase";


export default function Signup() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        // setLoading(true);

        // const { data, error } = await supabase.auth.signUp({
        //     email: email, 
        //     password: password
        // })

        // if (error) {
        //     Alert.alert('Error', error.message);
        //     setLoading(false);
        //     return;
        // }

        // setLoading(false);
        // router.replace('/');
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

                    <Pressable 
                        style={styles.backButton}
                        onPress={() => router.back()}
                    >
                        <Ionicons name="arrow-back" size={24} color={colors.white} />
                    </Pressable>

                    <Text style={styles.logoText}>
                        Dev<Text style={{ color: colors.green }}>App</Text>
                    </Text>
                    <Text style={styles.slogan}>
                        Crie a sua conta
                    </Text>
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>Nome Completo</Text>
                        <TextInput
                            placeholder="Seu nome..." 
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

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

                    <Pressable style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </Pressable>

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
        paddingTop: 80,
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
    backButton: {
        backgroundColor: 'rgba(255,255, 255, 0.55)',
        alignSelf: 'flex-start',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    }
});