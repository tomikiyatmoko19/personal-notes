const getData = () => ([
  {
    id: 1,
    tittle: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z',
  },{
    id: 2,
    tittle: "Javascript",
    body: "JavaScript adalah bahasa pemrograman yang digunakan untuk pengembangan website agar lebih dinamis",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z',
  }
]);

const formatDate = (date) => {
  const formatted = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", formatted)
}

export { getData, formatDate };
