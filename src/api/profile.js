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
  }&location=${item.location}&latitude=${item.latitude}&longitude=${
    item.longitude
  }`;
  return fetch(`${Config.profileUrl}/api/create-profile`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded' // <-- Specifying the Content-Type
    }),
    body
  });
};

export const editProfile = item => {
  const body = `name=${item.name}&email=${item.email}&dob=${
    item.dob
  }&location=${item.location}&latitude=${item.latitude}&longitude=${
    item.longitude
  }`;
  return fetch(`${Config.profileUrl}/api/edit-profile/${item._id}`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded' // <-- Specifying the Content-Type
    }),
    body
  });
};
