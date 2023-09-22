let $div = $('#part-one');

function getFavNumber(){
    let promise = axios.get('http://numbersapi.com/42?json').then(
        res => $div.append($('<p>').text(res.data.text))
    );
};
getFavNumber();

function getMultipleNums(){
    let promise = axios.get('http://numbersapi.com/1..5').then(function(res){
        for(key in res.data){
            $div.append($('<p>').text(res.data[key]))}}
    )
};
getMultipleNums();

function getMultipleFacts(){
    let promise = axios.get('http://numbersapi.com/42?json')
    .then(res => 
        {$div.append($('<p>').text(res.data.text))
        return axios.get('http://numbersapi.com/42?json')
        })
    .then(res => 
        {$div.append($('<p>').text(res.data.text))
        return axios.get('http://numbersapi.com/42?json')
        })
    .then(res => 
        {$div.append($('<p>').text(res.data.text))
        return axios.get('http://numbersapi.com/42?json')
        })
    .then(res => 
        {$div.append($('<p>').text(res.data.text))
        return axios.get('http://numbersapi.com/42?json')
        })
}
getMultipleFacts();