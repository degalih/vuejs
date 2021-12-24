const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.google.com/?hl=id',
      showBooks: true,
      books: [
        { title: 'Sebuah Seni Bersikap Bodo Amat', author: 'Mark Manson', publisher: 'Gramedia Indonesia', year: 2016 },
        { title: 'Koala Kumal', author: 'Raditya Dika', publisher: 'Penerbit Cahaya', year: 2013 },
        { title: 'Filosofi Kopi', author: 'Dewi Lestari', publisher: 'Visinema', year: 2005 },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount('#app');
