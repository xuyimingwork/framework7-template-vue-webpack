import routes from '@/route/routes';
import pkgJson from '~/package.json';

const f7params = {
  id: `${pkgJson.name}@${pkgJson.version}`,
  name: pkgJson.name,
  theme: 'auto',
  routes: routes
}; 

export default f7params;