const apiKey = 'cOiIGzc9b1A5xajV0IfRb2CfbC2DVrVI'

export async function getData(section) {
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
    const response = await fetch(url)

    switch(response.status) {
      case 200:
        return response.json()
        break;
     default:
        throw Error(response.statusText);
    }
}

 

