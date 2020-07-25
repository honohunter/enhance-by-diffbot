import InfraRegular from './Infra-Regular.otf';
import InfraSemiBold from './Infra-SemiBold.otf';

const Infra = [
  {
    fontFamily: 'Infra',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('Infra'),
      local('Infra-Regular'),
      url(${InfraRegular}) format('opentype')
    `,
  },
  {
    fontFamily: 'Infra',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 600,
    src: `
      local('Infra'),
      local('Infra-Regular'),
      url(${InfraSemiBold}) format('opentype')
    `,
  },
];

export default Infra;
