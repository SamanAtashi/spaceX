const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const getRockets = async () => {
 const response = await fetch(`${BASE_URL}`);
 try {
   const rockets =await response.json();
   return rockets;
 } catch (error) {
  return {};
 }
};

export default getRockets;