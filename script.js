Vue.component('star-rating', VueStarRating.default);

var app = new Vue({
  el: '.app',
  data: {
    page: '',
    addedName: '',
    addedComment: '',
    comments: {},
    rating: 0,
    totalRating: {},
    numberRatings: {},
    averageRating: {},
  },
  methods: {

    addComment: function() {
      if (!(this.page in this.comments))
	       Vue.set(app.comments, this.page, new Array);
	    this.comments[this.page].push({author:this.addedName,text:this.addedComment,time:Date()});
      this.addedName = '';
      this.addedComment = '';
    },
      /*addRating: function(rating) {

	  if(!this.number in this.averageRating){
	      Vue.set(app.averageRating, this.number, 0);
	      Vue.set(app.totalRating, this.number, 0);
	      Vue.set(app.numberRatings, this.number, 0);
	  }

	  this.rating = rating;
	  this.totalRating[this.number] += this.rating;
	  console.log(this.totalRating[this.number]);
	  this.numberRatings[this.number] += 1;
	  this.averageRating[this.number] = (this.totalRating[this.number]/this.numberRatings[this.number]);
	  console.log(this.averageRating[this.number]);
  },*/
  },

});
