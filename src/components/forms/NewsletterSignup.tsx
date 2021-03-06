import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Center,
  Flex,
  FormControl,
  Input,
  Stack,
  useToast
} from '@chakra-ui/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

import { ImportantText } from '../UI/headings';
import { PageText } from '../UI/text';

import { api } from './api';
import { useShadowAnimation } from '../../hooks';
import { NewsletterFormData } from '../../types';

import { TOAST_OPTIONS } from '../../constants';

const MotionBox = motion<BoxProps>(Box);
const MotionButton = motion<ButtonProps>(Button);

export const NewsletterSignup: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset
  } = useForm<NewsletterFormData>({
    mode: 'onChange'
  });
  const toast = useToast();
  const { shadowBoxControl, setButtonHovered } = useShadowAnimation();

  const onSubmit = async (data: NewsletterFormData) => {
    if (errors.email) {
      toast({
        ...TOAST_OPTIONS,
        title: 'Email is not valid, please try again.',
        status: 'error'
      });

      reset();
      return;
    }

    return api.newsletter
      .submit(data)
      .then(async res => {
        if (res.ok) {
          toast({
            ...TOAST_OPTIONS,
            title: 'Thank you for sign up!',
            status: 'success'
          });

          reset();
        } else {
          const errorText = await res.text();

          // only display server error details to the user when they are 400 class errors
          if (res.status < 400 || res.status > 499) {
            throw new Error(errorText);
          }

          toast({
            ...TOAST_OPTIONS,
            title: errorText,
            status: 'error'
          });

          reset();
        }
      })
      .catch(err => {
        toast({
          ...TOAST_OPTIONS,
          title: 'Something went wrong. Please try again',
          status: 'error'
        });

        console.error('There has been a problem with your operation: ', err.message);

        reset();
      });
  };

  return (
    <Flex
      id='newsletter'
      direction={{ base: 'column', lg: 'row' }}
      justifyContent='center'
      alignItems='center'
      bgGradient='linear(to-br, brand.newsletter.bgGradient.start 10%, brand.newsletter.bgGradient.end 100%)'
      px={{ base: 10, md: 20, lg: 32, xl: 48 }}
      py={8}
    >
      <Stack mt={2} mb={{ base: 6, lg: 0 }} mr={{ base: 0, lg: 12 }}>
        <ImportantText color='brand.ready.text' textAlign={{ base: 'center', lg: 'left' }} as='h3'>
          Join our newsletter to stay tuned!
        </ImportantText>

        <PageText textAlign={{ base: 'center', lg: 'left' }} fontSize='input'>
          Sign up to receive ESP updates to your inbox! You&apos;ll hear from us every few weeks,
          and we&apos;ll only ever contact you with ESP news.
        </PageText>
      </Stack>

      <Stack w={{ base: '100%', md: '85%' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction={{ base: 'column', md: 'row' }}>
            <FormControl id='email-control' isRequired mb={{ base: 3, md: 0 }}>
              <Input
                id='newsletter-email'
                type='email'
                placeholder='Enter your email'
                bg='white'
                borderRadius={0}
                borderColor='brand.border'
                h='56px'
                maxW={{ base: '100%' }}
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
            </FormControl>

            <Center>
              <Box position='relative'>
                <MotionBox
                  backgroundColor='brand.button.shadow'
                  h='56px'
                  w='148px'
                  position='absolute'
                  animate={shadowBoxControl}
                  opacity={!isValid ? 0 : 1}
                />

                <MotionButton
                  backgroundColor='brand.accent'
                  w='148px'
                  py={7}
                  borderRadius={0}
                  justifyContent='center'
                  alignItems='center'
                  type='submit'
                  isDisabled={!isValid}
                  _hover={{ bg: 'brand.hover' }}
                  whileHover={{ x: -1.5, y: -1.5 }}
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                  pointerEvents={!isValid ? 'none' : 'auto'}
                >
                  <ImportantText color='white'>Sign up</ImportantText>
                </MotionButton>
              </Box>
            </Center>
          </Flex>
        </form>
      </Stack>
    </Flex>
  );
};
