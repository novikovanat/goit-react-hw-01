import Profile from './profile/Profile';
import userData from '../components/profile/userData.json';

export default function App() {
  return <Profile data={userData} />;
}
