import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(10)].map((_, index) => ({
  id: index,
  avatarUrl: `/static/icons/test.svg`,
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['pending', 'pass', 'fail']),
  name: [
    'Test different call flow nodes',
    'Test voicemail',
    'Test speech recognition using Text to Speech',
    'Test call logs',
    'Test length of outbound calls',
    'Test recents are updated with recent phone',
    'Test tags',
    'Test changing phone number',
    'Test length of inbound call',
    'Test greeting',
  ][index],
}));

export default users;
