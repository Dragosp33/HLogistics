import axios from 'axios';
const baseUrl = '/send_form';

const sendMailInformation = async (body) => {
  console.log('body mail: ', body);
  const response = await axios.post(baseUrl, body);
  return response.data;
};

export default { sendMailInformation };
