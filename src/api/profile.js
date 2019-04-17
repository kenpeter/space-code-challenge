import Config from '../config';

export const getProfiles = () => {
  /* eslint-disable no-undef */
  return fetch(Config.profileUrl, {
    method: 'GET'
  });
};

export const createProfile = item => {
  const body = `name=${item.name}&email=${item.email}&dob=${
    item.dob
  }&location=${item.location}`;
  return fetch(`${Config.profileUrl  }/api/create-profile`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded' // <-- Specifying the Content-Type
    }),
    body
  });
};
