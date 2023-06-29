const TOKEN = 'token';
const url = process.env.REACT_APP_BASE_URL;

export const getAllPost = async () => {
  try {
    const response = await fetch(`${url}/api/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return await data.data;
    } else {
      alert('로그인 실패');
      throw new Error('로그인에 실패했습니다.');
    }
  } catch (error) {
    console.error(error);
    // 에러 처리
  }
};

export const getByPostId = async postId => {
  try {
    const response = await fetch(`${url}/posts/${postId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      alert('게시글 조회 실패');
      throw new Error('게시글 조회 실패');
    }
  } catch (error) {
    console.error(error);
    // 에러 처리
  }
};

export const create = async (title, content) => {
  try {
    const response = await fetch(`${url}/posts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      alert('게시글 조회 실패');
      throw new Error('게시글 조회 실패');
    }
  } catch (error) {
    console.error(error);
    // 에러 처리
  }
};

export const update = async (postId, title, content) => {
  try {
    const response = await fetch(`${url}/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      alert('게시글 조회 실패');
      throw new Error('게시글 조회 실패');
    }
  } catch (error) {
    console.error(error);
    // 에러 처리
  }
};

export const remove = async postId => {
  try {
    const response = await fetch(`${url}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      alert('게시글 조회 실패');
      throw new Error('게시글 조회 실패');
    }
  } catch (error) {
    console.error(error);
    // 에러 처리
  }
};