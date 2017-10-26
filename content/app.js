import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': 'Helvetica',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'belt': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '10px',
    'marginLeft': [{ 'unit': 'px', 'value': 5 }],
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'textTransform': 'uppercase'
  },
  '#menu-bar': {
    'background': 'indigo',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  '#menu-bar h1': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'fontWeight': 'normal',
    'display': 'inline-block'
  },
  '#menu-bar ul': {
    'float': 'right',
    'listStyleType': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }]
  },
  '#menu-bar li': {
    'float': 'right',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  '#menu-bar a': {
    'color': '#fff'
  },
  'main': {
    'background': '#eee',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }],
    'borderRadius': '10px'
  },
  'content': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'content button': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '10px',
    'cursor': 'pointer',
    'color': '#777',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(20,20,20,0.1)' }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'content input[type="submit"]': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '10px',
    'cursor': 'pointer',
    'color': '#777',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(20,20,20,0.1)' }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'content button:nth-child(2)': {
    'float': 'right'
  },
  'content remove': {
    'float': 'right',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'background': '#fff',
    'width': [{ 'unit': 'px', 'value': 18 }],
    'textAlign': 'center',
    'borderRadius': '20px',
    'color': 'red',
    'cursor': 'pointer',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'content ul': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'content li': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e2e2e2' }],
    'color': '#444'
  },
  'content li span': {
    'float': 'right'
  },
  'content li h3': {
    'display': 'inline-block',
    'fontWeight': 'normal',
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'content input': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': 'px', 'value': 10 }, { 'unit': '%H', 'value': 0.05 }],
    'borderRadius': '10px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'content input[type="submit"]:last-child': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'auto' }]
  }
});
