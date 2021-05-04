export const sizes = {
  navHeight: 63,
  footerHeight: 219,
  navWebOpenHeight: 332,
  contentsWidth: 1200,
  bannerMaxWidth: 1920,
  bannerHeight: 767,
};

export const mixins = {
  setMaxWidth: `
    max-width: ${sizes.contentsWidth}px;
    margin: 0 auto;
  `,
};

export const colors = {
  white: '#fff',
  white2: '#fefefe',
  black: '#000',
  'black-2': '#2d2d2d',
  'black-3': '#393939',
  'black-4': '#030303',
  'black-5': '#1c1c1c',
  'black-6': '#0e0e0e',
  'black-7': '#202020',

  blue: {
    '001': '#1b3e95',
    '002': '#74c7f7',
    '003': '#1a2364',
    '004': '#139bff',
    '005': '#0214ff',
  },
  gray: {
    '001': '#919191',
    '002': '#afafaf',
    '003': '#4c4c4c',
    '004': '#515151',
    '005': '#5b5b5b',
    '006': '#3e3e3e',
    '007': '#747474',
    '008': '#f1f1f1',
    '009': '#e2e2e2',
    '010': '#929292',
    '011': '#cdd1d4',
    '012': '#969696',
    '013': '#525252',
    '014': '#585858',
    '015': '#d9d9d9',
    '016': '#a8a8a8',
    '017': '#959595',
    '018': '#d2d2d2',
    '019': '#464646',
    '020': '#e5e5e6',
    '021': '#bebebe',
    '022': '#474646',
    '023': '#262626',
    '024': '#757575',
    '025': '#363636',
    '026': '#f2f2f2',
    '027': '#343434',
  },
  yellow: {
    '001': '#ffda2f',
    '002': '#fff06c',
  },
  purple: {
    '001': '#8648f8',
    '002': '#8849f5',
    '003': '#730bc5',
    '004': '#8321a1',
    '005': '#b67bc8',
  },
  brown: {
    '001': '#F5EDEB',
  },
  pink: {
    '001': '#f5ecea',
  },
};
