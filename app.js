const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.google.com/?hl=id',
      showBooks: true,
      books: [
        { title: 'Sebuah Seni Bersikap Bodo Amat', author: 'Mark Manson', publisher: 'Gramedia Indonesia', year: 2016, img:'assets/1.jpg', isFav:true },
        { title: 'Koala Kumal', author: 'Raditya Dika', publisher: 'Penerbit Cahaya', year: 2013, img:'assets/2.jpg', isFav:false},
        { title: 'Filosofi Kopi', author: 'Dewi Lestari', publisher: 'Visinema', year: 2005, img:'assets/3.jpg', isFav:true },
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
  },
});

app.mount('#app');
