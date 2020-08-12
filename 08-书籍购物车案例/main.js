const vue = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: "《Unix编程艺术》",
        date: '2006-2',
        price: 59.00,
        count: 1
      },

      {
        id: 3,
        name: "《编程珠玑》",
        date: '2008-10',
        price: 39.00,
        count: 1
      },


      {
        id: 4,
        name: "《代码大全》",
        date: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  computed: {
    totalPrice() {
      let total = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   total += this.books[i].count * this.books[i].price
      // }

      return this.books.reduce((prev, e) => prev + e.price * e.count, 0)
      console.log('a' + a)
      let nums = [11, 12, 13, 14, 15]
      let nums2 = nums.filter(function (e) {
          return e < 13
      })

      let nums3 = nums.map(function (e) {
        return e * 100
      })



      return total
    }
  },
  methods: {
    // getFinalPrice(price) {
    //   return "￥" + price.toFixed(2)
    // }
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      if (this.books[index].count == 0) {
        return
      }
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2)
    }
  }
})