const { Box } = require('@mui/material');
const { styled } = require ('@mui/system');

// reusable css property within a box

const FlexBetween = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
});

export default FlexBetween;