Vue.component('star-rating', VueStarRating.default);

var app = new Vue({
  el: '.app',
  data:{
    color: '#90EE90',
    addedName: '',
    addedComment: '',
    comments1: [],
    comments2: [],
    comments3: [],
    rating: 0,
    totalRating: {},
    numberRatings: {},
    averageRating: {},
  },
  methods: {

    addComment1: function() {
	    this.comments1.push({author:this.addedName,text:this.addedComment,date:this.currentDate()});
      this.addedName = '';
      this.addedComment = '';
      this.color = 'transparent';
    },
    addComment2: function() {
	    this.comments2.push({author:this.addedName,text:this.addedComment,date:this.currentDate()});
      this.addedName = '';
      this.addedComment = '';
      this.color = 'transparent';
    },
    addComment3: function() {
	    this.comments3.push({author:this.addedName,text:this.addedComment,date:this.currentDate()});
      this.addedName = '';
      this.addedComment = '';
      this.color = 'transparent';
    },
    currentDate: function() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0
      var hour = today.getHours();
      var minutes = today.getMinutes();

      var yyyy = today.getFullYear();
      if(dd<10){
          dd='0'+dd;
      }
      if(mm<10){
          mm='0'+mm;
      }
      if(minutes < 10){
        minutes='0'+minutes;
      }
      var today = mm+'/'+dd+'/'+yyyy+ " " + hour + ":" + minutes;
      return today;
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
