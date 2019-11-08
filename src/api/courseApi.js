import Request from './request'

export default function getTitles (id) {
  return Request(`http://localhost:4000/courseContent?id=${id}`)
}

// const courseApi = {
//   getTitles: function (id) {
//     console.warn('using api')
//     return Request(`http://localhost:4000/courseContent?id=${id}`)
//     // return fetch(`http://localhost:4000/courseContent?id=${id}`)
//     //   .then(response => response.json())
//     //   .then(json => json)
//   }
// }

// export default courseApi
