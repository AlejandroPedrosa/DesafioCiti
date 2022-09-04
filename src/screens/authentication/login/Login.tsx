import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {useAppDispatch} from '../../../redux/hooks';
import {actionSignInEmail} from '../../../services/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const Login = () => {
  const dispatch = useAppDispatch();

  const EMAIL_REGEX = /^[\w-.]+\+?\w*@([\w-]+\.)+[\w-]{2,4}$/;

  type FormInputs = {
    email: string;
    password: string;
  };

  const {
    control,
    handleSubmit,
    setError,
    getValues,
    formState: {errors},
  } = useForm<FormInputs>();

  const data = {
    email: 'alejandro.pedrosa00@gmail.com',
    password: '12345678',
  };

  const onSubmit = () => {
    const formValues = getValues();
    dispatch(actionSignInEmail(formValues));
  };
  return (
    <View style={{backgroundColor: '#DDE6EE', flex: 1}}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View
            style={{
              width: 350,
              height: 250,
              alignSelf: 'center',
            }}>
            <Image
              source={{
                uri: 'https://assets.stickpng.com/images/58429094a6515b1e0ad75abd.png',
              }}
              style={{width: '100%', height: '100%'}}
              resizeMode={'contain'}
            />
          </View>
          <View style={{}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#C0CFDA',
                backgroundColor: '#EFEFEF',
                width: '90%',
                alignSelf: 'center',
                borderRadius: 6,
              }}>
              <Controller
                control={control}
                name="email"
                defaultValue=""
                rules={{
                  required: {
                    value: true,
                    message: 'Este campo es obligatorio',
                  },
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Por favor ingrese un email correcto',
                  },
                }}
                render={({field: {onBlur, onChange, value}}) => (
                  <TextInput
                    style={{color: '#006B41'}}
                    onChangeText={text => onChange(text)}
                    onBlur={onBlur}
                    value={value}
                    placeholder={'Usuario o email'}
                    placeholderTextColor={'#006B41'}
                  />
                )}
              />
            </View>
            <View
              style={{
                marginLeft: 20,
              }}>
              {errors.email && (
                <Text style={{color: 'red', fontSize: 12}}>
                  {' ' + errors.email.message}
                </Text>
              )}
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#C0CFDA',
                borderRadius: 6,
                backgroundColor: '#EFEFEF',
                width: '90%',
                alignSelf: 'center',
                marginTop: 15,
                marginBottom: 2,
              }}>
              <Controller
                control={control}
                name="password"
                defaultValue=""
                rules={{
                  required: {
                    value: true,
                    message: 'Este campo es obligatorio',
                  },
                }}
                render={({field: {onBlur, onChange, value}}) => (
                  <TextInput
                    onBlur={onBlur}
                    placeholderTextColor={'#006B41'}
                    onChangeText={text => onChange(text)}
                    style={{color: '#006B41'}}
                    multiline={false}
                    placeholder={'Contraseña'}
                    secureTextEntry={true}
                    value={value}
                  />
                )}
              />
            </View>
            <View
              style={{
                marginLeft: 20,
                marginBottom: 15,
              }}>
              {errors.password && (
                <Text style={{color: 'red', fontSize: 12}}>
                  {' ' + errors.password.message}
                </Text>
              )}
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Pressable
              style={{
                paddingVertical: 10,
                borderRadius: 6,
                backgroundColor: '#006B41',
                width: '90%',
                alignItems: 'center',
              }}
              onPress={handleSubmit(onSubmit)}>
              <Text style={{color: '#EFEFEF'}}>Ingresar</Text>
            </Pressable>
          </View>
          <View style={{marginTop: 30, marginBottom: 5, alignItems: 'center'}}>
            <Text>Ingresar con otros metodos</Text>
          </View>
          <View style={{alignItems: 'center', marginVertical: 5}}>
            <Pressable
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderRadius: 6,
                backgroundColor: '#E23628',
                width: '90%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => dispatch(actionSignInEmail(data))}>
              <Icon name={'google'} size={24} color={'white'} />
              <Text style={{color: '#EFEFEF', marginLeft: 10}}>
                Continua con Google
              </Text>
            </Pressable>
          </View>
          <View style={{alignItems: 'center', marginVertical: 5}}>
            <Pressable
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderRadius: 6,
                backgroundColor: '#3A5998',
                width: '90%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => dispatch(actionSignInEmail(data))}>
              <Icon name={'facebook'} size={24} color={'white'} />
              <Text style={{color: '#EFEFEF', marginLeft: 10}}>
                Continua con Facebook
              </Text>
            </Pressable>
          </View>
          <View style={{alignItems: 'center', marginVertical: 5}}>
            <Pressable
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderRadius: 6,
                backgroundColor: '#665A51',
                width: '90%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => dispatch(actionSignInEmail(data))}>
              <Icon name={'apple'} size={24} color={'white'} />
              <Text style={{color: '#EFEFEF', marginLeft: 10}}>
                Continua con Apple ID
              </Text>
            </Pressable>
          </View>
          <View style={{marginVertical: 25, alignItems: 'center'}}>
            <Pressable onPress={() => console.log('registrase')}>
              <Text>¿No tienes cuenta? Regístrate aca</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
