const url = 'URL'
 
async function getData() {
    const response = await fetch(url)

    switch(response.status) {
      case 200:
        return response.json()
        break;
     default:
        throw Error(response.statusText);
    }
}

async function postData(data) {
    const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
    });
 
    switch(response.status) {
      case 201:
        return response.json()
        break;
      default:
        throw Error(response.statusText);
    }
}
 
async function deleteData(id) {
    const response = await fetch(url + '/' + id, {
    method: 'DELETE',
    });
    
    switch(response.status) {
    case 202:
        return response.json()
        break;
default:
        throw Error(response.statusText);
    }
}
 
export {getData, postData, deleteData}
 
//import { deleteData, getData, postData } from '../classes/apiEndpoints'
//getData().then(data => console.log(data)).catch(error => alert(error));
//postData(data).then(data => console.log(data)).catch(error => alert(error));
//deleteData(id).then(data => console.log(data)).catch(error => alert(error));
