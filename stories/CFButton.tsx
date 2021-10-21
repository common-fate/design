import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const CFButton = (props: ButtonProps) => {
	return <Button variant="primary" {...props} />;
};

export default CFButton;
