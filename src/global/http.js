import axios from 'axios';
// import Cookies from "js-cookie";
axios.defaults.timeout = 50000;
axios.defaults.baseURL = '/api'; 
//定义一个请求拦截器
axios.interceptors.request.use(
  config => {
    // const token = Cookies.get('token');
    // config.data = JSON.stringify(config.data);
    // if (token) {
    //   config.headers = {
    //     'Content-Type': 'application/json;charset=UTF-8',
    //     'Authorization': 'Bearer ' + token
    //   }
    // } else {
      config.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': ''
      }
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);



//http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.status == 403) {
      window.location.href = "/"
    }
    return response;
  },
  error => {
    console.log(error)
    if (error == 'Error: Network Error') {
      alert("后台服务已宕机，请联系服务人员");
      return;
    } else if (error == 'Error: timeout of 50000ms exceeded') {
      alert("服务器连接超时，请联系工作人员");
    // } else if (
    //   error.response.data.message == 'token不存在,请重新登录-----------------浏览器中的token不存在' ||
    //   error.response.data.message == '登录状态过期，请重新登录' ||
    //   error.response.data.message == 'token不存在,请重新登录--------------redis中的token不存在' ||
    //   error.response.data.message == 'token不正确，请重新登陆' ||
    //   error.response.data.message == 'token已经失效'
    // ) {
      // Cookies.remove("token");
      // sessionStorage.removeItem('userMsg')
      // sessionStorage.removeItem('userInfo')
      // localStorage.clear();
      // sessionStorage.clear();
      // window.location.href = "/"
      // alert("登录已过期，请重新登录！");
      // return;
    }
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve,reject) => {
      axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);  
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
