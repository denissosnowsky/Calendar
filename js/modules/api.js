export function fromStringToArray(string){
    return string.replace(/\s/g, '_').replace(/\W/g, '').split('_');
};

const baseURL = 'http://158.101.166.74:8080/api/data/den_sos/';

export const getData = async (entity)=>{
    const result =  await fetch(baseURL+entity);

    if(!result.ok){
        throw new Error(`Fetch failed, status: ${result.status}`);
    }

    return await result.json();
};

export const deleteData = async (entity)=>{
    const result =  await fetch(baseURL+entity, {
        method: 'DELETE',
    });

    if(!result.ok){
        throw new Error(`Fetch failed, status: ${result.status}`);
    }
};

export const postData = async (entity, member)=>{
    const result =  await fetch(baseURL+entity, {
        method: 'POST',
        body: member,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

    if(!result.ok){
        throw new Error(`Fetch failed, status: ${result.status}`);
    }
};





