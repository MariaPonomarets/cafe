import React, { Fragment } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import ImageBg from 'components/BackGrounds/ImageBg';
import TextInput from 'components/Inputs/TextInput';
import SubmitButton from 'components/Buttons/Submit';
import SafeArea from 'components/SafeArea';
import AuthForm from 'containers/Auth';

const Auth = () => (
  <SafeArea>
    <ImageBg mod="start">
      <AuthForm>
        {({ emailProps, passwordProps, submitButtonProps, errors }) => (
          <Fragment>
            <TextInput {...emailProps}/>
            <TextInput {...passwordProps}/>
            <SubmitButton {...submitButtonProps}>
              Login
            </SubmitButton>
          </Fragment>
        )}
      </AuthForm>
    </ImageBg>
  </SafeArea>
);

export default Auth;