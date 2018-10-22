(() => {
    const form = document.querySelector('form');
    const mailResponse = document.querySelector('#mail-response');

    form.onsubmit = e => {
        e.preventDefault();

        const data = {};
        const formElements = Array.from(form);
        formElements.map(input => (data[input.name] = input.value));

        console.log(JSON.stringify(data));

        let xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action, true);
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.send(JSON.stringify(data));

        xhr.onloadend = async response => {
            if (response.target.status === 200) {
                await form.reset();
                mailResponse.innerHTML = '<i class="fas fa-check"></i>&nbsp;&nbsp;Thanks for the message!';
                mailResponse.className = "form-control mail-response show";

                //remove class after 3 seconds
                setTimeout(function () {
                    mailResponse.className = mailResponse.className.replace("show", "");
                    mailResponse.innerHTML = '';
                }, 3000);
            } else {
                mailResponse.innerHTML = 'Something went wrong';
                console.error(JSON.parse(response.target.response).message);
            }
        };
    };
})();
