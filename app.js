const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'http://google.com',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'Patrick Routhfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'The final empuire', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: true},
                {title: 'The way of kings', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: false},
            ],
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Words of Randiacne'
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvents(e, data){
            console.log(e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})


app.mount('#app')