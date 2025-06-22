import React from 'react';

const orangeStyle = {
    color: '#FFB400'
};

export default function OrangeText({ children }) {
    return <span style={orangeStyle}>{children}</span>;
}
