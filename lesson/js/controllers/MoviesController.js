function MoviesController() {
    this.text = 'David\'s like list';
    this.newTitle = '';
    this.newRelease = '';
    this.onChange = () => {
        console.log('Change!', this.newTitle);
    };
    this.onFocus = () => {
        console.log('Focus!');
    };
    this.onBLur = () => {
        console.log('Blur!');
    };
    this.likesList = [];
    this.addMovie = () => {
        this.favorites.push({
            title: this.newTitle,
            year: this.newRelease
        })
    };
    this.addToLikes = (movie) => {
        this.likesList.push(movie);
    };
    this.unlike = (index) => {
        this.likesList.splice(index, 1);
    };
    this.favorites = [{
            title: 'The Shawshank Redemption',
            year: '1994',
            popular: true
        },
        {
            title: 'Inception',
            year: '2010',
            popular: false
        },
        {
            title: 'The Matrix',
            year: '1999',
            popular: true
        },
        {
            title: 'Saving Private Ryan',
            year: '1998',
            popular: true
        }
    ];
}

MoviesController.$inject = [];

angular
    .module('app')
    .controller('MoviesController', MoviesController);