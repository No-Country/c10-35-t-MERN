/* eslint-disable prefer-promise-reject-errors */

export const helpFetch = () => {
const customFetch=(endopoint,options)=>{
const defaultHeader={
    accept:"application/json",
}
const controller=new AbortController();
options.signal=controller.signal;
options.method=options.method||"GET";
options.headers=options.headers?{...defaultHeader,...options.headers}:defaultHeader;

options.body=JSON.stringify(options.body||false);
if(!options.body)delete options.body;

setTimeout(()=>controller.abort(),3000);



return fetch(endopoint,options)
.then((res)=>
    res.ok
    ? res.json()
    :Promise.reject({
        err:true,
        status:res.status ||"00",
        statusText:res.statusText||"Ocurrio un error",
    }
    )
)
.catch((err)=>err);
};

const get=(url,options={})=>customFetch(url,options)

const post=(url,options={})=>{
options.method="POST";
return customFetch(url,options)
};

  return (
  post
  get
  )
}
