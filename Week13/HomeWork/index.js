const fetchExample = () => {
    fetch('./world.json').then(function (response) {
        return response.json();
    }).then(function (myJson) {
        // console.log(JSON.stringify(myJson));
        window.localStorage.setItem('answer', JSON.stringify(myJson))
    });

}
