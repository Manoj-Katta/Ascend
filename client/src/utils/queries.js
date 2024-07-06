const API_BASE_URL = 'http://localhost:3001/api';

export const fetchMe = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/protected`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Auth.getToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUser = async (username) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${username}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch users data');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
