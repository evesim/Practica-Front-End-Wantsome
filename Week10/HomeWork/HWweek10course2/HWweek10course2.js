
    let requestURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            const colorsObj = JSON.parse(request.responseText);
            let colors = Object.keys(colorsObj);
            for (let i = 0; i < colors.length; i++) {
                appendColor(colors[i], colorsObj[colors[i]])
            }
        }
    };

    request.open('GET', requestURL);
    request.send();

    function appendColor(colorText, color) {
        let colorRowDiv = document.createElement('div')
        colorRowDiv.classList.add('color-row')

        let colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = color;

        let colorTextSpan = document.createElement('span');
        colorTextSpan.textContent = colorText;

        colorRowDiv.appendChild(colorDiv);
        colorRowDiv.appendChild(colorTextSpan);

        document.body.appendChild(colorRowDiv);
    }

