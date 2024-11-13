import AsyncStorage from '@react-native-async-storage/async-storage';

export const changePassword = async (
  oldPassword: string,
  newPassword: string,
) => {
  try {
    const id = await AsyncStorage.getItem('userId');
    const res = await fetch('https://kelibu.net/api/sos/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'Hilal',
      },
      body: JSON.stringify({
        user_id: id,
        current_password: oldPassword,
        new_password: newPassword,
      }),
    });

    console.log('user id', id);
    console.log('old password', oldPassword);
    console.log('new password', newPassword);

    const data = await res.json();

    console.log('Change Password Data:', data);

    return data;
  } catch (error) {
    console.error('Change Password Error:', error);
  }
};

export const deleteAccount = async () => {
  try {
    const id = await AsyncStorage.getItem('userId');
    const res = await fetch('https://kelibu.net/api/sos/delete-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'Hilal',
      },
      body: JSON.stringify({
        user_id: id,
      }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Delete Account Error:', error);
  }
};
