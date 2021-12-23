const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            title: "Sebuah Seni Bersikap Bodo Amat",
            author: "Mark Manson",
            publisher: "Gramedia Indonesia",
            year: 2016
        }
    },
    methods:{
        changeTitle(title){
            this.title= title
        },
        toogleShowBooks(){
            this.showBooks= !this.showBooks;
        }
    }
})

app.mount('#app');